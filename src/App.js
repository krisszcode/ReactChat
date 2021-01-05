import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PageBar from './components/PageBar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <PageBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/register" component={Chat}/>
            <Route path="/login" component={Chat}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App



