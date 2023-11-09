import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../HyphenUserComponents/UserComponent.css";

function HyphenUserCreation(){
    return(
        <div className="userRolecard">
 <Form>

      <Form.Group as={Row} className="mb-3" controlId="formUserName">
        <Form.Label column sm="2">
          User Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="User Name"/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formAdUser">
        <Form.Label column sm="2">
          AD User
        </Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example">
      <option> Select AD</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formRole">
        <Form.Label column sm="2">
        Role
        </Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example">
      <option> Select Role</option>
      <option value="1">Report Management</option>
      <option value="2">Report Schedular</option>
      <option value="3">Report Management</option>
    </Form.Select>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3" controlId="formAdEmailAdd">
        <Form.Label column sm="2">
          Email Address
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Email Address"/>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3" controlId="formUserPass">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Password"/>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3" controlId="formReportRPT">
        <Form.Label column sm="2">
          Report RPT
        </Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example">
      <option> Select Report RPT</option>
      <option value="1">Report Management</option>
      <option value="2">Report Schedular</option>
      <option value="3">Report Management</option>
    </Form.Select>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3" controlId="formReportDashboard">
        <Form.Label column sm="2">
          Report Dashboard
        </Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example">
      <option> Select Report D</option>
      <option value="1">Report Management</option>
      <option value="2">Report Schedular</option>
      <option value="3">Report Management</option>
    </Form.Select>
        </Col>
      </Form.Group>

      <Button className="userAddbtn" variant="primary" type="submit">
        Add User
      </Button>
      <Button className="userAddcancelbtn" variant="secondary">
        Cancel
      </Button>
</Form>
        </div>
    )
}

export default HyphenUserCreation;