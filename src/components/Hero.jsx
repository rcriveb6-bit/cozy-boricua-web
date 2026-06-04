import { links } from '../data/links'
import logoCoqui from '../assets/logo-coqui-creative.png'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-container pt-24 pb-16">
      {/* Ambient blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="blob-1 absolute top-5 right-5 bg-accent-teal/30" />
        <div className="blob-2 absolute bottom-10 left-10 bg-accent-coral/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto px-4 md:px-8 w-full gap-8 lg:gap-16 items-center relative z-10">

        {/* Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-7">
          <img
            src={logoCoqui}
            alt="Coquí Creative"
            className="w-36 md:w-44 mb-1 opacity-90"
          />

          <span className="text-sm md:text-base tracking-[0.3em] uppercase font-label text-secondary-container/80">
            ✦ Colorear la isla que llevas en el corazón ✦
          </span>

          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1] text-balance text-on-primary">
            EL PRIMER LIBRO <span className="italic text-accent-gold">KAWAII</span>
            <br />
            DE PUERTO RICO
          </h1>

          <p className="text-base md:text-lg max-w-lg text-on-primary/80 leading-relaxed">
            {links.bookTitle} — páginas únicas inspiradas en la magia de la isla. Para todas las edades, para toda la familia boricua.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href={links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-coral text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-accent-coral/90 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(224,122,95,0.4)] active:translate-y-0 no-underline"
              onClick={() => window.gtag?.('event', 'click_amazon_hero')}
            >
              🎨 Comprar — {links.price}
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-on-primary/60 text-on-primary px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-white/10 hover:border-on-primary hover:-translate-y-0.5 active:translate-y-0 no-underline"
            >
              👀 Ver páginas
            </a>
          </div>
        </div>

        {/* Book cover */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] lg:max-w-[500px]">
            {/* Decorative blobs behind cover */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent-coral/15 rounded-full blur-xl" />

            <div className="organic-frame overflow-hidden shadow-2xl transition-transform duration-700 ease-out hover:rotate-0" style={{ transform: 'rotate(1.5deg)' }}>
              <img
                src="/images/cover.jpg"
                alt="Cozy Boricua Book Cover"
                className="w-full h-auto"
              />
            </div>

            {/* Floating price badge */}
            <div className="absolute -bottom-3 -right-3 price-badge shadow-lg">
              <span>$14.99</span>
            </div>
          </div>
        </div>

      </div>

      {/* Organic bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 700,0 1200,60 L1200,120 L0,120 Z" fill="var(--color-surface)" opacity="1"/>
        </svg>
      </div>
    </section>
  )
}
