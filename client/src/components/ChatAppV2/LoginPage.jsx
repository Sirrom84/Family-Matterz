import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

// i cant seem to access the onIdSubmit props/set id function
export default function Login(props) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myId = idRef.current.value.trim();
    props.onIdSubmit(myId);
  };

  const createNewId = () => {
    props.onIdSubmit(uuidV4());
  };

  return (
    <Container className="align-items-center d-flex" style={{ height: "70vh" }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Get a New Id
        </Button>
      </Form>
    </Container>
  );
}
