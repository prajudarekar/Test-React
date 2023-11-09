import React, { useState } from "react";
import "./Testdah.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileCircleCheck,faHouse,faChartColumn,faFile,faCalendarPlus,faReceipt,faCalendarCheck,faUsers,faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Testdashboard(){
  
  let [isActive,setIsActive]=useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
    return(
     
<div id="wrapper"  className={isActive ? 'toggled': null} >

<aside id="sidebar-wrapper">
  <div className="sidebar-brand">
    <h2>Logo</h2>
  </div>
  <ul className="sidebar-nav">
    <li className="active">
      <a href="#"> <FontAwesomeIcon icon={faHouse} className="dashboardicon"/><span className="hide-menu" >Dashboard </span></a>
    </li>
    <li>
      <a href="#"><FontAwesomeIcon icon={faFileCircleCheck} className="dashboardicon"/><span className="hide-menu" >  Crystal Reports</span></a>
    </li>
    <li>
      <a href="#"> <FontAwesomeIcon icon={faChartColumn} className="dashboardicon" /><span className="hide-menu" > Reports Management </span>
          
          </a>
    </li>
    <li>
      <a href="#"><FontAwesomeIcon icon={faFile} className="dashboardicon"/> <span className="hide-menu" >Query Reports</span></a>
    </li>
    <li>
      <a href="#"><FontAwesomeIcon icon={faCalendarPlus} className="dashboardicon" /><span className="hide-menu" > Crystal Reports Scheduler</span>
          </a>
    </li>

    <li>
      <a href="#"><FontAwesomeIcon icon={faChartColumn} className="dashboardicon" /><span className="hide-menu" > Reports Management </span>
          </a>
    </li>
    <li>
      <a href="#">  <FontAwesomeIcon icon={faReceipt} className="dashboardicon" /> <span className="hide-menu" > Audit Trail</span>
        
         </a>
    </li>
    <li>
      <a href="#"> <FontAwesomeIcon icon={faCalendarCheck} className="dashboardicon"/> <span className="hide-menu" >Reports Scheduler </span>
         </a>
    </li>
    <li>
      <a href="#"> <FontAwesomeIcon icon={faUsers} className="dashboardicon" /><span className="hide-menu" > User Management </span>
         </a>
    </li>
    <li>
      <a href="#"> <FontAwesomeIcon icon={faCircleUser} className="userprofile"/><span className="hide-menu" > Test User</span>
         </a>
    </li>
 
  </ul>
</aside>

  <div id="navbar-wrapper">
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="#" className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i>
        
        </a><div 
     
      onClick={toggleClass} 
    >
      click
      </div>

      </div>
    </div>
  </nav>
</div>


<section id="content-wrapper">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="content-title">Test</h2>
        <p>Lorem ipsum...</p>
      </div>
    </div>
</section>
</div>



    )
}

export default Testdashboard;