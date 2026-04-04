
import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: 'http://localhost:3000/api/chat',
      body: { chatSessionId: Math.random().toString(36).substring(2) },
    }),
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    await sendMessage({ text: trimmed })
    setInput('')
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
       

        <div className='flex flex-col p-4'>
          <div className='flex-1 overflow-y-auto'>
            {messages.map((message:any, index:number) => (
              <div key={message.id ?? index} className={`my-2 p-2 rounded ${message.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
                {message.parts.map((part:any, partIndex:number) => {
                  if (part.type === 'text' || part.type === 'reasoning') {
                    return <span key={partIndex}>{part.text}</span>
                  }
                  return null
                })}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className='mt-4 flex gap-2'>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              disabled={status !== 'ready'}
            />
            <button type="submit" className='bg-black text-white px-4 py-2'>Send</button>
          </form>


        </div>

      </section>

  
  
    </>
  )
}

export default App
