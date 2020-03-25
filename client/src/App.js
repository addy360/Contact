import React, {} from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Register from './components/auth/register/Register'
import Login from './components/auth/login/Login'
import Home from './components/home/Home'
import Alerts from './components/alert/Alert'
import PrivateRoute from './components/privateRoute/PrivateRoute'

import ContactState from './context/contact/contactState' 
import AuthState from './context/auth/AuthState' 
import AlertState from './context/alert/AlertState' 

import './App.css';

import { setAuthToken } from './context/utils'

if (localStorage.token) setAuthToken(localStorage.token)

const App = ()=>{
  return (
    <ContactState>
      <AuthState>
        <AlertState>
          <Navbar icon="far fa-address-book" title="Contact Safe" />
          <div className="container">
            <Alerts/>
          	<Switch>
          		<PrivateRoute exact path = "/" component={Home} />
          		<Route path = "/about" component={About} />
              <Route path = "/register" component={Register} />
              <Route path = "/login" component={Login} />
          	</Switch>
          </div>
        </AlertState>
      </AuthState>
    </ContactState>
  );
}

export default App;
