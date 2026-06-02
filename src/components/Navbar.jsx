import { useState } from 'react'
import { links } from '../data/links'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{ backgroundColor: 'rgba(255,248,239,0.85)', backdropFilter: 'blur(12px)', fontFamily: '"Be Vietnam Pro", sans-serif' }}
      className="sticky top-0 z-50 border-b-2"
      tabIndex={-1}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🐸</span>
          <span style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: '20px' }}>
            Coquí Creative
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[['#gallery', 'Galería'], ['#about', 'El libro'], ['#personajes', 'Personajes'], ['#comunidad', 'Comunidad']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ color: '#504446', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#3e6659'}
              onMouseLeave={e => e.target.style.color = '#504446'}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-lift hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-full no-underline"
            style={{ backgroundColor: '#7b535e', color: 'white', fontWeight: 700, fontSize: '14px' }}
          >
            Comprar en Amazon
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>shopping_bag</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#7b535e', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#7b535e', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#7b535e', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#fff8ef', borderTop: '1px solid #d3c2c5', padding: '16px 20px 20px' }}>
          {[['#gallery', 'Galería'], ['#about', 'El libro'], ['#personajes', 'Personajes'], ['#comunidad', 'Comunidad']].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: '#504446', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid #f5edde' }}
            >
              {label}
            </a>
          ))}
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-lift inline-flex items-center gap-1 mt-4 px-6 py-3 rounded-full no-underline"
            style={{ backgroundColor: '#7b535e', color: 'white', fontWeight: 700, fontSize: '15px' }}
          >
            Comprar en Amazon → {links.price}
          </a>
        </div>
      )}
    </header>
  )
}
