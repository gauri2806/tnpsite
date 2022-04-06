import React from 'react';
import './Navbar.css';
import {
  Container,
} from 'react-bootstrap';
import {
  Navbar as BSNavbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import TNPLogo from '../img/TNP LOGO.png';
// import SGGSLogo from '../img/sggs.png';

export default function Navbar() {
  return (<>

    <BSNavbar class="navbar" bg="light" sticky="top">
      <Container>
        <BSNavbar.Brand id="navbar-brand" href="#home">
          <img className="logo-img" src={TNPLogo} />
          <span className="divider"></span>
          <div className="logo-text">T&P CELL <br /> SGGSIE&T, NANDED</div>
        </BSNavbar.Brand>
      </Container>
      <Container>
        <Nav className="desktop-navmenu ms-auto">
          <Nav.Link id="navlink" href="#">Home</Nav.Link>
          <Nav.Link id="navlink"><ScrollLink to="whyus" smooth duration={500}>Why Us</ScrollLink></Nav.Link>
          {/* <Nav.Link id="navlink" href="#">Events</Nav.Link> */}
          <Nav.Link id="navlink" href="#"><Link id="navlink" to="/placements">Placements</Link></Nav.Link>
          <Nav.Link id="navlink" href="#"><ScrollLink to="ourteam" smooth duration={500}>Our Team</ScrollLink></Nav.Link>
          <Nav.Link id="navlink" href="#"><ScrollLink to="contactus" smooth duration={500}>Contact Us</ScrollLink></Nav.Link>
        </Nav>
        <NavDropdown title={<FontAwesomeIcon className="mobile-nav-icon" icon={faBars} />} className="mobile-navmenu ms-auto" drop="start">
          <NavDropdown.Item href="/">
            Home  
          </NavDropdown.Item>
          <NavDropdown.Item>
            <ScrollLink to="whyus" smooth duration={1000}>Why Us</ScrollLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/placements"><span style={{color: "#000"}}>Placements</span></Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <ScrollLink to="ourteam" smooth duration={1000}>Our Team</ScrollLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <ScrollLink to="contactus" smooth duration={1000}>Contact Us</ScrollLink>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </BSNavbar>

  </>);

}
