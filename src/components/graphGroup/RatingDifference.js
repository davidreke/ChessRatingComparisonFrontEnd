import React, {useEffect, useState} from 'react'


export default function RatingDifference({label_one, label_two, avg_difference, standard_deviation, currentLinearRegression}) {

    const [currentNumber, SetCurrentNumber] = useState(0)

    
    useEffect(()=>{console.log(avg_difference, standard_deviation)},[avg_difference, standard_deviation])

    const handleChange = (e) => {
        SetCurrentNumber(e.target.value)
    }

    return (
        <div className='fade-in difference center'>
            <p>A rating of <input id='find-my-rating' type='number' onChange={handleChange}/> in {label_one} would equal{' '} 
            
            <span>{Math.round((currentLinearRegression.m*currentNumber)+currentLinearRegression.b)}</span> in {label_two} with an average devation of{' '+ Math.round(standard_deviation)+' '} points.</p>


            {/* <p id='difference'>On average {label_one} is {Math.round(Math.abs(avg_difference))} points {higherOrLower} than {label_two}
            
             with a plus/minus of {Math.round(standard_deviation)} points.
             </p> */}
        </div>
    )
}