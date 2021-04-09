import React from "react";
import classNames from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
import Topbar from "./Topbar";
import Manage from "../MangeClasses/Manage";
import Upcoming from "../Upcoming/Upcoming";
import Calender from "../Calender/Calender";
import Settings from '../Settings/Settings'
import Automatic from "../CreateNewPaper/Automatic";
import Manual from "../CreateNewPaper/Manual";
import Home from "../Home/Home";
import File from "../FileMangement/File";
import { Container } from "react-bootstrap";
const id=1;

const Content = ({ sidebarIsOpen, toggleSidebar ,search,path}) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}>
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch> 
        <Route exact path={`${path}/home`}  ><Home search={search}/></Route>   
        <Route exact path={`${path}/automatic`}><Automatic/></Route> 
        <Route exact path={`${path}/manual`}><Manual/></Route>                             
        <Route exact path={`${path}/file`} component={File}></Route>               
        <Route exact path={`${path}/manage`}><Manage/></Route>               
        <Route exact path={`${path}/upcoming`}><Upcoming /></Route>   
        <Route exact path={`${path}/calendar`}><Calender /></Route>  
        <Route exact path={`${path}/settings`}><Settings /></Route>  
    </Switch>
  </Container>
);

export default Content;
