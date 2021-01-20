import React, { useMemo } from 'react';
import queryString  from 'query-string'
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByname';


const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = ''} = queryString.parse(search)
  const [ formvalues, handleInpuntChange] = useForm({
    searchText: q
  });

  const { searchText } = formvalues

  const heroesFiltered = useMemo(() =>  getHeroesByName( q ), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`)
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
          {
            (q ==='') 
            && 
            <div className="alert alert-info">
              Search a hero
            </div>
          }
          {
            (q !=='' && heroesFiltered.length === 0) 
            && 
            <div className="alert alert-danger">
              There is no a hero with { q }
            </div>
          }
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
