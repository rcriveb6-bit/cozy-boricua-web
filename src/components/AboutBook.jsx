export default function AboutBook() {
  const checks = [
    'Explora el encanto del bosque El Yunque.',
    'Pasea por las calles coloridas del Viejo San Juan.',
    'Relájate en la playa con una piragua y buena vibra.',
  ]

  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-container-max mx-auto px-5 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="order-2 md:order-1 relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-primary-container/20 rounded-xl -rotate-3" />
            <div className="absolute inset-4 bg-white rounded-xl shadow-lg border-2 border-outline/10 p-4 flex items-center justify-center">
              {/* Replace with real image: /images/interior.jpg */}
              <div className="w-full h-full rounded-lg bg-surface-container-low flex flex-col items-center justify-center gap-3 min-h-[300px]">
                <span className="text-[60px]">🎨</span>
                <p className="font-headline-md text-headline-md text-primary text-center">Páginas interiores</p>
                <p className="text-body-md text-on-surface-variant text-center text-sm px-4">Agrega una foto aquí → public/images/interior.jpg</p>
              </div>
              {/* <img className="w-full h-full object-cover rounded-lg" src="/images/interior.jpg" alt="Interior del libro Cozy Boricua" /> */}
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Un viaje a colorear por Puerto Rico
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              <strong>Cozy Boricua</strong> es más que un libro de colorear — es un abrazo cálido de la isla. Creado por <em>Coquí Creative</em>, presenta la reimaginación más adorable de los lugares más icónicos de Puerto Rico.
            </p>
            <ul className="space-y-4 pt-4">
              {checks.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="text-body-md font-medium text-on-surface">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
