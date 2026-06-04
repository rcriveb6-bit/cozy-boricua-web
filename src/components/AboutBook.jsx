export default function AboutBook() {
  const checks = [
    'Explora el encanto del bosque El Yunque.',
    'Pasea por las calles coloridas del Viejo San Juan.',
    'Relájate en la playa con una piragua y buena vibra.',
  ]

  return (
    <section className="py-20 md:py-28 max-w-[1200px] mx-auto px-4 md:px-8" id="about">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Image */}
        <div className="relative">
          <div className="organic-frame overflow-hidden shadow-[0_10px_40px_-8px_rgba(45,106,79,0.2)]">
            <img
              src="/images/about.jpg"
              alt="Interior del libro Cozy Boricua"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative dot */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-coral/10 rounded-full" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-teal/10 rounded-full" />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-label text-primary tracking-wider">
            ✦ SOBRE EL LIBRO
          </div>

          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance text-on-surface">
            Un viaje a colorear por Puerto Rico
          </h2>

          <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
            <strong className="text-primary font-display">Cozy Boricua</strong> es más que un libro de colorear — es un abrazo cálido de la isla. Creado por <span className="italic text-secondary">Coquí Creative</span>, presenta la reimaginación más adorable de los lugares más icónicos de Puerto Rico.
          </p>

          <ul className="space-y-3 pt-2">
            {checks.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5 text-sm">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
