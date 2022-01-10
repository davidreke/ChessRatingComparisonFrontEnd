import React from 'react'

export default function Updates() {

    const updates = [{title:"You Can Now Download Our Data", date:"Jan 10, 2022", description:"For the last six months we've used a simple linear regression to compare different chess ratings. However, starting today, you can now download the site's data so that you can do your own analysis on chess ratings. As of today we now have data on over 6,000 players for you to analyze."},
    {title:"3800 Players",
        date:"Aug 20, 2021",
        description:"Over the previous weekend I shared this website on /r Chess. Thanks to the support from that community, and several other online communities, I now have over 3800 players who have submitted their ratings to the database. This goes a long way to helping us have plenty of data to show the relationship between different ratings from FIDE, USCF, Chess.com and Lichess"
    },{title:'Site Redesign', date:'Aug 13, 2021', description:"I've spent the last few days updating the design of this site. Hopefully it is much easier on the eyes for our users."},{title:'700 Players', date:'Aug 10, 2021', description:"I'm excited to say we've now had 700 players submit their ratings the database. Thank you to everyone who submitted their ratings!"},{title:'Many Improvements', date:'Aug 7, 2021', description:"Over the last several days I have made many improvements to the site. There have been many design improvements, especially for mobile devices. I have also added a tooltip to the graph that shows x and y values, but the tooltip currently has a bug where it shows the wrong-x value for where it is placed on the regression line. Lastly I have switched from showing an average difference for each rating to a calculate rating for the rating you choose and an average variance for each relationship."},{title:'Chess Ratings Comparison Now Live', date:'Aug 3, 2021', description:'Chess Ratings Comparison is now live. I am still working on this website so if you encounter any bugs or have any feedback, please contact me through one of the platforms listed on this page. Next steps will be fixing any bugs, improving the design and layout of this site and optimizing it for mobile devices.'}]

    const update_jsx = updates.map((update) => (<div className='update'>
            <h3 className='update-title'>{update.title}</h3>
            <p className='update-date'>{update.date}</p>
            <p className='update-body'>{update.description}</p>
            <hr />
        </div>))
    return (
        <>
            {update_jsx}
        </>
    )
}
