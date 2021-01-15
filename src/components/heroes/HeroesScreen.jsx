import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroesById';

const HeroesScreen = () => {

  const { heroeId } = useParams();
  const hero = getHeroeById(heroeId)
  if ( !hero ) {
    return <Redirect to="/" />
  }
  const {
    superhero,
    publisher,
    alter_ego,
    fisrt_appearence,
    characters
  } = hero;

  return (
    <div>
      <h1>Heroe Screen</h1>
    </div>
  )
}

export default HeroesScreen
