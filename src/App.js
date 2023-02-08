import React, { useState, useEffect } from 'react'
import Header from './components/Misc/Header' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChessForm from './components/formGroup/ChessForm'
import Graphs from './components/graphGroup/Graphs'
import Download from './components/download/Download'
import About from './components/About/About'
import Footer from './components/Misc/Footer'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

export default function App() {

  const [players, setPlayers]=useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then(
        (res)=>{
                
                for (let keyA in res.data ){
                  for(let keyB in res.data[keyA]){
                    for(let keyC in res.data[keyA][keyB]){
                      if(501 >res.data[keyA][keyB][keyC] || 3199 <res.data[keyA][keyB][keyC] ){
                        res.data[keyA][keyB][keyC] = null
                      }
                    }
                  }
                }
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
          <Route  path="/download">
            <Download  players={players} />
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

