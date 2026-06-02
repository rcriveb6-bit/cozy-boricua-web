const features = [
  {
    icon: 'palette',
    iconBg: '#f9c5d1',
    iconColor: '#7b535e',
    title: '30+ Escenas originales',
    desc: 'Desde El Morro hasta la bahía bioluminiscente — explora lo mejor de la isla.'
  },
  {
    icon: 'translate',
    iconBg: '#bde9d8',
    iconColor: '#3e6659',
    title: 'Glosario bilingüe',
    desc: 'Aprende boricuismos y palabras en español mientras coloreas.'
  },
  {
    icon: 'edit',
    iconBg: '#add7ff',
    iconColor: '#30628a',
    title: 'Amigable con marcadores',
    desc: 'Páginas de un solo lado, perfectas para tus marcadores alcohol o bolígrafos.'
  }
]

export default function Features() {
  return (
    <section style={{ backgroundColor: 'rgba(173,215,255,0.2)', padding: '96px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-16">

        <div className="text-center mb-14 space-y-3">
          <h2 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
            ¿Por qué Cozy Boricua? ✨
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="sticker-lift rounded-xl p-8 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: f.iconBg }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '32px', color: f.iconColor, fontVariationSettings: "'FILL' 1" }}
                >
                  {f.icon}
                </span>
              </div>
              <h3 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#1e1b13', fontSize: '20px', marginBottom: '8px' }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#504446', fontSize: '15px', lineHeight: '1.6' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
