import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
        <Navbar bg='light' varian='light' expand="lg">
            <Container>
            <Navbar.Brand>Chess Rating Comparisons</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>   
                    <Nav.Link >
                        <Link to="/">Form</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/Graphs">Graphs</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="/About">About</Link>
                    </Nav.Link>                
                </Nav>
            </Navbar.Collapse>
            </Container>
 
        </Navbar>   
        )
    }
}
