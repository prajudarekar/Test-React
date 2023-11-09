import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../HyphenUserComponent/HyphenClientOnboard.css";
import Profile from "../Images/Profile.jpg";

function HyphenClientOnboarding() {

  let [logoimg,setLogoimg]=useState('hh');
function handleChangeImage(e){
  setLogoimg(URL.createObjectURL(e.target.files[0]));
}
  return (
    <div>
      
      <Form>
        <Row className="ClientOnboardBox">

          <Col lg="8" >
          <div className="leftBoxClientOnboard">
            <Form.Label column sm="2">
              Company Profile
            </Form.Label>

            <Form.Group as={Row} className="mb-3" controlId="formUserName">
              <Col sm="10">
                <Form.Control type="text" placeholder="Company Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFileuser" className="mb-3">
              <Col sm="2">
     
<img src={logoimg === "hh" ? Profile : logoimg} alt="logo img" className="companylogoimg"/>

        </Col>
        <Col sm="7">
        <Form.Control type="file" className="companyfileprofile" id="img" name="img"  onChange={handleChangeImage} size="sm" />
        </Col>
      </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAddress1">
              <Col sm="10">
                <Form.Control as="textarea" placeholder="Address 1" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAddress2">
              <Col sm="10">
                <Form.Control as="textarea" placeholder="Address 2" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAdUser">
              <Col sm="3">
                <Form.Select aria-label="Default select example">
                  <option> Select City</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
              <Col sm="3">
                <Form.Select aria-label="Default select example">
                  <option> Select Country</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPinCode">
              <Col sm="10">
                <Form.Control type="text" placeholder="Pin Code" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Col sm="10">
                <Form.Control type="text" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPhone">
              <Col sm="10">
                <Form.Control type="text" placeholder="Phone" />
              </Col>
            </Form.Group>
            </div>
          </Col>

          <Col lg="4" className="rightBoxClientOnboard">
            <Row className="rightOneBoxClientOnboard"> 
              <Form.Group as={Row} className="mb-3" controlId="formPhone">
                <Form.Label column>Features</Form.Label>
                <Col sm="10">
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Dashboard Template" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Custom Report Design" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Report Scheduling" />
                  </Form.Group>
                </Col>
              </Form.Group>
            </Row>

            <Row className="rightTwoBoxClientOnboard">
              <Form.Group as={Row} className="mb-3" controlId="formPhone">
                <Form.Label column>Integration</Form.Label>
                <Col sm="10">
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="API" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MYSQL" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Postgress" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MongoDB" />
                  </Form.Group>
                </Col>
              </Form.Group>
            </Row>
          </Col>
        </Row>
        
      <Button className="clientSubmitbtn" variant="primary" type="submit">
        Submit
      </Button>
      <Button className="userAddcancelbtn" variant="primary">
        Reset
      </Button>
      </Form>
    </div>
  );
}

export default HyphenClientOnboarding;
