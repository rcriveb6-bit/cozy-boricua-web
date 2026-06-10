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
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/60 kawaii-shadow transition-transform duration-200 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {f.icon}
                </span>
              </div>
              <h3 className="font-display text-xl text-on-surface mb-2">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
