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
    price: '30+ páginas',
    mt: 'md:-mt-8',
  },
  {
    src: '/images/page-4.jpg',
    category: 'Escenas históricas',
    title: 'El Morro',
    price: 'Glosario bilingüe',
    mt: 'md:mt-16',
  },
]

export default function PageCards() {
  return (
    <section className="bg-secondary-container relative overflow-hidden py-16 md:py-24">

      {/* Wavy top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-surface wavy-divider" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 pt-16">

        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-secondary italic mb-4">
            Lo Más Querido
          </h2>
          <p className="text-on-secondary-container/80 max-w-xl mx-auto text-body-md">
            Páginas favoritas que capturan la magia única de Puerto Rico.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {cards.map((card, i) => (
            <div key={i} className={`flex flex-col gap-4 group ${card.mt}`}>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white/50 border border-outline-variant/30 relative">
                <img
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  src={card.src}
                  alt={card.title}
                />
                {i === 0 && (
                  <span className="absolute top-3 right-3 bg-primary text-on-primary text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                    Nuevo
                  </span>
                )}
              </div>
              <div className="text-center">
                <p className="text-label-md font-label-md text-secondary/70">{card.category}</p>
                <h4 className="font-headline-md text-headline-md text-secondary">{card.title}</h4>
                <p className="text-body-md font-bold text-primary mt-1">{card.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-on-secondary px-10 py-3 rounded-lg text-label-md font-label-md hover:opacity-90 transition-all uppercase tracking-widest no-underline"
          >
            Ver en Amazon — {links.price}
          </a>
        </div>

      </div>

      {/* Wavy bottom → bg-primary */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary wavy-divider rotate-180" />
    </section>
  )
}
