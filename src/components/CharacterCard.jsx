import { useEffect, useRef } from 'react'

export default function CharacterCard({ character }) {
  const { img, video, emoji, name, species, quote, bgColor, accentColor } = character
  const videoRef = useRef(null)

  // Reproduce el video solo cuando la tarjeta está visible (ahorra batería/datos en móvil)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [video])

  return (
    <div
      className="rounded-xl p-6 text-center flex flex-col items-center justify-between h-full transition-transform duration-200 ease-out hover:scale-105 focus-within:scale-105"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${accentColor}`,
      }}
    >
      <div className="flex-1 flex items-center justify-center mb-3">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            poster={img}
            muted
            loop
            playsInline
            preload="none"
            aria-label={name}
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: '140px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
          />
        ) : img ? (
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-auto"
            style={{ maxWidth: '140px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
          />
        ) : (
          <span style={{ fontSize: '52px', lineHeight: 1 }}>{emoji}</span>
        )}
      </div>
      <h3 className="font-display font-semibold text-xl mb-1" style={{ color: accentColor }}>
        {name}
      </h3>
      <p className="font-label text-xs font-semibold uppercase tracking-wide mb-2.5" style={{ color: '#827476' }}>
        {species}
      </p>
      <p className="font-body text-[13px] italic leading-relaxed max-w-[200px]" style={{ color: '#504446' }}>
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  )
}
