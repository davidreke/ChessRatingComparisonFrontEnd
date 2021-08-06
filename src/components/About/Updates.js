import React from 'react'

export default function Updates() {

    const updates = [{title:"Lots Of Updates", date:'Aug 6, 2021', description:"Over the last few days I've made a lot of improvements to the website. I've  made the website more mobile friendly, I have fixed a few errors, added design tweaks and improvements, and have now given players the ability to enter a score and see what a linear regression would predict as well as seeing the average devaition between each pair of ratings. I did however discover a bug that when you hover over the regression line in the graphs section the tool-tip will not give you the correct pair of x and y values. I hope to fix that in the next few days."},{title:'Chess Ratings Comparison Now Live', date:'Aug 3, 2021', description:'Chess Ratings Comparison is now live. I am still working on this website so if you encounter any bugs or have any feedback, please contact me through one of the platforms listed on this page. Next steps will be fixing any bugs, improving the design and layout of this site and optimizing it fore mobile devices.'}]

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
