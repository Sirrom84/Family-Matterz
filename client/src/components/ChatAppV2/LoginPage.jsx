import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import backgroundVideo from "./video/family.mp4";
import "./Loginpage.scss";

export default function Login(props) {
  console.log("this is props: ", props.onIdSubmit);

  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onIdSubmit(idRef.current.value.trim());
  };

  const createNewId = () => {
    window.localStorage.setItem("aaron-chat-app3433", uuidV4());
  };

  return (
    <div id="layout">
      <div id="wrap_video">
        <div id="video_box">
          <div id="video_overlays">
            <Container
              className="align-items-center d-flex"
              style={{ height: "70vh" }}
            >
              <Form onSubmit={handleSubmit} className="w-80">
                <Form.Group>
                  <Form.Label id="title">Family MatterZ</Form.Label>
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
          </div>
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
