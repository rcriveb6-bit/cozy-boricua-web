import { useState, useEffect } from 'react'
import { links } from '../data/links'
import logoCoqui from '../assets/logo-coqui-creative.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    ['#about', 'El libro'],
    ['#gallery', 'Páginas'],
    ['#personajes', 'Personajes'],
    ['#comunidad', 'Comunidad'],
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-outline-variant transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <nav className="flex justify-between items-center w-full px-4 md:px-6 max-w-[1200px] mx-auto h-20">

        <a href="#" className="font-headline-lg text-headline-md text-primary italic no-underline order-2 md:order-1 flex items-center gap-2">
          <img src={logoCoqui} alt="Coquí Creative" className="h-8 w-auto" />
          Coquí Creative
        </a>

        <div className="hidden md:flex gap-8 order-2">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md no-underline">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 order-3">
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-primary text-on-primary px-6 py-2 rounded-lg text-label-md font-label-md hover:opacity-90 transition-all active:scale-95 no-underline"
          >
            Comprar ahora
          </a>
          <button className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-all" onClick={() => setOpen(o => !o)} aria-label="Menú">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-4 pb-6 pt-4 space-y-1">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-on-surface-variant text-body-md border-b border-outline-variant/30 no-underline hover:text-primary transition-colors">
              {label}
            </a>
          ))}
          <a href={links.amazon} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-primary text-on-primary px-6 py-3 rounded-lg text-label-md font-label-md no-underline">
            Comprar en Amazon — {links.price}
          </a>
        </div>
      )}
    </header>
  )
}
