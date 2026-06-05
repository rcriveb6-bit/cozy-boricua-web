import { useState, useEffect } from 'react'
import { links } from '../data/links'

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
    ['#gallery', 'Galería'],
    ['#personajes', 'Personajes'],
    ['#comunidad', 'Comunidad'],
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-display text-lg md:text-xl text-primary no-underline hover:opacity-80 transition-opacity">
          {links.brandName}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(([href, label]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-label tracking-wide no-underline transition-colors ${
                scrolled ? 'text-on-surface hover:text-primary' : 'text-on-primary/80 hover:text-on-primary'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-coral text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-accent-coral/90 hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-md"
          >
            Comprar ahora
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-on-surface' : 'bg-on-primary'
          } ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-on-surface' : 'bg-on-primary'
          } ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-on-surface' : 'bg-on-primary'
          } ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-outline-variant">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(([href, label]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block text-on-surface font-label text-sm tracking-wide no-underline py-2"
              >
                {label}
              </a>
            ))}
            <a
              href={links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-accent-coral text-white px-5 py-3 rounded-full text-sm font-bold tracking-wider uppercase no-underline mt-4"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
