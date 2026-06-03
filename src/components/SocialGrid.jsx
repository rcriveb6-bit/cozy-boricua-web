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
    <section className="py-12 md:py-16 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary italic">
              Una vida hermosa
            </h2>
            <p className="text-on-surface-variant text-sm">
              está en los <span className="italic">detalles</span>.
            </p>
          </div>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-label-md font-label-md text-primary group text-xs no-underline"
          >
            SEGUIR @COQUICREATIVE
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                src={photo.src}
                alt={photo.alt}
              />
            </div>
          ))}
        </div>

        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 text-label-md font-label-md text-primary mt-6 text-xs no-underline"
        >
          SEGUIR @COQUICREATIVE
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>

      </div>
    </section>
  )
}
