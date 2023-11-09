import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../HyphenCompo2/HyphenClientOnboard2.css";
import Profile from "../Images/Profile.jpg";

function HyphenClientOnboard2() {
  let [logoimg, setLogoimg] = useState("hh");
  function handleChangeImage(e) {
    setLogoimg(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="pclientbox">
      <Form>
        <br/>
        <Row className="ClientOnboardBox">
          <Col lg="6">
          <div className="companyProfilebox">

            <Form.Label className="headprofilecompany">Company Profile</Form.Label>
            
            <Form.Group as={Row} className="mb-3" controlId="formUserName">
              <Col sm="10">
                <Form.Control className="inputbox" type="text" placeholder="Company Name" required/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAddress1">
              <Col sm="10">
                <Form.Control className="inputbox" as="textarea" placeholder="Address 1" required/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAddress2">
              <Col sm="10">
                <Form.Control className="inputbox" as="textarea" placeholder="Address 2" required/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAdUser">
              <Col sm="3">
                <Form.Select className="inputbox cityclient" aria-label="Default select example" required>
                  <option> Select City</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
              <Col sm="3">
                <Form.Select className="inputbox" aria-label="Default select example" required>
                  <option> Select Country</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
              <Col sm="3">
              <Form.Group as={Row} className="mb-3" controlId="formPinCode">
              <Col sm="10">
                <Form.Control className="inputbox" type="text" placeholder="Pin Code" required/>
              </Col>
            </Form.Group>

              </Col>
           
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Col sm="10">
                <Form.Control className="inputbox" type="text" placeholder="Email" required/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPhone">
              <Col sm="10">
                <Form.Control className="inputbox" type="text" placeholder="Phone" required/>
              </Col>
            </Form.Group>
            </div>
            <Row className="featureClientOnboard"> 
            <Form.Group as={Row} className="mb-3" controlId="formPhone">
                <Form.Label className="headprofilecompany" column>Features</Form.Label>
                <Row>
                <Col sm="6">
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
                <Col sm="6">
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
                </Row>
              </Form.Group>
              </Row>
          </Col>


          <Col lg="6">
           <Row className="rightOneBoxClientOnboard">
            <div className="logoimgbox">
            <img
              src={logoimg === "hh" ? Profile : logoimg}
              alt="logo img"
              className="companylogoimg"
            />
            </div>
             <Col sm="10" >
            <Form.Control
              type="file"
              className="companyfileprofile"
              id="img"
              name="img"
              placeholder="Select a PDF file"
              onChange={handleChangeImage}
              size="sm"
              required
            />
            </Col>
            </Row>
             <Row className="rightTwoBoxClientOnboard">
                <Form.Label className="headprofilecompany" column>Data Source</Form.Label>
               <Row>
                <Col sm="4">
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MS SQL Server" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MYSQL" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Postgress" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Oracle" />
                  </Form.Group>
                </Col>
                <Col sm="4">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Vertica" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="DB2" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Kafka" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MongoDB" />
                  </Form.Group>
                </Col>
                <Col sm="4">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="API" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="JSON" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="CSV" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="ELK" />
                  </Form.Group>
                </Col>
                </Row>
                
            </Row>
            <Button className="clientSubmitbtn" variant="primary" type="submit">
        Submit
      </Button>
      <Button className="userAddcancelbtn" variant="primary">
        Reset
      </Button>

          </Col>
        </Row>

      {/* <Button className="clientSubmitbtn" variant="primary" type="submit">
        Submit
      </Button>
      <Button className="userAddcancelbtn" variant="primary">
        Reset
  </Button> */}

      </Form>
    </div>
  );
}

export default HyphenClientOnboard2;
