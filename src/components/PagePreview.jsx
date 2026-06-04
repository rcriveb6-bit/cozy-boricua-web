const bentoItems = [
  {
    src: '/images/page-1.jpg',
    title: 'Páginas para colorear',
    sub: 'Más de 30 escenas únicas de Puerto Rico.',
    link: '#gallery',
    linkText: 'Ver la galería →',
    large: true,
  },
  {
    src: '/images/page-2.jpg',
    title: 'Inspiración coloreada',
    sub: 'Guía de colores incluida.',
    link: '#gallery',
    linkText: 'Ver más →',
    large: false,
  },
  {
    src: '/images/page-3.jpg',
    title: 'Glosario bilingüe',
    sub: 'Español — English. Aprende mientras coloreas.',
    link: '#gallery',
    linkText: 'Explorar →',
    large: false,
  },
]

export default function PagePreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8" id="gallery">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-coral/10 rounded-full text-sm font-label text-accent-coral tracking-wider">
            ✦ SNEAK PEEK
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-on-surface">
            Un vistazo al interior
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            Explora algunos de nuestros diseños favoritos del libro.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {bentoItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`group relative bento-card bg-white kawaii-shadow ${item.large ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl text-white mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm mb-2">{item.sub}</p>
                <span className="text-white/90 text-sm font-label tracking-wide underline underline-offset-4 decoration-accent-gold/60">
                  {item.linkText}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
