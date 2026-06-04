import { links } from '../data/links'

const photos = [
  { src: '/images/about.jpg',  alt: 'Cozy Boricua libro abierto' },
  { src: '/images/page-1.jpg', alt: 'Página El Yunque' },
  { src: '/images/page-2.jpg', alt: 'Páginas coloreadas' },
  { src: '/images/page-3.jpg', alt: 'Cocina boricua' },
  { src: '/images/page-4.jpg', alt: 'El Morro' },
]

export default function SocialGrid() {
  return (
    <section className="py-16 md:py-20 bg-surface px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto space-y-8">

        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl md:text-3xl text-on-surface">
            Una vida hermosa ✨
          </h2>
          <p className="text-on-surface-variant text-sm">
            Sigue a <strong>@coquicreative</strong> y comparte tu arte.
          </p>
        </div>

        <div className="insta-grid max-w-[500px] mx-auto rounded-2xl overflow-hidden kawaii-shadow">
          {photos.map((photo, i) => (
            <div key={i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors text-sm font-label tracking-wider no-underline"
          >
            @coquicreative →
          </a>
        </div>
      </div>
    </section>
  )
}
