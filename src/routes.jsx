import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import MenuBar from './components/menu/menu';
import 'styles/index.scss';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/sample">Sample</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/sample" component={Sample} />
    </div>
  </Router>
);

export default Routes;
