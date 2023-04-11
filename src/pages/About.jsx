import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";

export default function About() {
  return (
    <Container className="Wrapper">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card advice={'This is a advice app that you can...'} loading={false}>
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
