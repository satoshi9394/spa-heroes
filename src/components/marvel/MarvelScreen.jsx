import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {
  const publisher = 'Marvel Comics'
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr/>
      <HeroesList publisher={publisher}/>
    </div>
  )
}

export default MarvelScreen
