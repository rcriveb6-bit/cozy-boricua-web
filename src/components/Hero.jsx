import { links } from '../data/links'
import logoCoqui from '../assets/logo-coqui-creative.png'

export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden bg-primary text-on-primary pt-20">

      {/* Ambient blobs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 organic-shape bg-primary-container blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 organic-shape bg-inverse-primary blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto px-4 md:px-6 w-full gap-12 items-center relative z-10">

        {/* Text */}
        <div className="flex flex-col md:items-start md:text-left order-2 md:order-1 space-y-6">
          <img src={logoCoqui} alt="Coquí Creative" className="w-40 md:w-52 mb-2" />

          <span className="text-label-md font-label-md tracking-widest uppercase opacity-90">
            Colorear la isla que llevas en el corazón
          </span>

          <h1 className="font-display-lg text-[42px] md:text-display-lg leading-tight">
            EL PRIMER LIBRO <span className="italic">KAWAII</span> DE PUERTO RICO
          </h1>

          <p className="text-body-lg font-body-lg max-w-lg opacity-80">
            Cozy Boricua — páginas únicas inspiradas en la magia de la isla. Para todas las edades, para toda la familia boricua.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href={links.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-primary px-8 py-3 rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-all uppercase tracking-widest no-underline"
              onClick={() => window.gtag?.('event', 'click_amazon_hero')}
            >
              Comprar — {links.price}
            </a>
            <a
              href="#gallery"
              className="border border-on-primary px-8 py-3 rounded-lg text-label-md font-label-md hover:bg-white/10 transition-all uppercase tracking-widest no-underline"
            >
              Ver páginas
            </a>
          </div>
        </div>

        {/* Book cover — organic shape */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <img
              src="/images/cover.jpg"
              alt="Cozy Boricua Book Cover"
              className="w-full h-full object-cover organic-shape shadow-2xl hover:rotate-0 transition-transform duration-500"
              style={{ transform: 'rotate(2deg)' }}
            />
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-primary-container text-5xl opacity-40 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <span className="material-symbols-outlined absolute -bottom-8 -left-8 text-secondary-fixed text-6xl opacity-30 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
          </div>
        </div>

      </div>

      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-surface wavy-divider rotate-180" />
    </section>
  )
}
