import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../HyphenUserComponents/UserComponent.css";
  

function HyphenUserRole(){
    return(
        <div className="userRolecard">
 <Form>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Role Id
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Role"/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formRoleName">
        <Form.Label column sm="2">
          Role Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Role Name"/>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3" controlId="formFeatureName">
        <Form.Label column sm="2">
          Feature Name
        </Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example">
      <option> Select Feature</option>
      <option value="1">Report Management</option>
      <option value="2">Report Schedular</option>
      <option value="3">Report Management</option>
    </Form.Select>
        </Col>
        </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formRoleDescription">
        <Form.Label column sm="2">
          Role Description
        </Form.Label>
        <Col sm="10">
          <Form.Control as="textarea" placeholder="Role Description"/>
        </Col>
      </Form.Group>

      <Button className="userRolebtnSubmit" variant="primary" type="submit">
        Submit
      </Button>
      <Button className="userRolebtn" variant="secondary">
        Cancel
      </Button>
</Form>
        </div>
    )
}

export default HyphenUserRole;