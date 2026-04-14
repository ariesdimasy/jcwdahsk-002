import { Helmet } from 'react-helmet-async'
import reactLogo from './../../assets/react.svg'
import viteLogo from './../../assets/vite.svg'
import heroImg from './../../assets/hero.png'
import './../../App.css'

export default function Home(){
    return (
        <>
      <Helmet>
        <title>React SSR Express — Get Started</title>
        <meta name="description" content="Starter template React SSR dengan Vite + Express + TypeScript." />
        <meta property="og:title" content="React SSR Express" />
        <meta property="og:description" content="Starter template React SSR dengan Vite + Express + TypeScript." />
        <meta property="og:type" content="website" />
      </Helmet>
     

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
         
        </div>
     
      </section>

      <div className="ticks"></div>

  
    </>
    )
}