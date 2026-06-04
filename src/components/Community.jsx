import { links } from '../data/links'

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Community() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/20 rounded-full text-sm font-label text-on-surface tracking-wider">
              ✦ COMUNIDAD
            </div>

            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance text-on-surface">
              Únete a la comunidad boricua.
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl kawaii-shadow">
                <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal text-xl flex-shrink-0">🎨</div>
                <div>
                  <h4 className="font-display text-lg text-on-surface">Comparte tu arte</h4>
                  <p className="text-on-surface-variant text-sm">Usa <strong>{links.hashtag}</strong> y tu diseño podría aparecer aquí.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl kawaii-shadow">
                <div className="w-10 h-10 rounded-full bg-accent-coral/10 flex items-center justify-center text-accent-coral text-xl flex-shrink-0">🇵🇷</div>
                <div>
                  <h4 className="font-display text-lg text-on-surface">Orgullo boricua</h4>
                  <p className="text-on-surface-variant text-sm">Dondequiera que estés, la isla te espera.</p>
                </div>
              </div>
            </div>

            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-coral to-accent-gold text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 no-underline shadow-lg"
            >
              <InstagramIcon /> Síguenos en Instagram
            </a>
          </div>

          {/* Right — Preview */}
          <div className="relative">
            <div className="kawaii-shadow rounded-2xl overflow-hidden">
              <img
                src="/images/cover.jpg"
                alt="Cozy Boricua"
                className="w-full h-auto"
              />
            </div>
            {/* Floating tag */}
            <div className="absolute -top-3 -right-3 bg-white rounded-full px-4 py-2 kawaii-shadow text-sm font-display text-primary">
              {links.hashtag}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
