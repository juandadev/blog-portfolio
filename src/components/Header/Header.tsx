import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Elipse from '../Icons/Elipse'
import s from './Header.module.scss'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" fixed="top" className={s.navbar_container}>
      <Link href="/" passHref legacyBehavior>
        <Navbar.Brand className={`font-bold ${s.brand_icon}`}>
          <Elipse size={19} stroke={4} />
          <strong>Juanda</strong>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/blog" passHref legacyBehavior>
            <Nav.Link>Blog</Nav.Link>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Nav.Link>Acerca de mí</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
