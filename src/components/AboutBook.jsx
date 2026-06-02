export default function AboutBook() {
  const features = [
    { icon: 'check_circle', text: 'Explora el encanto del Yunque y sus criaturas únicas.' },
    { icon: 'check_circle', text: 'Pasea por las calles coloridas del Viejo San Juan.' },
    { icon: 'check_circle', text: 'Relájate en la playa con una piragua y buena vibra.' },
    { icon: 'check_circle', text: 'Conoce 7 personajes kawaii 100% boricuas.' },
  ]

  return (
    <section id="about" style={{ backgroundColor: '#fbf3e4', padding: '96px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image placeholder */}
          <div className="order-2 md:order-1 relative">
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(249,197,209,0.3)', borderRadius: '16px', transform: 'rotate(-3deg)' }} />
            <div
              className="sticker-lift relative rounded-xl overflow-hidden"
              style={{ backgroundColor: '#fff8ef', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', minHeight: '380px', margin: '12px' }}
            >
              <span style={{ fontSize: '64px' }}>🎨</span>
              <p style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: '20px', textAlign: 'center' }}>
                Páginas interiores
              </p>
              <p style={{ color: '#827476', fontSize: '13px', fontFamily: '"Be Vietnam Pro", sans-serif', textAlign: 'center' }}>
                Agrega una foto del libro abierto aquí
              </p>
              {/* <img src="/images/interior.jpg" alt="Interior del libro" className="w-full h-full object-cover rounded-lg" /> */}
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: 'clamp(26px, 3.5vw, 36px)', lineHeight: '1.2' }}>
              Un viaje a colorear por Puerto Rico
            </h2>

            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#504446', fontSize: '17px', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '3px solid #f9c5d1', paddingLeft: '16px' }}>
              "Desde las aguas del Yunque hasta los campos del Morro, desde una piragua en el Viejo San Juan hasta el dominó frente a la casita — Cozy Boricua te invita a colorear los momentos que hacen de Puerto Rico un lugar único en el mundo."
            </p>

            <ul className="space-y-4 pt-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined" style={{ color: '#3e6659', fontSize: '22px', flexShrink: 0, fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                  <span style={{ color: '#1e1b13', fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '16px', fontWeight: 500 }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
