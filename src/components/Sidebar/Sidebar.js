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
import { bubble as Menu } from 'react-burger-menu';
import './Sidebar.css'
import { Button } from 'reactstrap';

export default function Sidebar() {
    return (
        <div>
            <Router>
            <div>
                  <Menu>
                    <Button color="info" className="col-12" size="lg"  href="/" block>Home</Button>
                    <Button color="info" className="col-12" size="lg"  href="/dashboard" block>Dashboard</Button>
                    <Button color="info" className="col-12" size="lg"  href="file" block>File Mangement</Button>
                    <Button color="info" className="col-12" size="lg"  href="/calender" block>Calender</Button>
                    <Button color="info" className="col-12" size="lg"  href="/create" block>create New Paper</Button>
                    <Button color="info" className="col-12" size="lg"  href="/settings" block>Settings</Button>           
                  </Menu>
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


