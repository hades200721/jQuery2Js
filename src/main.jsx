import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Sample from './components/Sample';
import {About} from './components/About';
import Engine from './components/Engine/Engine';

const Main = () => (
      <Switch>
        <Route exact path='/' component={Sample}/>
        <Route exact path='/home' component={Sample}/>
        <Route path='/engine' component={Engine}/>
        <Route path='/sample' component={Sample}/>
        <Route path='/team' component={About}/>
        <Route path='/about' component={About}/>
        <Route component={NoMatch}/>
      </Switch>
  )
  
//   const Sample = () => (
//     <div>
//       <h3>HIO</h3>
//     </div>
//   )

  const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

export default Main;