import React from 'react'
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {
  const publisher = 'DC Comics'
  return (
    <div>
      <h1>Dc Screen</h1>
      <hr/>
      <HeroesList publisher={publisher}/>
    </div>
  )
}

export default DcScreen
