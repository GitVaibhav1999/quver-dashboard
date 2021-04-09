import React   from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Coachings from "./components/Coachings/Coachings";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error";
import history from "./components/history";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home/Home";
import Navbar from "./Navbar";
import './App.css'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter history={history} >
      <Switch>
        <Redirect  exact from="/" to="/dashboard/coachings" ></Redirect>
        <Route exact path="/dashboard/coachings" component={Navbar}></Route> 
        {/* <Route   path="/dashboard" component={Main}></Route>  */}
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>  
    <CssBaseline/>
    </div>
  );
};

export default App;
