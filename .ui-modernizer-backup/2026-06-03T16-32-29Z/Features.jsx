const features = [
  {
    icon: 'palette',
    title: '30+ Escenas originales',
    desc: 'Desde El Morro hasta la bahía bioluminiscente — explora lo mejor de la isla.',
  },
  {
    icon: 'translate',
    title: 'Glosario bilingüe',
    desc: 'Aprende boricuismos y palabras en español mientras coloreas página por página.',
  },
  {
    icon: 'ink_marker',
    title: 'Marker friendly',
    desc: 'Páginas de un solo lado, diseñadas para marcadores alcohol y bolígrafos de calidad.',
  },
]

export default function Features() {
  return (
    <section className="bg-secondary-container relative overflow-hidden py-16 md:py-24">

      {/* Wavy top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-surface wavy-divider" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-xl bg-white/50">
              <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {f.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{f.title}</h3>
              <p className="text-body-md text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary wavy-divider rotate-180" />
    </section>
  )
}
