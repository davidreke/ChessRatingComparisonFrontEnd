import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import MembershipForm from './formGroup/MembershipForm'
import axios from 'axios'
// import {API_URL,API_SECRET} from '../config'

export default function ChessForm({players, setPlayers}) {
    const [FIDE, setFide] = useState(false)
    const [USCF, setUSCF] = useState(false)
    const [Chesscom, setChesscom] = useState(false)
    const [LiChess, setLiChess] = useState(false)
    const [record, setRecord]= useState(
        {FIDE:{standard: null, rapid: null, blitz:null},
        USCF:{regular: null, quick: null, blitz: null},
        ChessCom:{bullet:null, blitz:null, rapid:null, daily:null, puzzle:null},
        LiChess:{bullet:null, blitz:null, rapid:null, classical:null, correspondence:null, training:null}})

    
    const [submitted, setSubmitted]= useState(false)

    const submitRecord = (e) => {
        e.preventDefault();
        // console.log(record)
        let newPlayers =[...players, record]
        setPlayers(newPlayers)
        axios.post(process.env.REACT_APP_API_URL, record).then((res)=>{
            console.log('check the database')
        }
        )
        console.log(newPlayers)
        console.log(process.env)
        setSubmitted(true)

    }

   
    
        
    return (
       <> 
        {(submitted === true) ? (<h2>Thank you for your submission</h2>): (<Form onSubmit={submitRecord}>
        <p>Please fill out the below form</p>
        <Form.Group>
            <Form.Label className='mx-2'>Do you have a FIDE membership?</Form.Label>
            <Form.Check inline label='Yes' value={true} name='FIDE' type='radio' className = 'mx-2' name='FIDE'  onClick = {()=>{setFide(true)}}/>
            <Form.Check inline label='No' value ={false} name='FIDE'  type='radio' className = 'mx-2' defaultChecked  onClick={()=>{setFide(false)}}  />
        </Form.Group>

        {FIDE && <MembershipForm inputs={['standard', 'rapid', 'blitz']} name='FIDE'  record={record} setRecord={setRecord} />}

        <Form.Group>
            <Form.Label className = 'mx-2'>Do you have a USCF membership?</Form.Label>
            <Form.Check inline label='Yes' name='USCF' type='radio' className = 'mx-2'  onClick={()=>{setUSCF(true)}} />
            <Form.Check inline label='No' name='USCF'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setUSCF(false)}} />
        </Form.Group>

        {USCF && <MembershipForm inputs={['regular', 'quick', 'blitz']} name='USCF' record={record} setRecord={setRecord} />}

        <Form.Group>
            <Form.Label className = 'mx-2'>Do you have a Chess.com account?</Form.Label>
            <Form.Check inline label='Yes' name='Chesscom' type='radio' className = 'mx-2' onClick={()=>{setChesscom(true)}}/>
            <Form.Check inline label='No' name='Chesscom'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setChesscom(false)}}/>
        </Form.Group>

        {Chesscom && <MembershipForm inputs={['bullet', 'blitz', 'rapid', 'daily', 'puzzle']} name='ChessCom'  record={record} setRecord={setRecord}/>}

        <Form.Group>
            <Form.Label className = 'mx-2'>Do you have a LiChess account?</Form.Label>
            <Form.Check inline label='Yes' name='LiChess' type='radio' className = 'mx-2' onClick={()=>{setLiChess(true)}} />
            <Form.Check inline label='No' name='LiChess'  type='radio' className = 'mx-2' defaultChecked onClick={()=>{setLiChess(false)}} />
        </Form.Group>

        {LiChess && <MembershipForm inputs={['bullet', 'blitz', 'rapid', 'classical', 'correspondence' , 'training']} name='LiChess' record={record} setRecord={setRecord} />}

        <Button type='submit'>Submit</Button>
    </Form>)}
    </> 
    )
}

