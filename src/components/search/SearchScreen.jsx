import React from 'react'
import { heroes } from '../../data/heroes'
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';


const SearchScreen = () => {
  const heroesFiltered = heroes;



  const [ formvalues, handleInpuntChange] = useForm({
    searchText: ''
  });

  const { searchText } = formvalues

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText)
  }
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <hr/>
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInpuntChange }
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr/>
            {
              heroesFiltered.map( hero => (
                <HeroCard
                  key={ hero.id }
                  {...hero}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
