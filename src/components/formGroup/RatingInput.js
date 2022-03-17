import React from 'react'
import {Form} from 'react-bootstrap'


export default function RatingInput({input,name, setRecord , record}) {

    const updateRecord = (e) =>{
        var newRecord = {...record}
        newRecord[name][input]=e.target.value
        setRecord(newRecord)
    }
    return (


      
            <Form.Group>
                <Form.Label inline>What is your {input} rating?{' '}</Form.Label>
                <input type='number' min={500} max={3200} className='form-rating-input' onChange={updateRecord} value={record[name][input]}/>
        </Form.Group>
        
    )
}
