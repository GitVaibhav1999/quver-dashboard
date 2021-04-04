import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPager,
  faCalendar,
  faFile,
  faSchool,
  faTools,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink as RRNavLink } from 'react-router-dom';

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, useRouteMatch } from "react-router-dom";
import SubMenu from "./SubMenu";
import "./Sidebar.css";
// import { NavLink as RRNavLink } from 'react-router-dom';


const submenus = [
  [
    {
      title: "Set Questions Automatically",
      target: "automatic",
    },
    {
      title: "Set Questions Manually",
      target: "manual",
    },
   
  ],
 
];
const SideBar = ({ isOpen, toggle ,path,search}) => 
{
  return(
    (
      <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
          <h3> Quver</h3>
         
        </div>
        <div className="side-menu">
          <Nav even vertical className="list-unstyled pb-3">
            <p>Go Ahead</p>
            <NavItem>
              <NavLink tag={RRNavLink} active="active" to={`${path}/home${search}`}>
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Home
              </NavLink>
            </NavItem>
            <SubMenu path={path} search={search} title=" Create New Paper" icon={faHome} items={submenus[0]} />
            <NavItem>
              <NavLink tag={Link} to={`${path}/calendar${search}`}>
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={`${path}/file${search}`}>
                <FontAwesomeIcon icon={faFile} className="mr-2" />
                File Management
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink tag={Link} to={`${path}/manage${search}`}>
                <FontAwesomeIcon icon={faSchool} className="mr-2" />
               Manage classes
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink tag={Link} to={`${path}/settings${search}`}>
                <FontAwesomeIcon icon={faTools} className="mr-2" />
               Settings
              </NavLink>
            </NavItem>          
          </Nav>
        </div>
      </div>
    )
  )

}



export default SideBar;
