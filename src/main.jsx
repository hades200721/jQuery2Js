import { Switch, Route, withRouter } from 'react-router-dom';
import React from 'react';

import Sample from './components/Sample';
import {About} from './components/About';
import Engine from './components/Engine/Engine';
import jQuery from './components/jQuery/jQuery';
import Oppps from './components/Oppps';

const Main = () => (
      <Switch>
        <Route exact path='/' component={Sample}/>
        <Route exact path='/home' component={Sample}/>
        <Route exact path='/learn' component={jQuery}/>
        <Route path='/engine' component={Engine}/>
        <Route path='/sample' component={Sample}/>
        <Route path='/team' component={About}/>
        <Route path='/about' component={Oppps}/>
        <Route component={NoMatch}/>
      </Switch>
  )
  
  const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

  // wrap route with component withRouter for activeClassName to work
export default withRouter(Main);