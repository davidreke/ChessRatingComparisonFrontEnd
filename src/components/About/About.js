import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import aboutMe from '../../imgs/aboutMe.png'
import Updates from './Updates'

export default function About() {

    

    return (
        <div>
            <h2>Updates</h2>
                <Updates />
            <Container>
                <Row md>
                    <Col id='right-about-box' md>
                    <h2>About Me</h2>
                    <p>My name is David Reke. I am chess player and developer in the Cincinnati. This website is very new, so if you encounter any issues please let me know from one of the below accounts.</p>

                    <h3>Lets Connect!</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/david-reke-16129418/">Linked In</a></li>
                        <li><a href="https://www.chess.com/member/daviddoeschess">Chess.com</a></li>
                        <li><a href="https://lichess.org/@/DavidDoesChess">LiChess</a></li>
                    </ul>
                    </Col>
                    <Col md>
                        <img src={aboutMe} alt="" id='aboutMeImg' />
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}
