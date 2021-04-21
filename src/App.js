import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import GameDetails from './pages/GameDetails';
import AddGame from './components/AddGame';
import { useDispatch, connect } from 'react-redux';
import {getGames} from './pages/home/HomeActions'
import Navigation from './components/Navigation'
 

const App = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    props.getGames()
    if(localStorage.getItem("selectedItem")!==undefined){
      fetch("http://localhost:4000/games/"+localStorage.getItem("selectedItem"))
        .then(res => res.json())
        .then(res => {
          dispatch ({ type: 'SELECT_GAME', payload: res})
        })
      

    }
  }, [])
  return (
    <div className="App App-background">
    <Navigation /> 
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/AddGame">
            <AddGame />
          </Route>
          <Route path="/GameDetails">
            <GameDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default connect(null, {getGames})(App)