import { characters } from '../data/characters'
import CharacterCard from './CharacterCard'

export default function Characters() {
  return (
    <section id="personajes" style={{ backgroundColor: '#fbf3e4', padding: '96px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-16">

        <div className="text-center mb-14 space-y-3">
          <h2 style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 700, color: '#7b535e', fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
            Conoce a los personajes 🌟
          </h2>
          <p style={{ color: '#504446', fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '17px' }}>
            Siete amigos kawaii listos para explorar contigo la isla.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

      </div>
    </section>
  )
}
