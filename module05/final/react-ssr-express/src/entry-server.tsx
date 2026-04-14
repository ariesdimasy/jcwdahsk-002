import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  // React 19 tidak selalu mengisi `helmetContext` pada SSR.
  // Jika kosong, ambil tag head langsung dari output HTML yang di-render.
  let headTags = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : ''

  let renderedHtml = html

  if (!headTags) {
    const prefixMatch = html.match(/^([\s\S]*?)(?=<(?:section|main|header|footer|article|nav|div|h1|h2|h3|p)\b)/i)

    if (prefixMatch) {
      const [, prefix] = prefixMatch
      const headTagRegex = /<(title|meta|link|script|style|noscript)(?:\s[^>]*)?(?:>([\s\S]*?)<\/\1>|\s*\/?>)/gi
      const tags = [...prefix.matchAll(headTagRegex)].map((match) => match[0])
      headTags = tags.length ? tags.join('\n    ') : ''
      const strippedPrefix = prefix.replace(headTagRegex, '')
      renderedHtml = strippedPrefix + html.slice(prefix.length)
    }
  }

  return { html: renderedHtml, headTags }
}
