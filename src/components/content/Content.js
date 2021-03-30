import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route, Redirect } from "react-router-dom";

import Topbar from "./Topbar";
import Dashboard from "../Home/Home";
import Manage from "../MangeClasses/Manage";
import Upcoming from "../Upcoming/Upcoming";
import Calender from "../Calender/Calender";
import Settings from '../Settings/Settings'
import Automatic from "../CreateNewPaper/Automatic";
import Manual from "../CreateNewPaper/Manual";
import Home from "../FileMangement/File";
import Coachings from "../Coachings/Coachings";
import File from "../FileMangement/File";
import Error from "../Error";
const id=1;

const Content = ({ sidebarIsOpen, toggleSidebar ,routes}) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch> 
        <Route exact path={`${routes}/home`} ><Dashboard/></Route>   
        <Route exact path={`${routes}/automatic`}><Automatic/></Route> 
        <Route exact path={`${routes}/manual`}><Manual/></Route>                             
        <Route exact path={`${routes}/file`}><File/></Route>               
        <Route exact path={`${routes}/manage`}><Manage/></Route>               
        <Route exact path={`${routes}/upcoming`}><Upcoming /></Route>   
        <Route exact path={`${routes}/calendar`}><Calender /></Route>  
        <Route exact path={`${routes}/settings`}><Settings /></Route>  
        {/* <Redirect from exact path="/" to="/dashboard/coachings" />
        <Route exact path="/dashboard/coachings" component={Coachings} ></Route>    
        <Route exact path="/dashboard/home"><Home/></Route>                        
        <Route exact path="/dashboard/manage"><Manage/></Route>               
        <Route exact path="/dashboard/upcoming"><Upcoming /></Route>   
        <Route exact path="/dashboard/calendar"><Calender /></Route>  
        <Route exact path="/dashboard/settings"><Settings /></Route>  
        <Route exact path="/dashboard/upcoming"><Upcoming /></Route>  
        <Route exact path="/dashboard/manual"><Manual /></Route>
        <Route exact path="/dashboard/automatic"><Automatic /></Route>   */}
  



    </Switch>
  </Container>
);

export default Content;
