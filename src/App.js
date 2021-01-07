import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Chat from './components/Chat'
import SignIn from './components/auth/SignIn'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/login' component={SignIn}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App



