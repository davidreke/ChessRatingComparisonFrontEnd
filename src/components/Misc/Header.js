import React from 'react'
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
                <Nav.Link  href="/" className={`${splitLocation[1] === "" ? "active" : ""} ml-auto`}>
                    Add Your Ratings
                </Nav.Link>
                <Nav.Link href="/Graphs"  className={`${splitLocation[1] === "Graphs" ? "active" : ""} ml-auto`}>
                   Compare Ratings
                </Nav.Link> 
                <Nav.Link href="/Download"  className={`${splitLocation[1] === "Download" ? "active" : ""} ml-auto`}>
                   Download Data
                </Nav.Link> 
                <Nav.Link  href="/About"  className={`${splitLocation[1] === "About" ? "active" : ""} ml-auto`}>
                    Updates
                </Nav.Link>                
            </Nav>
            </Navbar.Collapse>
            </Container>
 
        </Navbar>   
        )
}