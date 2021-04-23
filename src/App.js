import React from 'react'
import { NavBar } from './components/'
import { Statistics, ToWatch, Trendings, TVShows, Error } from './pages/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <TVShows/>
        </Route>
        <Route path='/towatch'>
          <ToWatch/>
        </Route>
        <Route path='/trendings'>
          <Trendings/>
        </Route>
        <Route path='/statistics'>
          <Statistics/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
