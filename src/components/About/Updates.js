import React from 'react'

export default function Updates() {

    const updates = [{title:'Chess Ratings Comparison Now Live', date:'Aug 3, 2021', description:'Chess Ratings Comparison is now live. I am still working on this website so if you encounter any bugs or have any feedback, please contact me through one of the platforms listed on this page. Next steps will be fixing any bugs, improving the design and layout of this site and optimizing it fore mobile devices.'}]

    const update_jsx = updates.map((update) => (<div className='update'>
            <h3>{update.title}</h3>
            <p>{update.date}</p>
            <p >{update.description}</p>
            <hr />
        </div>))
    return (
        <>
            {update_jsx}
        </>
    )
}
