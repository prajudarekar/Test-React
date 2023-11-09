import React,{useState} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logo from "./logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileCircleCheck,faHouse,faChartColumn,faFile,faCalendarPlus,faReceipt,faCalendarCheck,faUsers,faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Hyphenview from "./Images/hyphenwhite.png";
import Hyphenview1 from "./Images/logoOnly.png";

const Sidebar = () => {
    let [status,setStatus]=useState("hp");

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
       
      {/*}  <CDBSidebarHeader prefix={<img src={Hyphenview1}  className="dashboardlogo1" alt="logo img" />}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img src={Hyphenview}  className="dashboardlogo" alt="logo img" /> 
          </a>
        </CDBSidebarHeader>
*/}
        <CDBSidebarHeader prefix={status === "hp" ? <i onClick={()=>setStatus("hyphensidebar")}  className="fa fa-bars fa-large"></i> : <img src={Hyphenview1} onClick={()=>setStatus("hp")}  className="dashboardlogo1" alt="logo img" /> }>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img src={Hyphenview}  className="dashboardlogo" alt="logo img" /> 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink  to="/" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" >
              <CDBSidebarMenuItem  icon="fa-brands fa-react" >
              Crystal Reports</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" >
              <CDBSidebarMenuItem icon="fa fa-bar-chart">
Reports Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" >
              <CDBSidebarMenuItem icon="fa fa-file">
Query Reports</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" >
              <CDBSidebarMenuItem icon="fa fa-calendar-plus-o"> Crystal Reports Scheduler</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/tables" >
              <CDBSidebarMenuItem icon="table"> Audit Trail</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink  to="/analytics" >
              <CDBSidebarMenuItem icon="chart-line">Reports Scheduler</CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/hero404">
              <CDBSidebarMenuItem icon="exclamation-circle"> User Management</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  >
              <CDBSidebarMenuItem icon="user">Test User</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;