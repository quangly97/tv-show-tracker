import React from 'react'
import { NavBar } from './components/'
import { Statistics, ToWatch, Trendings, TVShows, ProgramInformation, EpisodeInformation, Information, Cast, Error } from './pages/'
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
        <Route path='/programinformation/:id' children={<ProgramInformation/>}></Route>
        <Route path='/information/:id' children={<Information/>}></Route>
        <Route path='/cast/:id' children={<Cast/>}></Route>
        <Route path='/:name/:id' children={<EpisodeInformation/>}></Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
