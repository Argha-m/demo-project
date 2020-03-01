import React from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';
import {Header} from './common/header/header'
import {Home} from './pages/home/home';
import {About} from './pages/about/about'

function App() {
  return (
    <div className="body-content">
      <Header />
      <Home/>
      <About />
    </div>
  );
}

export default App;
