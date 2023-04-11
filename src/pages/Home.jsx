import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card/Card";
import Button from '../components/Button/Button'
import axios from "axios";

export default function Home() {
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchAdvice =async () => {
    setLoading(true)
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setLoading(false);
        const { advice, id } = res.data.slip;
        setAdvice(advice);
      })
      .catch((error) => setError("OOPs, Somthing went Wrong..."));
  };

  return (
    <Container className="Wrapper">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card advice={advice} loading={loading}></Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button onFetchAdvice={fetchAdvice}>Advice me...</Button>
        </Col>
      </Row>
    </Container>
  );
}
