import { characters } from '../data/characters'
import CharacterCard from './CharacterCard'

export default function Characters() {
  return (
    <section id="personajes" className="py-24 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-headline-lg text-headline-lg text-primary italic mb-3">
            Conoce a los personajes
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Siete amigos listos para explorar contigo la isla.
          </p>
        </div>

        {/* Banner grupal */}
        <div className="mb-10 kawaii-shadow rounded-2xl overflow-hidden">
          <img
            src="/todoslospers.png"
            alt="Todos los personajes de Cozy Boricua"
            className="w-full h-auto"
          />
        </div>

        <div className="mb-10 kawaii-shadow rounded-2xl overflow-hidden">
          <img
            src="/personajes1.png"
            alt="Personajes principales"
            className="w-full h-auto"
          />
        </div>

        <div className="mb-10 kawaii-shadow rounded-2xl overflow-hidden">
          <img
            src="/personajes2.png"
            alt="Más personajes"
            className="w-full h-auto"
          />
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
