import { links } from '../data/links'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-beach-gradient pt-16 md:pt-0">
      <div className="max-w-container-max mx-auto px-5 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="space-y-8 z-10 text-center md:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-label-lg font-bold sticker-lift border-0 shadow-none">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            ¡LLEGÓ EL COQUÍ!
          </div>

          <h1 className="font-display-lg text-[42px] md:text-display-lg text-primary leading-tight">
            Lleva la isla en <br />tu corazón
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0">
            El primer libro de colorear kawaii inspirado en la magia de Puerto Rico. Perfecto para tardes cozy y sueños de la isla.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href={links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-lift bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 no-underline"
              onClick={() => window.gtag?.('event', 'click_amazon_hero')}
            >
              Comprar en Amazon
              <span className="material-symbols-outlined">shopping_bag</span>
            </a>

            <a
              href="#gallery"
              className="sticker-lift bg-surface-container-high text-primary px-8 py-4 rounded-xl font-headline-md text-headline-md flex items-center justify-center no-underline"
            >
              Ver Muestra
            </a>
          </div>
        </div>

        {/* Book cover */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">

            <img
              alt="Cozy Boricua Book Cover"
              className="w-full h-auto rounded-xl sticker-lift rotate-2 relative z-10"
              src="/images/cover.jpg"
            />

            <div className="absolute -top-10 -right-5 sparkle-float text-primary pointer-events-none">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>colors_spark</span>
            </div>
            <div className="absolute -bottom-5 -left-10 sparkle-float-delay text-secondary pointer-events-none">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>

      </div>

      {/* BG decoration */}
      <div className="absolute top-0 right-0 p-8 text-outline/10 pointer-events-none select-none">
        <span className="material-symbols-outlined text-[180px]">cloud</span>
      </div>
    </section>
  )
}
