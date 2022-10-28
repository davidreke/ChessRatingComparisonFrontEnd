import React, {useState,useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import MembershipForm from './MembershipForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ChessForm({players, setPlayers}) {
    const [FIDE, setFide] = useState(false)
    const [USCF, setUSCF] = useState(false)
    const [Chesscom, setChesscom] = useState(false)
    const [LiChess, setLiChess] = useState(false)
    const [record, setRecord]= useState(
        {FIDE:{standard: null, rapid: null, blitz:null},
        USCF:{regular: null, quick: null, blitz: null},
        ChessCom:{bullet:null, blitz:null, rapid:null, daily:null, puzzle:null},
        LiChess:{bullet:null, blitz:null, rapid:null, classical:null, correspondence:null, puzzle:null}})

    
    const [submitted, setSubmitted]= useState(false)

    const submitRecord = (e) => {
        e.preventDefault();
        let newPlayers =[...players, record]
        setPlayers(newPlayers)
        axios.post(process.env.REACT_APP_API_URL, record).then((res)=>{
        }
        )
        setSubmitted(true)

    }

    useEffect(()=>{
        let count = 0
        let submitButton = document.getElementById("submitButton")
        let mustBe2 = document.getElementById("mustBe2")
        for(var org in record){
            console.log(record[org])
            for(var type in record[org]){
                console.log(record[org][type])
                if(record[org][type] !== null){
                    count++
                }
            }
        }

        if(count > 1){
            submitButton.disabled = false
            mustBe2.style['display']='none'
        } else if(count <= 1){
            submitButton.disabled = true
        }

    },[record])

   
    
        
    return (
       <div id='chessForm'> 
       <h1>We use submitted data from {players.length?Number(players.length).toLocaleString():null} chess players to compare ratings across chess sites and organizations.</h1>
        {(submitted === true) ? (<h2>Thank you for your submission. Go to the <Link to='/graphs'>Graphs section</Link> to see a comparison of each rating.</h2>): (<Form onSubmit={submitRecord}>
        <h2 id='chessFormH2'>Add your ratings to our data and <Link to='/graphs'>start comparing</Link>.</h2>
        <Form.Group>
            <Form.Label className='mx-2 question'>Do you have a FIDE membership?</Form.Label>
            <Form.Check inline label='Yes' value={true} type='radio' className = 'mx-2' name='FIDE'  onClick = {()=>{setFide(true)}}/>
            <Form.Check inline label='No' value ={false} name='FIDE'  type='radio' className = 'mx-2' defaultChecked  onClick={()=>{setFide(false)}}  />
        </Form.Group>

        {FIDE && <MembershipForm inputs={['standard', 'rapid', 'blitz']} name='FIDE'  record={record} setRecord={setRecord} />}
        <hr/>

        <Form.Group>
            <Form.Label className = 'mx-2 question'>Do you have a USCF membership?</Form.Label>
            <Form.Check inline label='Yes' name='USCF' type='radio' className = 'mx-2'  onClick={()=>{setUSCF(true)}} />
            <Form.Check inline label='No' name='USCF'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setUSCF(false)}} />
        </Form.Group>

        {USCF && <MembershipForm inputs={['regular', 'quick', 'blitz']} name='USCF' record={record} setRecord={setRecord} />}
        <hr/>

        <Form.Group>
            <Form.Label className = 'mx-2 question'>Do you have a Chess.com account?</Form.Label>
            <Form.Check inline label='Yes' name='Chesscom' type='radio' className = 'mx-2' onClick={()=>{setChesscom(true)}}/>
            <Form.Check inline label='No' name='Chesscom'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setChesscom(false)}}/>
        </Form.Group>

        {Chesscom && <MembershipForm inputs={['bullet', 'blitz', 'rapid', 'daily', 'puzzle']} name='ChessCom' record={record} setRecord={setRecord} allowImport={true}/>}
        <hr/>

        <Form.Group>
            <Form.Label className = 'mx-2 question'>Do you have a LiChess account?</Form.Label>
            <Form.Check inline label='Yes' name='LiChess' type='radio' className = 'mx-2' onClick={()=>{setLiChess(true)}} />
            <Form.Check inline label='No' name='LiChess'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setLiChess(false)}} />
        </Form.Group>

        {LiChess && <MembershipForm inputs={['bullet', 'blitz', 'rapid', 'classical', 'correspondence' , 'puzzle']} name='LiChess' record={record} setRecord={setRecord} />}
        <hr/>

        <Button variant='dark' type='submit' id='submitButton' disabled='true'>Submit</Button>
    </Form>)}
    <p id='mustBe2'>you must fill in at least two ratings to submit a record</p>
    </div > 
    )
}

