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
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
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