import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddBlog = () => {
  return (
    <div>
      <Navbar style={{ background: "black" }}>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>AddCard</Navbar.Brand>
          </Link>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>AboutUs</Navbar.Brand>
          </Link>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Contacts</Navbar.Brand>
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ color: "gold" }}>Favorites</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default AddBlog;
