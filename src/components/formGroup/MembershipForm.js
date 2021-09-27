import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import RatingInput from './RatingInput'
import ImportButtonGroup from './ImportButtonGroup'

export default function MembershipForm({inputs, name, record, setRecord, allowImport}) {

    const [display, setDisplay] = useState({})

    useEffect(()=>{
      if(Object.keys(display).length === 0){
        inputs.forEach(input => {
            var newDisplay = {...display}
            newDisplay[name+input]=false
            setDisplay(newDisplay)})
      }
     
    },[display, inputs, name])

    const editDisplay = (input, visible) => {
        var newDisplay ={...display}
          newDisplay[name+input]=visible
          setDisplay(newDisplay)
    }

    const questions=inputs.map(input => {
        return (
            <div className='question' key={name+input}>
                <Form.Group>
                    <Form.Label className='mx-2'>Do you have a {name} {input} rating?</Form.Label>
                    <Form.Check inline label='Yes' value={true} name={name+input} type='radio' className = 'mx-2' onClick ={() =>{editDisplay(input, true)}} />
                    <Form.Check inline label='No' value ={false} name={name+input}  type='radio' className = 'mx-2' defaultChecked onClick = {() =>{editDisplay(input, false)}}  />
                </Form.Group>
                {display[name+input] && <RatingInput input={input} name={name} record={record} setRecord={setRecord}/>}
                
            </div >
        )
    })

    return (
      <div className='ml-3 fade-in'>
        {allowImport && (
          <ImportButtonGroup/>
        )}
        {questions}
      </div>
    );
}
