import { Suspense } from 'react'
import './App.css'
import { ErrorBoundary } from './ErrorBoundary'
import { use } from './use'

const getPokemon = async (name) => {
  const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return reponse.json()
}

const PokemonDetails = ({getPokemon}) => {
  const pokemon = use(getPokemon)

  return(
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 style={{marginTop: "10px"}}>{pokemon.name}</h2>
    </div>
  )
}

const PokemonFallback = () => {
  return <b>Loading...</b>
}

const PokemonError = () => {
  return(
    <div>
      <section>There was an error</section>
      <section>There was an error loading pokemon</section>
    </div>
  )
}

function App() {
  const pokemonPromise = getPokemon("ditto");

  return (
    <div className='app-wrapper'>
      <div className='app'>
        <div className='details'>
          <ErrorBoundary fallback={<PokemonError />}>
            <Suspense fallback={<PokemonFallback />}>
              <PokemonDetails getPokemon={pokemonPromise} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default App
