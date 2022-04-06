import React from 'react';
import './PHeader.css';
import TNPLogo from '../../img/tnplogo-text.png'

import {
  Container,
  Image,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PHeader () {
  return(<>

    <Container className="header" fluid>
      <Image className="logo-img" src={TNPLogo} />
      <span className="divider"></span>
      <div className="head-text" >
        <h4>Placements</h4>
      </div>
    </Container>
    <Navbar className="back" sticky="top">
      <Link className="backlink" to="/">&lt; Go Back</Link>
    </Navbar>

</>)
}