import Link from "next/link";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Elipse from "../Icons/Elipse";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <Navbar fixed="top" className={s.navbar_container}>
      <Link href="/" passHref legacyBehavior>
        <Navbar.Brand className={`font-bold ${s.brand_icon}`}>
          <Elipse size={19} stroke={4} />
          <strong>Juanda</strong>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link>Inicio</Nav.Link>
          </Link>
          <Link href="/blog" passHref legacyBehavior>
            <Nav.Link>Blog</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
