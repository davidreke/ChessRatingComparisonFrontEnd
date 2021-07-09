import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

import {Navbar, Nav} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
        <Navbar bg='light' varian='light'>
            <Navbar.Brand>Chess Rating Comparisons</Navbar.Brand>
                <Nav>   
                    <Nav.Link >
                        <Link to="/">Form</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/Graphs">Graphs</Link>
                    </Nav.Link>              
            </Nav>
        </Navbar>   
        )
    }
}
