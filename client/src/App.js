import React, {} from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import ContactState from './context/contact/contactState' 
import './App.css';

const App = ()=>{
  return (
    <ContactState>
      <Navbar icon="far fa-address-book" title="Contact Safe" />
      <div className="container">
      	<Switch>
      		<Route exact path = "/" component={Home} />
      		<Route path = "/about" component={About} />
      	</Switch>
      </div>
    </ContactState>
  );
}

export default App;
