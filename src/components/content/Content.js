import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import Dashboard from "../Dashboard/Dashboard";
import Create from "../CreateNewPaper/Create";
import File from "../FileMangement/File";
import Manage from "../MangeClasses/Manage";
import Upcoming from "../Upcoming/Upcoming";
import Calender from "../Calender/Calender";
import Settings from '../Settings/Settings'




const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
        <Route exact path="/" ><Dashboard/></Route>  
        <Route exact path="/dashboard" ><Dashboard/></Route>   
        <Route exact path="/create"><Create/></Route>               
        <Route exact path="/file"><File/></Route>               
        <Route exact path="/manage"><Manage/></Route>               
        <Route exact path="/upcoming"><Upcoming /></Route>   
        <Route exact path="/calender"><Calender /></Route>  
        <Route exact path="/settings"><Settings /></Route>  
    </Switch>
  </Container>
);

export default Content;
