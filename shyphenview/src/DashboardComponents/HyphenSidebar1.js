import Nav from "react-bootstrap/Nav";
import "../DashboardComponents/sidebarstyle.css";
import Hyphenview from "../Images/hyphenwhite.png";
import NavDropdown from "react-bootstrap/NavDropdown";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCircleInfo, faFileCircleCheck,faHouse,faChartColumn,faFile,faCalendarPlus,faReceipt,faCalendarCheck,faUsers,faCircleUser } from '@fortawesome/free-solid-svg-icons';

function HyphenSidebar() {
  return (
    <>
      <div className="sidebar-inner">
        <Nav className="flex-column">
          <Nav.Link>
            <img src={Hyphenview} className="dashboardlogo" alt="logo img" />
          </Nav.Link>
          <Nav.Link href="#home" className="customnav">
          <FontAwesomeIcon icon={faHouse} className="dashboardicon"/> Dashboard
          </Nav.Link>
          <Nav.Link href="#features" className="customnav">
  
 
 
 <FontAwesomeIcon icon={faFileCircleCheck} className="dashboardicon"/>  Crystal Reports
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faChartColumn} className="dashboardicon" /> Reports Management 
          
          </Nav.Link>
          
          <NavDropdown
            title={
              <span>
              <FontAwesomeIcon icon={faCircleInfo} className="dashboardicon"/>Applications</span>}
            id="basic-nav-dropdown"
            className="customnav"
            
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link href="#features" className="customnav">
          <FontAwesomeIcon icon={faFile} className="dashboardicon"/> Query Reports
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faCalendarPlus} className="dashboardicon" /> Crystal Reports Scheduler
          </Nav.Link>
          <Nav.Link href="#home" className="customnav">
          <FontAwesomeIcon icon={faReceipt} className="dashboardicon" />  Audit Trail
          </Nav.Link>
         
          <Nav.Link href="#features" className="customnav">
          <FontAwesomeIcon icon={faCalendarCheck} className="dashboardicon"/>  Reports Scheduler
          </Nav.Link>
          <Nav.Link href="#pricing" className="customnav">
          <FontAwesomeIcon icon={faUsers} className="dashboardicon" /> User Management
          </Nav.Link>
          <Nav.Link href="#home" className="customnav usernav">
          <FontAwesomeIcon icon={faCircleUser} /> Test User
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default HyphenSidebar;
