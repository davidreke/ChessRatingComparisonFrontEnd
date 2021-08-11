import React from 'react'
import {
    Link
  } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Logo from './Logo'

export default function Header() {
        //assigning location variable
        const location = useLocation();
        //destructuring pathname from location
        const { pathname } = location;
        //Javascript split method to get the name of the path in array
        const splitLocation = pathname.split("/");


        return (
        <Navbar  varian='light' expand="lg">
            <Container>
            <Navbar.Brand><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end me-auto container-fluid">   
                <Nav.Link  className='ml-auto' href="/" className={splitLocation[1] === "" ? "active" : ""}>
                    {/* <Link to="/">Form</Link> */}
                    Add Your Ratings
                </Nav.Link>
                <Nav.Link className='ml-auto' href="/Graphs" className='ml-auto'  className={splitLocation[1] === "Graphs" ? "active" : ""}>
                   Compare Ratings
                </Nav.Link> 
                <Nav.Link className='ml-auto' href="/About" className='ml-auto' className={splitLocation[1] === "About" ? "active" : ""}>
                    Updates
                </Nav.Link>                
            </Nav>
            </Navbar.Collapse>
            </Container>
 
        </Navbar>   
        )
}