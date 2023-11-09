import Nav from "react-bootstrap/Nav";
import "../DashboardComponents/sidebarstyle.css";
import Hyphenview from "../Images/hyphenwhite.png";
import Hyphenview1 from "../Images/logoOnly.png";
import NavDropdown from "react-bootstrap/NavDropdown";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileCircleCheck,faHouse,faChartColumn,faFile,faCalendarPlus,faReceipt,faCalendarCheck,faUsers,faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

function HyphenSidebar() {
let [status,setStatus]=useState("hp");

  return (
    <>
    
      <div className= {status}>
      <div className="sidebar-inner">

        <Nav >
          <Nav.Link>
            
            {status === "hp" ? <img src={Hyphenview} onClick={()=>setStatus("hyphensidebar")} className="dashboardlogo" alt="logo img" /> : <img src={Hyphenview1} width="50" onClick={()=>setStatus("hp")}  className="dashboardlogo1" alt="logo img" /> }
            
          </Nav.Link>
          <Nav.Link href="#home" className="customnav">
          <FontAwesomeIcon icon={faHouse} className="dashboardicon"/> <span className="hide-menu" >Dashboard </span>
          </Nav.Link>
          <Nav.Link href="#features" className="customnav">
  
 
 
 <FontAwesomeIcon icon={faFileCircleCheck} className="dashboardicon"/><span className="hide-menu" >  Crystal Reports</span>
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faChartColumn} className="dashboardicon" /><span className="hide-menu" > Reports Management </span>
          
          </Nav.Link>
          
          
          <Nav.Link href="#features" className="customnav">
          <FontAwesomeIcon icon={faFile} className="dashboardicon"/> <span className="hide-menu" >Query Reports</span>
         
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faCalendarPlus} className="dashboardicon" /><span className="hide-menu" > Crystal Reports Scheduler</span>
          
          </Nav.Link>
          <Nav.Link href="#home" className="customnav">
          <FontAwesomeIcon icon={faReceipt} className="dashboardicon" /> <span className="hide-menu" > Audit Trail</span>
          </Nav.Link>
         
          <Nav.Link href="#features" className="customnav">
          <FontAwesomeIcon icon={faCalendarCheck} className="dashboardicon"/> <span className="hide-menu" >Reports Scheduler </span>
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faUsers} className="dashboardicon" /><span className="hide-menu" > User Management </span>
          </Nav.Link>
          <Nav.Link href="#home" className="customnav usernav">
          <div className="cusomspace">
          
          </div>
          <FontAwesomeIcon icon={faCircleUser} className="userprofile"/><span className="hide-menu" > Test User</span>
          </Nav.Link>
        </Nav>
      </div>
      </div>
    </>
  );
}

export default HyphenSidebar;
