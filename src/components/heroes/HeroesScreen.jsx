import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroesById';

const HeroesScreen = ({ history }) => {

  const { heroeId } = useParams();
  const hero = getHeroeById(heroeId)
  if ( !hero ) {
    return <Redirect to="/" />
  }
  const handleReturn = () => {
    if( history.length <= 2) {
      history.push('/');
    } else {
      history.goBack()
    } 
  }
  const {
    superhero,
    publisher,
    alter_ego,
    fisrt_appearence,
    characters
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${ heroeId }.jpg`}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Alter ego: </b>{ alter_ego } </li>
          <li className="list-group-item"> <b> Publisher: </b>{ publisher } </li>
          <li className="list-group-item"> <b> Fisrt appearence: </b>{ fisrt_appearence } </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button 
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroesScreen
