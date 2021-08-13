import React from 'react'
import aboutMe from '../../imgs/aboutMe.png'
import heart from '../../imgs/heart.png'

export default function Footer() {
    return (
        <div id='footer'>
            <img src={aboutMe} alt="" id='aboutMeImg' />
            <div id='footer-text'>
                <p>Made with{' '}
                    <span>
                        <img src={heart}></img>
                    </span>
                    {' '}by David Reke</p>
                <p>
                    <span><a href='www.linkedin.com/in/david-reke-16129418'>LinkedIn</a></span>{' '}|{' '}
                    <span><a href='https://www.chess.com/member/daviddoeschess'>Chess.com </a></span>{' '}|{' '}
                    <span><a href='https://lichess.org/@/DavidDoesChess'>LiChess.org</a></span>{' '}|{' '}
                </p>
                <p>Please contact me from above sites if you see any issues</p>
            </div>
        </div>
    )
}
