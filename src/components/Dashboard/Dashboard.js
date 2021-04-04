import React from 'react'
import Coachings from '../Coachings/Coachings'

export default function Dashboard(props) {
    console.log(props);
    return (
        <div>
        <div className="jumbotron">
        <h1 className="display-5">
           Welcome User!!
           <p className="lead">All is here</p>
        </h1>
        </div>
        <Coachings/>
        </div>
    )
}
