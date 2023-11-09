//import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileCircleCheck,
  faChartColumn,
  faFile,
  faCalendarCheck,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import "../DashboardComponents/DashboardStyle.css";

import Hyphenview from "../Images/hyphenwhite.png";
import Hyphenview1 from "../Images/logoOnly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import SampleLayout from "../LayoutComponents/SampleLayout";
//import HyphenClientOnboarding1 from "../HyphenUserComponent/HyphenClientOnboarding1.js";
import HyphenClientOnboarding2 from "../HyphenUserComponent/HyphenClientOnboarding2.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
function Sidebar1() {
  let [status, setStatus] = useState("hp");
  let [addcol1, setAddcol1] = useState(2);
  let [addcol2, setAddcol2] = useState(10);
  let [sectionr, setSectionr] = useState("rightsection");

  const clientNavigate = useNavigate();

  function myreduce() {
    setStatus("hyphensidebar");
    setAddcol1(1);
    setAddcol2(11);
    setSectionr("rightsection1");
  }
  function myresize() {
    setStatus("hp");
    setAddcol1(2);
    setAddcol2(10);
    setSectionr("rightsection");
  }

  function userclient() {
    clientNavigate("/HyphenClientOnboarding");
  }
  return (
    <div>
      <Row>
        <Col className={`col-md-${addcol1}`}>
          <div className={status}>
            <div className={`col-md-2  leftbar sidebar-inner ${status}`}>
            <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link
          className="navbtn"
          href="#"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {status === "hp" ? (
            <img
              src={Hyphenview}
              onClick={myreduce}
              className="dashboardlogo"
              alt="logo img"
            />
          ) : (
            <img
              src={Hyphenview1}
              width="60"
              onClick={myreduce}
              className="dashboardlogo1"
              alt="logo img"
            />
          )}
        </Nav.Link>
      </Nav.Item>

      <NavDropdown
        title={
          <div className="navbtn">
            <FontAwesomeIcon icon={faHouse} className="dashboardicon" />
            <span className="hide-menu"> Design</span>
          </div>
        }
        id="design-dropdown"
      >
        <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
        <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item>
        <Nav.Link
          className="navbtn"
          href="#"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <FontAwesomeIcon
            icon={faFileCircleCheck}
            className="dashboardicon"
          />
          <span className="hide-menu"> Assign</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="navbtn" href="#">
          <FontAwesomeIcon icon={faChartColumn} className="dashboardicon" />
          <span className="hide-menu"> List</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          className="navbtn"
          href="#"
          data-toggle="modal"
          data-target="#tableModal"
        >
          <FontAwesomeIcon icon={faFile} className="dashboardicon" />
          <span className="hide-menu">Administration</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="navbtn" href="#">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="dashboardicon"
          />
          <span className="hide-menu">Create Chart</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <div className="cusomspace"></div>
        <Nav.Link className="navbtn" href="#">
          <FontAwesomeIcon icon={faCircleUser} className="userprofile" />
          <span className="hide-menu"> Test User</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
            </div>
          </div>
        </Col>
        <Col className={`col-md-${addcol2} ${sectionr}`}>
          <HyphenClientOnboarding2 />
          {/* <HyphenClientOnboarding1/>

          <HyphenClientOnboarding/> */}

          {/* <SampleLayout/>*/}
          {/* <MyareaChart/>*/}
        </Col>
      </Row>
    </div>

    
  );
}

export default Sidebar1;