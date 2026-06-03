const bentoItems = [
  {
    src: '/images/page-1.jpg',
    title: 'Páginas para colorear',
    sub: 'Más de 30 escenas únicas de Puerto Rico.',
    link: '#gallery',
    linkText: 'Ver la galería',
    large: true,
  },
  {
    src: '/images/page-2.jpg',
    title: 'Inspiración coloreada',
    sub: 'Guía de colores incluida.',
    link: '#gallery',
    linkText: 'Ver más',
    large: false,
  },
  {
    src: '/images/page-3.jpg',
    title: 'Glosario bilingüe',
    sub: 'Aprende boricuismos mientras coloreas.',
    link: '#gallery',
    linkText: 'Explorar',
    large: false,
  },
]

export default function PagePreview() {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 md:px-6" id="gallery">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary italic mb-4">
          Sneak Peek
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto text-body-md">
          Explora algunos de nuestros diseños favoritos del libro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Large card */}
        <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-secondary-container">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={bentoItems[0].src}
            alt={bentoItems[0].title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="font-headline-md text-headline-md mb-2">{bentoItems[0].title}</h3>
            <p className="text-body-md opacity-90 mb-4">{bentoItems[0].sub}</p>
            <a href={bentoItems[0].link} className="text-label-md font-label-md underline underline-offset-4 decoration-2 hover:opacity-80 no-underline text-white">
              {bentoItems[0].linkText}
            </a>
          </div>
        </div>

        {/* Small cards */}
        <div className="grid grid-rows-2 gap-6 md:col-span-4">
          {bentoItems.slice(1).map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl bg-primary-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.src}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-headline-md text-headline-md mb-1">{item.title}</h3>
                <a href={item.link} className="text-label-md font-label-md underline underline-offset-4 no-underline text-white hover:opacity-80">
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
