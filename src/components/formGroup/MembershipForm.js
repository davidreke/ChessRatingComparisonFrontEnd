import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'
import RatingInput from './RatingInput'
import ImportButtonGroup from './ImportButtonGroup'
import { toast } from 'react-toastify'

export default function MembershipForm({inputs, name, record, setRecord, allowImport}) {

    const [display, setDisplay] = useState({})

    const importedPlayerStats = (stats) => {
      const newRecord = { ...record };
      newRecord[name] = {
        bullet: stats.chess_bullet?.last?.rating,
        blitz: stats.chess_blitz?.last?.rating,
        rapid: stats.chess_rapid?.last?.rating,
        daily: stats.chess_daily?.last?.rating,
        puzzle: stats.tactics?.highest?.rating,
      };

      if (!validateRatingsOverMinimum(newRecord[name])) {
        toast.warning("All ratings are below 500");
      }
      setRecord(newRecord);
      setDisplayFromRating(newRecord)
    };

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

    const validateRatingsOverMinimum = (inputRecord) => {
      return Object.keys(inputRecord).filter((key) => inputRecord[key] >= 500).length > 0
    }

    const setDisplayFromRating = (inputRecord) => {
      const newDisplay = {};
      inputs.forEach((input) => {
        newDisplay[name + input] = inputRecord[name][input] ? true : false;
      });
      setDisplay(newDisplay);
    }

    const questions=inputs.map(input => {
        return (
            <div className='question' key={name+input}>
                <Form.Group>
                    <Form.Label className='mx-2'>Do you have a {name} {input} rating?</Form.Label>
                    <Form.Check inline label='Yes' checked={display[name+input]} name={name+input} type='radio' className='mx-2' onClick={() =>{editDisplay(input, true)}} />
                    <Form.Check inline label='No' checked={!display[name+input]} name={name+input}  type='radio' className='mx-2' onClick={() =>{editDisplay(input, false)}}  />
                </Form.Group>
                {display[name+input] && <RatingInput input={input} name={name} record={record} setRecord={setRecord}/>}
                
            </div >
        )
    })

    return (
      <div className='ml-3 fade-in'>
        {allowImport && (
          <ImportButtonGroup importedPlayerStats={importedPlayerStats} />
        )}
        {questions}
      </div>
    );
}
