import React, { useState, useEffect } from 'react'
import Header from './components/Misc/Header' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChessForm from './components/formGroup/ChessForm'
import Graphs from './components/graphGroup/Graphs'
import About from './components/About/About'
import Footer from './components/Misc/Footer'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

export default function App() {

  const [players, setPlayers]=useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then(
        (res)=>{
                setPlayers(res.data)
                }
    )
}, [])
 
    return (
      <>
      <Router>
      <Switch>
      <Container className='main-container'>
        <Header />
        <hr/>
        <Row>
          <Col >
          <Route path="/Graphs">
            <Graphs players={players} />
          </Route>
          <Route exact path="/">
            <ChessForm  setPlayers={setPlayers} players={players} />
          </Route>
          <Route  path="/about">
            <About   />
          </Route>
          </Col >
          <Col md="auto" >
          
          </Col>
        </Row>
        
      </Container>
      </Switch>
      </Router>
      <Footer />
      </>
    )
}

