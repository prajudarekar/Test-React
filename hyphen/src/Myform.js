import React from 'react';
import { Form } from 'react-bootstrap';

function Myform() {
  return (
    <Form>
      <Form.Group>
        <Form.Label as="legend">My Fieldset Legend</Form.Label>
        <Form.Control type="text" placeholder="Enter your text here" />
      </Form.Group>
    </Form>
  );
}

export default Myform;
