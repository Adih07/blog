import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contacts() {
  return (
    <InputGroup className="d-flex justify-content-center container m-5">
      <div>
        <InputGroup.Text style={{ color: "yellow", background: "black" }}>
          First and last name
        </InputGroup.Text>
        <Form.Control aria-label="First name" placeholder="First name" />
        <Form.Control aria-label="Last name" placeholder="Last name" />
      </div>
      <div>
        <InputGroup.Text style={{ color: "yellow", background: "black" }}>
          Phone number and @Email
        </InputGroup.Text>
        <Form.Control aria-label="Phone number" placeholder="Phone number" />
        <Form.Control aria-label="Email" placeholder="@Email" />
      </div>
    </InputGroup>
  );
}

export default Contacts;
