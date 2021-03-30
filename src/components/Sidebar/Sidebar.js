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
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, useRouteMatch } from "react-router-dom";
import SubMenu from "./SubMenu";

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

const navitems=()=>{
  return(
    <div>
  lfajdljf
    </div>
  )
}

const SideBar = ({ isOpen, toggle ,routes}) => 
{
  return(
    (
      <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
          <span color="info" onClick={toggle} style={{ color: "#fff" }}>
           
          </span>
          <h3> Quver</h3>
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <p>Go Ahead</p>
            <NavItem>
              <NavLink tag={Link} to={`${routes}/home`}>
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Home
              </NavLink>
            </NavItem>
            <SubMenu title=" Create New Paper" icon={faHome} items={submenus[0]} />
            <NavItem>
              <NavLink tag={Link} to={`${routes}/calender`}>
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                Calender
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={`${routes}/file`}>
                <FontAwesomeIcon icon={faFile} className="mr-2" />
                File Management
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink tag={Link} to={`${routes}/manage`}>
                <FontAwesomeIcon icon={faSchool} className="mr-2" />
               Manage classes
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink tag={Link} to={`${routes}/settings`}>
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
