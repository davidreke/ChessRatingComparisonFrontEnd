import React, {useState, useEffect} from 'react'
import {Dropdown } from 'react-bootstrap'

export default function RatingSelection({filterPlayers}) {
    const [firstOpen] = useState(false)
    const [secondOpen] = useState(false)
    const [firstOption, setFirstOption]=useState('select a rating')
    const [secondOption, setSecondOption]=useState('select a rating')

    const submitOption = (location) => (e) =>{
        if(location === 1){
            console.log(e.target.innertext)
            setFirstOption(e.target.innerText)
            console.log(`first option set to ${e.target.innerText}`)
        } else if(location === 2){
            setSecondOption(e.target.innerText)
            console.log(`second option set to ${e.target.innerText}`)
        }
    }

    useEffect(()=>{
        if(firstOption !== 'select a rating' && secondOption !== 'select a rating'){
            filterPlayers(firstOption, secondOption)
        }
    },[firstOption,secondOption, filterPlayers])


    return (
        <div className='select center'>
            <h2 className='select' >Compare ratings for 
                <span>
                    <Dropdown
                    className='selector inline-drop'
                    isOpen={firstOpen}
                    toggle={firstOpen}
                    >
                         <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                            {firstOption}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            Chess.com: Bullet
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            Chess.com: Blitz
                        </Dropdown.Item >
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            Chess.com: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(1)(e)}}>
                            Chess.com: Daily
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            Chess.com: Puzzle
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Bullet
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Blitz
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Classical
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Correspondence
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            LiChess.org: Puzzle
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            FIDE: Standard
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            FIDE: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            FIDE: Blitz
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            USCF: Regular
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            USCF: Quick
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(1)(e)}}>
                            USCF: Blitz
                        </Dropdown.Item>
                        

                        </Dropdown.Menu>

                    </Dropdown>
                </span> 
                and 
                <span >
                    <Dropdown
                    className='inline-drop selector'
                    isOpen={secondOpen}
                    toggle={secondOpen}
                    size="lg"
                    >
                         <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                            {secondOption}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={(e)=>{submitOption(2)(e)}}>
                            Chess.com: Bullet
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            Chess.com: Blitz
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            Chess.com: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            Chess.com: Daily
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            Chess.com: Puzzle
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Bullet
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Blitz
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Classical
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Correspondence
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            LiChess.org: Puzzle
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            FIDE: Standard
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            FIDE: Rapid
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={(e)=>{submitOption(2)(e)}}>
                            FIDE: Blitz
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(2)(e)}}> 
                            USCF: Regular
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(2)(e)}}>
                            USCF: Quick
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{submitOption(2)(e)}}>
                            USCF: Blitz
                        </Dropdown.Item>
                        

                        </Dropdown.Menu>

                    </Dropdown>
                </span> 
                
                </h2>
                    
        </div>
    )
}
