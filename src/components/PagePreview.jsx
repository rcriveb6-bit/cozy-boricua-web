const pages = [
  { src: null, label: 'B/W para colorear',     rotate: 'rotate-2',  desc: 'Sato en la hamaca 🐶' },
  { src: null, label: 'Inspiración coloreada',  rotate: '-rotate-2', desc: 'Frutas tropicales 🍍' },
  { src: null, label: 'B/W para colorear',     rotate: 'rotate-1',  desc: 'Cocina boricua 🍳' },
  { src: null, label: 'Inspiración coloreada',  rotate: '-rotate-1', desc: 'Piraguas en El Morro 🏰' },
]

export default function PagePreview() {
  return (
    <section className="py-24 bg-background" id="gallery">
      <div className="max-w-container-max mx-auto px-5 md:px-16">

        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Sneak Peek 👀</h2>
          <p className="text-body-lg text-on-surface-variant">¡Mira algunas de nuestras páginas favoritas!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pages.map((page, i) => (
            <div key={i} className={`sticker-lift bg-white p-2 rounded-xl ${page.rotate}`}>
              <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex flex-col items-center justify-center gap-2">
                {page.src ? (
                  <img src={page.src} alt={page.desc} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span className="text-[40px]">🎨</span>
                    <p className="text-body-md text-on-surface-variant text-center text-xs px-2">{page.desc}</p>
                  </>
                )}
              </div>
              <p className="text-center text-label-lg text-label-lg mt-3 text-outline font-label-lg">{page.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
