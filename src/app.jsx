import React from 'react';
import MenuBar from './components/menu/menu';
import Main from './main';
import 'normalize.css';
import 'styles/index.scss';

const App = () => (
  <div className='App'>
    <MenuBar />
     <Main />
  </div>
);

export default App;
