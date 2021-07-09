import React from 'react'
import {Form, Container, Row, Col} from 'react-bootstrap'


export default function RatingInput({input,name, setRecord , record}) {

    const updateRecord = (e) =>{
        var newRecord = {...record}
        newRecord[name][input]=e.target.value
        setRecord(newRecord)
    }
    return (
        <Container className='fade-in ratingInput'>
            <Row>
            
                <Col><Form.Label inline>What is your {input} rating?</Form.Label></Col>
                <Col><Form.Control type='number' min ={500} max ={3200} className='w-50 h-75' onChange={updateRecord} /></Col>
            </Row>
            <Form.Group>
            
        </Form.Group>
        </Container>
        
    )
}
