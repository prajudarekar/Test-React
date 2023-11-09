import React, { useState } from "react";
import "../TestComponent/MyCstyle.css";

import Hyphenview from "../Images/hyphenwhite.png";
import Hyphenview1 from "../Images/logoOnly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileCircleCheck,
  faHouse,
  faChartColumn,
  faFile,
  faCalendarPlus,
  faReceipt,
  faCalendarCheck,
  faUsers,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyareaChart from "./MyareaChart";


const MyCsidebar = () => {
  let [status, setStatus] = useState("hp");
  let [addcol1, setAddcol1] = useState(2);
  let [addcol2, setAddcol2] = useState(10);
  let [sectionr, setSectionr] = useState("rightsection");

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
  return (
    <div>
      <Row>
        <Col className={`col-md-${addcol1}`}>
          <div className={status}>
            <div className={`col-md-2  leftbar sidebar-inner ${status}`}>
              <ul className="nav flex-column  ">
                <li className="nav-item">
                  <a
                    className="nav-link navbtn"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    {status === "hp" ? (
                      <img
                        src={Hyphenview}
                        onClick={() => myreduce()}
                        className="dashboardlogo"
                        alt="logo img"
                      />
                    ) : (
                      <img
                        src={Hyphenview1}
                        width="60"
                        onClick={() => myresize()}
                        className="dashboardlogo1"
                        alt="logo img"
                      />
                    )}
                  </a>
                </li>
                <li className="nav-item dropdown customsidebar">
                  <a
                    className="nav-link navbtn"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <FontAwesomeIcon icon={faHouse} className="dashboardicon" />{" "}
                    <span className="hide-menu">Dashboard </span>
                  </a>
                </li>
                <li className="nav-item customsidebar">
                  <a
                    className="nav-link navbtn"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <FontAwesomeIcon
                      icon={faFileCircleCheck}
                      className="dashboardicon"
                    />
                    <span className="hide-menu"> Crystal Reports</span>
                  </a>
                </li>

                <li className="nav-item customsidebar">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon
                      icon={faChartColumn}
                      className="dashboardicon"
                    />
                    <span className="hide-menu"> Reports Management </span>
                  </a>
                </li>

                <li className="nav-item customsidebar">
                  <a
                    className="nav-link navbtn"
                    href="#"
                    data-toggle="modal"
                    data-target="#tableModal"
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      className="dashboardicon"
                    />
                    <span className="hide-menu">Query Reports</span>
                  </a>
                </li>

                <li className="nav-item customsidebar">
                  <a className="nav-link " href="#">
                    <FontAwesomeIcon
                      icon={faCalendarPlus}
                      className="dashboardicon"
                    />
                    <span className="hide-menu">
                      Crystal Reports Scheduler
                    </span>
                  </a>
                </li>
                <li className="nav-item customsidebar">
                  <a className="nav-link " href="#">
                    
                    <FontAwesomeIcon
                      icon={faReceipt}
                      className="dashboardicon"
                    />
                    <span className="hide-menu"> Audit Trail</span>
                  </a>
                </li>
                <li className="nav-item customsidebar">
                  <a className="nav-link " href="#">
                    
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className="dashboardicon"
                    />
                    <span className="hide-menu">Reports Scheduler </span>
                  </a>
                </li>
                <li className="nav-item customsidebar">
                  <a className="nav-link " href="#">
                    
                    <FontAwesomeIcon icon={faUsers} className="dashboardicon" />
                    <span className="hide-menu"> User Management </span>
                  </a>
                </li>
                <li className="nav-item customsidebar">
                  <a className="nav-link " href="#">
                    
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className="dashboardicon"
                    />
                    <span className="hide-menu">Create Chart </span>
                  </a>
                </li>
   

                <li className="nav-item customsidebar">
                  <div className="cusomspace"></div>
                  <a className="nav-link " href="#">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      className="userprofile"
                    />
                    <span className="hide-menu"> Test User</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className={`col-md-${addcol2} ${sectionr}`}>
          
          <Card className="chartcard">
          <MyareaChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MyCsidebar;
