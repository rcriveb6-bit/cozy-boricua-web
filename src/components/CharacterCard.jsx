export default function CharacterCard({ character }) {
  const { img, emoji, name, species, quote, bgColor, accentColor } = character

  return (
    <div
      className="rounded-xl p-6 text-center flex flex-col items-center justify-between h-full"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${accentColor}`,
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'default'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div className="flex-1 flex items-center justify-center" style={{ marginBottom: '12px' }}>
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-auto"
            style={{ maxWidth: '140px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
          />
        ) : (
          <span style={{ fontSize: '52px', lineHeight: 1 }}>{emoji}</span>
        )}
      </div>
      <h3 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: accentColor, fontSize: '20px', marginBottom: '4px' }}>
        {name}
      </h3>
      <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#827476', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
        {species}
      </p>
      <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#504446', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5', maxWidth: '200px' }}>
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  )
}
