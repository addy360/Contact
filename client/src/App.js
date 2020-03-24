import React, {} from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Register from './components/auth/register/Register'
import Login from './components/auth/login/Login'
import Home from './components/home/Home'
import ContactState from './context/contact/contactState' 
import AuthState from './context/auth/AuthState' 
import './App.css';

const App = ()=>{
  return (
    <ContactState>
      <AuthState>
        <Navbar icon="far fa-address-book" title="Contact Safe" />
        <div className="container">
        	<Switch>
        		<Route exact path = "/" component={Home} />
        		<Route path = "/about" component={About} />
            <Route path = "/register" component={Register} />
            <Route path = "/login" component={Login} />
        	</Switch>
        </div>
      </AuthState>
    </ContactState>
  );
}

export default App;
