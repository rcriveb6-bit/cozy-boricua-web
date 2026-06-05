const stickers = [
  { name: 'buendia', label: '¡Buen día!' },
  { name: 'queeeee', label: '¿Quéééé?' },
  { name: 'ah', label: '¿Ah?' },
  { name: 'acuerdate', label: '¡Acuérdate!' },
  { name: 'tengo-sueno', label: 'Tengo sueño' },
  { name: 'wepa', label: '¡Wepa!' },
  { name: 'aprobao', label: '¡Aprobao!' },
  { name: 'que-nitido', label: '¡Qué nítido!' },
  { name: 'oye-tu', label: '¡Oye tú!' },
  { name: 'achis', label: '¡Achís!' },
  { name: 'enfogonao', label: '¡Enfogonao!' },
  { name: 'que-chuleria', label: '¡Qué chulería!' }
]

export default function Stickers() {
  return (
    <section id="stickers" className="py-20 md:py-28 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-coral/20 rounded-full text-sm font-label text-on-surface tracking-wider mb-4">
            ✦ STICKERS
          </div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance text-on-surface">
            Stickers Cozy Boricua 🎨
          </h2>
          <p className="text-on-surface-variant text-sm mt-3">
            ¡Descarga y comparte estos stickers kawaii con tus amigos!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stickers.map(s => (
            <div
              key={s.name}
              className="bg-white rounded-xl p-3 kawaii-shadow hover:-translate-y-1 transition-all duration-200"
            >
              <img
                src={`/stickers/${s.name}.png`}
                alt={s.label}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <p className="mt-2 text-center text-xs font-display text-on-surface">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
