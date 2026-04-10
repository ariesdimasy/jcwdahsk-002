import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express, { Request, Response } from 'express'
import { createServer as createViteServer, ViteDevServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000
const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()

  let vite: ViteDevServer | undefined

  if (!isProd) {
    // ─── Development: Vite sebagai middleware ───────────────────────────────
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })

    // Gunakan Vite sebagai dev middleware (HMR, transformasi modul, dll.)
    app.use(vite.middlewares)
  } else {
    // ─── Production: static file dari dist/client ───────────────────────────
    app.use(
      express.static(path.resolve(__dirname, '../dist/client'), {
        index: false,
      }),
    )
  }

  // ─── Catch-all handler untuk SSR ─────────────────────────────────────────
  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl

    try {
      let template: string
      let render: () => { html: string; headTags: string }

      if (!isProd) {
        // Dev: baca index.html fresh tiap request lalu transform via Vite
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite!.transformIndexHtml(url, template)

        // Muat entry-server lewat Vite (supaya HMR berjalan)
        const module = await vite!.ssrLoadModule('/src/entry-server.tsx')
        render = module.render
      } else {
        // Prod: gunakan file yang sudah di-build
        template = fs.readFileSync(
          path.resolve(__dirname, '../dist/client/index.html'),
          'utf-8',
        )
        // @ts-expect-error — file ini ada setelah `npm run build:ssr`
        const { render: prodRender } = await import('../dist/server/entry-server.js')
        render = prodRender
      }

      // Jalankan SSR → hasilkan HTML string + head tags dari Helmet
      const { html: appHtml, headTags } = render(url)

      // Inject konten + head tags ke dalam template
      const finalHtml = template
        .replace('%HEAD_TAGS%', headTags ?? '')
        .replace('<!--ssr-outlet-->', appHtml)

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(finalHtml)
    } catch (error) {
      // Di dev, biarkan Vite memperbaiki stack trace agar mudah di-debug
      if (!isProd && vite) {
        vite.ssrFixStacktrace(error as Error)
      }
      console.error((error as Error).stack)
      res.status(500).end((error as Error).message)
    }
  })

  app.listen(PORT, () => {
    console.log(`
  🚀  Server berjalan di http://localhost:${PORT}
  📦  Mode : ${isProd ? 'production' : 'development'}
    `)
  })
}

createServer()
