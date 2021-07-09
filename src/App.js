import React, { Component } from 'react'
import './App.css'
import Header from './components/Header' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChessForm from './components/ChessForm'
import Graphs from './components/Graphs'
import {Container} from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Container>
        <Header />
        <Switch>
          <Route path="/Graphs">
            <Graphs />
          </Route>
          <Route exact path="/">
            <ChessForm />
          </Route>
        </Switch>
        </Container>
        
        </Router>
      </div>
    )
  }
}

