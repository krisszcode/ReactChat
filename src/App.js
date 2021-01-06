import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Chat from './components/Chat'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
            <Route path='/' component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App



