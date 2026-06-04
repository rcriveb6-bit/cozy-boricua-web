import { links } from '../data/links'

const cards = [
  {
    src: '/images/page-1.jpg',
    category: 'Escenas de Puerto Rico',
    title: 'El Yunque',
    price: 'Libro • $14.99',
    mt: 'md:-mt-8',
  },
  {
    src: '/images/page-2.jpg',
    category: 'Páginas coloreadas',
    title: 'Frutas Tropicales',
    price: 'Inspiración incluida',
    mt: 'md:mt-16',
  },
  {
    src: '/images/page-3.jpg',
    category: 'B/W para colorear',
    title: 'Cocina Boricua',
    price: 'Diseños originales',
    mt: 'md:-mt-8',
  },
  {
    src: '/images/page-4.jpg',
    category: 'Escenas de Puerto Rico',
    title: 'El Morro',
    price: 'Historia viva',
    mt: 'md:mt-16',
  },
]

export default function PageCards() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-teal/10 rounded-full text-sm font-label text-accent-teal tracking-wider">
            ✦ LO MÁS QUERIDO
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-on-surface">
            Personajes y lugares favoritos
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            Cada página es un pedacito de la isla.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl overflow-hidden kawaii-shadow transition-all duration-300 hover:-translate-y-1 ${card.mt}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <span className="text-accent-gold text-xs font-label tracking-widest uppercase">
                  {card.category}
                </span>
                <h3 className="font-display text-xl text-white">{card.title}</h3>
                <p className="text-white/70 text-sm">{card.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-coral text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-accent-coral/90 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(224,122,95,0.4)] active:translate-y-0 no-underline"
          >
            🛒 VER EN AMAZON — {links.price}
          </a>
        </div>
      </div>
    </section>
  )
}
