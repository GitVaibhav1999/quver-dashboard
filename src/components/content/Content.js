import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import Dashboard from "../Dashboard/Dashboard";
import File from "../FileMangement/File";
import Manage from "../MangeClasses/Manage";
import Upcoming from "../Upcoming/Upcoming";
import Calender from "../Calender/Calender";
import Settings from '../Settings/Settings'
import Automatic from "../CreateNewPaper/Automatic";
import Manual from "../CreateNewPaper/Manual";
const Content = ({ sidebarIsOpen, toggleSidebar ,routes}) => (
  
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch> 
        <Route exact path={`${routes}/dashboard`} ><Dashboard/></Route>   
        <Route exact path={`${routes}/automatic`}><Automatic/></Route> 
        <Route exact path={`${routes}/manual`}><Manual/></Route>                             
        <Route exact path={`${routes}/file`}><File/></Route>               
        <Route exact path={`${routes}/manage`}><Manage/></Route>               
        <Route exact path={`${routes}/upcoming`}><Upcoming /></Route>   
        <Route exact path={`${routes}/calendar`}><Calender /></Route>  
        <Route exact path={`${routes}/settings`}><Settings /></Route>  
    </Switch>
  </Container>
);

export default Content;
