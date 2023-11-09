import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from './Footer';

import HyphenSidebar from './HyphenSidebar'
const Dashboard = () => {
  return (
    <div>
        <Row>
            <Col className="col-md-1 ">
          <div className='leftbar'>    
        <HyphenSidebar/>
        </div>
        </Col>
        <Col className="col-md-11">
          <div className='box'>
<h1>s</h1>
          </div>
        </Col>
      
        </Row>
    </div>
  )
}

export default Dashboard
