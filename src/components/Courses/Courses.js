import React from 'react'
import { BrowserRouter, Link ,Route, Switch} from 'react-router-dom'
import { Button } from 'reactstrap'
import history from '../history'
import Main from '../Main'

function Topic () {
   
  }
export default function Courses() {

    return (
        <div>    
         <div className="container">
        <h1 className="display-6"> Select courses here</h1>
        <Link to="/courses/12"><Button>alfjl</Button></Link>
        </div>   
      
        </div>
    )
}
