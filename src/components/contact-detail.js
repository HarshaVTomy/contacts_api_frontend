// ContactsDetail.js
import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const ContactsDetail = (props) => {
  console.log(props,"detailprops");
  const [firstName,setFirstName]= useState("");
  const [lastName,setLastName]= useState("");
  const [fullName,setFullName]= useState("");
  const [city,setCity]= useState("");
  const [state,setState]= useState("");
  const [zip,setZip]= useState("");
  return (
    <div className="App">
      <h2>Contact Detail</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange= {(e) =>setFirstName(e.target.value) }
            defaultValue="First name"
            disabled
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange= {(e) =>setLastName(e.target.value) }
            value={lastName}
            defaultValue=""
            disabled
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Full name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Fullname"
              value={fullName}
              onChange= {(e) =>setFullName(e.target.value) }
              aria-describedby="inputGroupPrepend"
             disabled
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" onChange= {(e) =>setCity(e.target.value) } value={city}  disabled/>

        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text"  value ={state} onChange= {(e) =>setState(e.target.value) } placeholder="State" disabled />
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" value={zip} onChange= {(e) =>setZip(e.target.value)} placeholder="Zip" disabled />
        </Form.Group>
      </Row>
      {/* Add code for displaying contact detail here */}
    </div>
  );
}
export default ContactsDetail;
