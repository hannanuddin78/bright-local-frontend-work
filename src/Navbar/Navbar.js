import Image from 'next/image';
import { Nav, Navbar } from "react-bootstrap";
import style from "./HeaderNavbar.module.css";

const HeaderNavbar = () => {
    return (
        <Navbar expand="lg" sticky="top" className={style.fixedNavbar}>
            <Navbar.Brand href="#home">
                <Image src="/brightlocal_logo.svg" alt="Picture of the author" width="181px" height="31px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto navLink">
                    <Nav.Link href="#home">Features</Nav.Link>
                    <Nav.Link href="#link">Build Citations</Nav.Link>
                    <Nav.Link href="#link">Solutions</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                    <Nav.Link href="#link">Book a Demo</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Bright Ideas</Nav.Link>
                </Nav>
                <a href="notCreate" className={style.navRightLogin}>Log In</a>
                <a className="green-btn" href="notCreate">Try For Free</a>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderNavbar;