import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import Error from "./components/Error";
import history from "./components/history";
import Home from "./components/Home/Home";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter history={history} >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/courses/:id" component={Main}></Route> 
        <Route component={Error}/>     
      </Switch>
    </BrowserRouter>
    
  
  );
};

export default App;
