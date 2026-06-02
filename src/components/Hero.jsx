import { links } from '../data/links'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-beach-gradient pt-8 pb-16">
      <div className="max-w-[1100px] mx-auto px-5 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text side */}
        <div className="space-y-6 z-10 text-center md:text-left order-2 md:order-1">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ backgroundColor: '#bde9d8', color: '#3e6659', fontWeight: 700, fontSize: '13px', fontFamily: '"Be Vietnam Pro", sans-serif' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Boriken Coloring Series · Libro 1
          </div>

          {/* Main headline */}
          <h1 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: '1.15', letterSpacing: '-0.5px' }}>
            Colorea la isla que llevas en el corazón.
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#504446', fontSize: '18px', lineHeight: '1.6', maxWidth: '480px' }}>
            <strong>Cozy Boricua</strong> — el primer libro de colorear kawaii inspirado en Puerto Rico.
          </p>

          <p style={{ color: '#7b535e', fontSize: '15px', fontWeight: 500, fontFamily: '"Be Vietnam Pro", sans-serif' }}>
            Para todas las edades. Para toda la familia. Para todo boricua de corazón. 🇵🇷
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
            <a
              href={links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-lift inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl no-underline"
              style={{ backgroundColor: '#7b535e', color: 'white', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 800, fontSize: '16px' }}
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_amazon_cta', { event_category: 'hero' })
                }
              }}
            >
              Comprar en Amazon
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>shopping_bag</span>
            </a>

            <a
              href="#gallery"
              className="sticker-lift inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl no-underline"
              style={{ backgroundColor: '#f5edde', color: '#7b535e', fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 700, fontSize: '16px' }}
            >
              Ver las páginas
            </a>
          </div>

          {/* Price tag */}
          <p style={{ color: '#827476', fontSize: '13px', fontFamily: '"Be Vietnam Pro", sans-serif' }}>
            📦 Disponible en Amazon · <strong style={{ color: '#7b535e' }}>{links.price}</strong> · Envío Prime disponible
          </p>
        </div>

        {/* Book cover side */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[420px]">

            {/* Placeholder — reemplazar src con imagen real de la portada */}
            <div
              className="sticker-lift rounded-xl overflow-hidden"
              style={{ transform: 'rotate(2deg)', aspectRatio: '1 / 1', backgroundColor: '#f9c5d1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}
            >
              <span style={{ fontSize: '80px' }}>📚</span>
              <p style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: '18px', textAlign: 'center', padding: '0 20px' }}>
                Cozy Boricua
              </p>
              <p style={{ color: '#827476', fontSize: '13px', fontFamily: '"Be Vietnam Pro", sans-serif' }}>
                Agrega la portada del libro aquí
              </p>
            </div>
            {/* Cuando tengas la imagen: */}
            {/* <img src="/images/cover.jpg" alt="Cozy Boricua Book Cover" className="sticker-lift rounded-xl w-full" style={{ transform: 'rotate(2deg)' }} /> */}

            {/* Floating sparkles */}
            <div className="sparkle-float absolute -top-8 -right-4" style={{ color: '#7b535e', pointerEvents: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>colors_spark</span>
            </div>
            <div className="sparkle-float-delay absolute -bottom-4 -left-8" style={{ color: '#3e6659', pointerEvents: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-8 pointer-events-none select-none" style={{ color: 'rgba(130,116,118,0.08)' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '180px' }}>cloud</span>
      </div>
    </section>
  )
}
