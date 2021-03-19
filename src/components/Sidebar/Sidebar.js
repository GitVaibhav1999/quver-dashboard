import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPager,
  faCalendar,
  faFile,
  faSchool,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3> Quver</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Go Ahead</p>
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/create"}>
            <FontAwesomeIcon icon={faPager} className="mr-2" />
            Create New Paper
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/calender"}>
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            Calender
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/file"}>
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            File Management
          </NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink tag={Link} to={"/manage"}>
            <FontAwesomeIcon icon={faSchool} className="mr-2" />
           Manage classes
          </NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink tag={Link} to={"/settings"}>
            <FontAwesomeIcon icon={faTools} className="mr-2" />
           Settings
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);



export default SideBar;
