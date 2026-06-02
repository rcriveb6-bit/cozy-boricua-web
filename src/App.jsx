import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutBook from './components/AboutBook'
import PagePreview from './components/PagePreview'
import Features from './components/Features'
import Characters from './components/Characters'
import Community from './components/Community'
import Footer from './components/Footer'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal')
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <AboutBook />
        <PagePreview />
        <Features />
        <Characters />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
