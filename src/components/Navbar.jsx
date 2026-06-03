import { useState } from 'react'
import { links } from '../data/links'
import logoCoqui from '../assets/logo-coqui-creative.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    ['#gallery', 'Galería'],
    ['#about', 'El libro'],
    ['#personajes', 'Personajes'],
    ['#comunidad', 'Comunidad'],
  ]

  return (
    <header className="bg-background/80 backdrop-blur-md text-primary font-headline-md text-headline-md sticky top-0 border-b-2 border-outline-variant/30 z-50">
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-container-max mx-auto w-full">

        {/* Logo */}
        <a href="#" className="no-underline flex items-center">
          <img src="/images/logo.png" alt="Coquí Creative" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-300 no-underline"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary hover:text-secondary transition-colors hidden md:block">
            favorite
          </button>
          <button className="material-symbols-outlined text-primary hover:text-secondary transition-colors hidden md:block">
            shopping_cart
          </button>
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-lift bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg no-underline active:scale-95 hidden md:inline-flex items-center gap-1"
          >
            Comprar
            <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-background border-t border-outline-variant/30 px-5 pb-5 pt-3 space-y-1">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-on-surface-variant font-body-md text-body-md border-b border-outline-variant/20 no-underline hover:text-secondary transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-lift bg-primary text-on-primary px-6 py-3 rounded-full font-label-lg text-label-lg no-underline inline-flex items-center gap-2 mt-4"
          >
            Comprar en Amazon → {links.price}
          </a>
        </div>
      )}
    </header>
  )
}
