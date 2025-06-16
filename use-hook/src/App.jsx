import { useState, Suspense, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ErrorBoundary } from './ErrorBoundary'
// import { use } from './use'

const getPokemon = async (name) => {
  const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return reponse
}

const PokemonDetails = () => {
  const pokemon = use(() => getPokemon("ditto"))
  
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
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <div className='details'>
          <ErrorBoundary fallback={<PokemonError />}>
            <Suspense fallback={<PokemonFallback />}>
              <PokemonDetails />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default App
