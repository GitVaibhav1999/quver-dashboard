import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from './Sidebar/Sidebar';
import Content from './content/Content';

export default function Main(props) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  console.log(props.location.search);
  console.log(props.match.path);
  return (    
    <Router>   
      <div className="App wrapper">
        <SideBar path={props.match.path} search={props.location.search} toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content path={props.match.path} search={props.location.search}  toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />       
      </div>     
    </Router>
  );
}
