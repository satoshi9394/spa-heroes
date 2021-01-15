import React from 'react'
import { Switch, Redirect, Route } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import Navbar from '../components/ui/Navbar'


const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/dc" component={ DcScreen } />          
          <Route exact path="/heroe/:heroeId" component={ HeroesScreen } />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes
