import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from './Sidebar/Sidebar';
import Content from './content/Content';

export default function Main(props) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  console.log(props.match.path);
  return (    
    <Router>   
      <div className="App wrapper">
        <SideBar routes={props.match.path} toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content routes={props.match.path}  toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />       
      </div>     
    </Router>
  );
}
