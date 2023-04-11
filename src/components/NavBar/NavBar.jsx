import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Container>
      <Row>
        <div className="navbar">
          <Link to={"/"}>
            <img className="logo" src="vvvv.png" />
          </Link>
          <div className="d-flex justif-content-between align-items-center   nav-bar-links">
            <NavLink to={"/"} className={`navbar-item ${(link)=>link.isActive ? 'active' : ''}`}>
              Give me a Advice
            </NavLink>
            <NavLink to={"search"} className={`navbar-item ${(link)=>link.isActive ? 'active' : ''}`}>
              Search Advice
            </NavLink>
            <NavLink to={"about"} className={`navbar-item ${(link)=>link.isActive ? 'active' : ''}`}>
              about
            </NavLink>
          </div>
        </div>
      </Row>
    </Container>
  );
}
