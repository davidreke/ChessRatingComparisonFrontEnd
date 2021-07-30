import React from 'react'

export default function RatingDifference({label_one, label_two, avg_difference}) {

    const higherOrLower = avg_difference > 0 ? <span className="higher"> higher </span> :<span className="lower"> lower </span>

    return (
        <div className='fade-in difference'>
            <p>On average {label_one} is {Math.round(Math.abs(avg_difference))} points {higherOrLower} than {label_two}</p>
        </div>
    )
}
