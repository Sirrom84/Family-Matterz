import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is my input", idRef.current.value.trim());
    onIdSubmit(idRef.current.value.trim());
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
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
