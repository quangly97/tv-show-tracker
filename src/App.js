import React from 'react';
import { NavBar } from './components/'
import { Statistics, ToWatch, Trendings, TVShows, EpisodeGuide, EpisodeDetails, ProgramDetails, Cast, Error, Search } from './pages/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <TVShows/>
        </Route>
        <Route path='/search'>
          <Search/>
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
        <Route path='/:id/:name/episodes/' children={<EpisodeGuide/>}></Route>
        <Route path='/:id/:name/information/' children={<ProgramDetails/>}></Route>
        <Route path='/:id/:name/cast/' children={<Cast/>}></Route>
        <Route path='/:id/:name/:episodeID/' children={<EpisodeDetails/>}></Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
