import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutBook from './components/AboutBook'
import PagePreview from './components/PagePreview'
import Features from './components/Features'
import Characters from './components/Characters'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0')
          e.target.classList.remove('opacity-0', 'translate-y-8')
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('section').forEach(s => {
      s.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8')
      observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

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
