export default function AboutBook() {
  const checks = [
    'Explora el encanto del bosque El Yunque.',
    'Pasea por las calles coloridas del Viejo San Juan.',
    'Relájate en la playa con una piragua y buena vibra.',
  ]

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-4 md:px-6" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative h-full min-h-[400px]">
          <div className="absolute inset-0 bg-primary-container/20 rounded-xl -rotate-3" />
          <div className="absolute inset-4 bg-white rounded-xl shadow-lg border border-outline-variant/20 p-4">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/images/about.jpg"
              alt="Interior del libro Cozy Boricua"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="font-headline-lg text-headline-lg text-primary italic">
            Un viaje a colorear por Puerto Rico
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            <strong>Cozy Boricua</strong> es más que un libro de colorear — es un abrazo cálido de la isla. Creado por <em>Coquí Creative</em>, presenta la reimaginación más adorable de los lugares más icónicos de Puerto Rico.
          </p>
          <ul className="space-y-4 pt-2">
            {checks.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md text-on-surface">{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
