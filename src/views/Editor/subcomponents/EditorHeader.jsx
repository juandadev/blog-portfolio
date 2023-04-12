import React from "react";
import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Elipse from "@/components/Icons/Elipse";

export default function EditorHeader({ s }) {
  return (
    <Navbar fixed="top">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className={`font-bold ${s.brand_icon}`}>
            <Elipse size={19} stroke={4} />
            <strong>Juanda</strong>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
