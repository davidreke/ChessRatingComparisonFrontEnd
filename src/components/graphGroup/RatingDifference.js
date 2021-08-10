import React, {useEffect, useState} from 'react'


export default function RatingDifference({label_one, label_two, standard_deviation, currentLinearRegression}) {

    const [currentNumber, SetCurrentNumber] = useState(1500)
    
    useEffect(()=>{console.log(standard_deviation)},[standard_deviation])

    const handleChange = (e) => {
        SetCurrentNumber(e.target.value)
    }

    return (
        <div className='fade-in difference center'>
            <p>A rating of <input id='find-my-rating' type='number' onChange={handleChange} defaultValue={currentNumber}/> in {label_one} would equal{' '} 
            
            <span>{Math.round((currentLinearRegression.m*currentNumber)+currentLinearRegression.b)}</span> in {label_two} with an average variation of plus/minus{' '+ Math.round(standard_deviation)+' '} points.</p>



        </div>
    )
}