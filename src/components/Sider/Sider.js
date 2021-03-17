import React from 'react'
import {  
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Calender from '../Calender/Calender';
import Create from '../CreateNewPaper/Create';
import Dashboard from '../Dashboard/Dashboard';
import File from '../FileMangement/File';
import Manage from '../MangeClasses/Manage';
import Upcoming from '../Upcoming/Upcoming';


export default function Sider() {
    return (
        <div>
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/file">File Mangement</Link></li>
                    <li><Link to="/calender">Calender</Link></li>
                    <li><Link to="/create">create New Paper</Link></li>
                    <li><Link to="/settings">Settings</Link></li>                   
                </ul>
                 <Switch>
                <Route path="/dashboard"><Dashboard /></Route>   
                <Route path="/create"><Create /></Route>               
                <Route path="/file"><File /></Route>               
                <Route path="/manage"><Manage /></Route>               
                <Route path="/upcoming"><Upcoming /></Route>   
                <Route path="/calender"><Calender /></Route>                          
                </Switch>
            </div>
            </Router>    
        </div>
    )
}
