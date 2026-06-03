import { links } from '../data/links'

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Community() {
  return (
    <section className="bg-primary py-16 md:py-20 text-on-primary" id="comunidad">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/5 p-6 md:p-10 rounded-[40px] border border-white/10 backdrop-blur-sm">

          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-12 h-[1px] bg-white/50" />
              <span className="text-label-md font-label-md uppercase tracking-widest text-xs">Comunidad</span>
            </div>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg italic">
              Únete a la comunidad boricua.
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-full h-fit">
                  <span className="material-symbols-outlined text-xl">palette</span>
                </div>
                <div>
                  <h4 className="font-bold text-body-md">Comparte tu arte</h4>
                  <p className="text-white/70 text-sm">Usa {links.hashtag} y etiquétanos para aparecer en nuestra página.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-full h-fit">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </div>
                <div>
                  <h4 className="font-bold text-body-md">Orgullo boricua</h4>
                  <p className="text-white/70 text-sm">Para toda la familia, dentro y fuera de la isla. 🇵🇷</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-on-primary transition-all no-underline"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={links.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface text-primary px-6 py-2 rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-all uppercase tracking-widest no-underline"
              >
                Comprar en Amazon
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <img
              className="w-full h-auto rounded-3xl shadow-2xl max-h-[350px] object-cover hover:rotate-0 transition-transform duration-500"
              style={{ transform: 'rotate(2deg)' }}
              src="/images/page-4.jpg"
              alt="Página coloreada de Cozy Boricua"
            />
            <div className="absolute -top-6 -right-4" style={{ animation: 'bounce 3s ease-in-out infinite' }}>
              <span className="material-symbols-outlined text-on-tertiary-container text-2xl">star</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
