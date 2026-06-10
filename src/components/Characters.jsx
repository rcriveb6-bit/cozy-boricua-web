import { characters } from '../data/characters'
import CharacterCard from './CharacterCard'

export default function Characters() {
  return (
    <section id="personajes" className="py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-primary italic mb-3">
            Conoce a los personajes
          </h2>
          <p className="text-on-surface-variant">
            Seis amigos listos para explorar contigo la isla.
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
