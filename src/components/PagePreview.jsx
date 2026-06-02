const previewPages = [
  {
    src: null, // '/images/preview-1.jpg'
    label: 'B/W para colorear',
    rotate: 'rotate(2deg)',
    description: 'Sato en la hamaca 🐶'
  },
  {
    src: null, // '/images/preview-2.jpg'
    label: 'Coloreado — inspiración',
    rotate: 'rotate(-2deg)',
    description: 'Frutas tropicales 🌺'
  },
  {
    src: null, // '/images/preview-3.jpg'
    label: 'B/W para colorear',
    rotate: 'rotate(1deg)',
    description: 'Cocina boricua 🍳'
  },
  {
    src: null, // '/images/preview-4.jpg'
    label: 'Coloreado — inspiración',
    rotate: 'rotate(-1deg)',
    description: 'Piraguas en El Morro 🏰'
  },
]

export default function PagePreview() {
  return (
    <section id="gallery" style={{ backgroundColor: '#fff8ef', padding: '96px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-16">

        <div className="text-center mb-14 space-y-3">
          <h2 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
            Sneak Peek 👀
          </h2>
          <p style={{ color: '#504446', fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '17px' }}>
            ¡Mira algunas de nuestras páginas favoritas!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewPages.map((page, i) => (
            <div key={i} className="sticker-lift bg-white p-2 rounded-xl" style={{ transform: page.rotate }}>
              <div
                className="rounded-lg overflow-hidden"
                style={{ aspectRatio: '1/1', backgroundColor: '#f5edde', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {page.src ? (
                  <img src={page.src} alt={page.description} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span style={{ fontSize: '36px' }}>🎨</span>
                    <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '12px', color: '#827476', textAlign: 'center', padding: '0 8px' }}>
                      {page.description}
                    </p>
                  </>
                )}
              </div>
              <p style={{ textAlign: 'center', fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '12px', color: '#827476', marginTop: '8px', fontWeight: 600 }}>
                {page.label}
              </p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#827476', fontSize: '13px', fontFamily: '"Be Vietnam Pro", sans-serif', marginTop: '24px' }}>
          💡 Agrega las imágenes en <code style={{ backgroundColor: '#f5edde', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>public/images/</code> y actualiza los src en PagePreview.jsx
        </p>

      </div>
    </section>
  )
}
