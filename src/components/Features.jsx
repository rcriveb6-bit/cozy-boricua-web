const features = [
  {
    icon: 'palette',
    bgColor: 'bg-primary-container',
    textColor: 'text-primary',
    title: '30+ Escenas originales',
    desc: 'Desde El Morro hasta la bahía bioluminiscente — explora lo mejor de la isla.',
  },
  {
    icon: 'translate',
    bgColor: 'bg-secondary-container',
    textColor: 'text-secondary',
    title: 'Glosario bilingüe',
    desc: 'Aprende boricuismos y palabras en español mientras coloreas.',
  },
  {
    icon: 'history_edu',
    bgColor: 'bg-tertiary-fixed',
    textColor: 'text-tertiary',
    title: 'Amigable con marcadores',
    desc: 'Páginas de un solo lado, perfectas para tus marcadores alcohol o bolígrafos.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-tertiary-container/30">
      <div className="max-w-container-max mx-auto px-5 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-xl bg-white/50 sticker-lift border-0 shadow-none">
              <div className={`w-16 h-16 ${f.bgColor} ${f.textColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {f.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{f.title}</h3>
              <p className="text-body-md text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
