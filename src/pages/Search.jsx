import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import axios from "axios";

export default function Search() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.adviceslip.com/advice/search/${inputValue}`)
      .then((res) => {
        setInputValue("");
        setLoading(false);
        if (res.data.slips) {
          setAdvice(res.data.slips[0].advice);
        } else {
          setAdvice("No advice!");
        }
      })
      .catch((error) => setError("OOPs, Somthing went Wrong..."));
  };

  return (
    <Container className="Wrapper">
      <Row>
        <Col className="d-flex justify-content-center">
          <form onSubmit={onSearch}>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Enter any word..."
              class="input"
              name="text"
              type="text"
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Card advice={advice} loading={loading}></Card>
        </Col>
      </Row>
    </Container>
  );
}
