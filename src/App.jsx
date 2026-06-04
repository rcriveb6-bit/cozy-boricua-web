import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutBook from './components/AboutBook'
import PagePreview from './components/PagePreview'
import PageCards from './components/PageCards'
import Community from './components/Community'
import SocialGrid from './components/SocialGrid'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
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
      s.classList.add('transition-all', 'duration-800', 'opacity-0', 'translate-y-8')
      observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          <div className="wave-divider" />
          <AboutBook />
        </div>
        <div className="relative bg-primary/5">
          <div className="wave-divider wave-divider-flip bg-primary/5" style={{ background: 'var(--color-primary/0.05)' }} />
          <PagePreview />
          <div className="wave-divider bg-primary/5" style={{ background: 'var(--color-primary/0.05)' }} />
        </div>
        <PageCards />
        <div className="relative bg-surface-container-low">
          <div className="wave-divider wave-divider-flip" />
          <Community />
        </div>
        <SocialGrid />
      </main>
      <Footer />
    </div>
  )
}
