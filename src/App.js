import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Coachings from "./components/Coachings/Coachings";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error";
import history from "./components/history";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter history={history} >
      <Switch>
        <Redirect exact from="/" to="/dashboard/coachings" ></Redirect>
        <Route exact path="/dashboard/coachings" component={Coachings}></Route> 
        <Route   path="/dashboard" component={Main}></Route> 
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>  
  );
};

export default App;
