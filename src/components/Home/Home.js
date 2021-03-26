import React from 'react'
import { Button } from 'reactstrap'
import Courses from '../Courses/Courses'
import { BrowserRouter, Link ,Route, Switch} from 'react-router-dom'
import Main from '../Main'

export default function Home(props) {
    console.log(props);
    return (
        <div>
        <div className="jumbotron">
        <h1 className="display-5">
           Welcome User!!
           <p className="lead">All is here</p>
        </h1>
        </div>
        <Courses/>
       

        </div>
    )
}
