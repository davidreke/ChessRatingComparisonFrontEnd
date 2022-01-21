import React, {useEffect, useState} from 'react'


export default function RatingDifference({label_one, label_two, standard_deviation, currentLinearRegression}) {

    const [currentNumber, SetCurrentNumber] = useState(1500)
    
    useEffect(()=>{console.log(standard_deviation)},[standard_deviation])

    const handleChange = (e) => {
        SetCurrentNumber(e.target.valueAsNumber)
    }

    return (
        <div className='fade-in difference'>
            <hr />
            <p>
                <span className='break'>A rating of {' '}</span> 
                <span className='break bold-text'><input id='find-my-rating' type='number' onChange={handleChange} defaultValue={currentNumber}/>{' '}</span>
                <span className='break'>in {label_one} would equal{' '} </span> 
                
                <span className='break bold-text'>{Math.round((currentLinearRegression.m*currentNumber)+currentLinearRegression.b)}{' '}</span> 
                <span className='break'>in {label_two}, with an average variation of</span> 
                <span className='break bold-text'> plus/minus of{' '+ Math.round(standard_deviation)+' '} points.</span>
            </p>



        </div>
    )
}