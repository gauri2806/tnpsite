import React from 'react';
import './Contact.css';
import Person1 from '../img/trainers/trainer-1.jpg';

import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap'

export default function Contact () {
  return (<>

    <Container className="contacts-container" fluid>
      <h2 className="contact-head">Contact Us</h2>
      <Container className="contact-main">
        <Image className="contact-main-img" src={Person1} />
        <Container className="contact-main-details">
          <h3 className="head-name open-sans">Dr. Ravindra Joshi</h3>
          <h6 className="head-details open-sans">Dean (Industry Liaison), In-charge Training & Placement Officer</h6>
          <Container className="head-info">
            <p className="head-text">Contact No: <a href="tel:2462269182">+91-2462-269182</a> (Office)</p>
            <p className="head-text">Email: <a href="mailto:tpo@sggs.ac.in">tpo@sggs.ac.in</a>,<br/> <a href="mailto:rnjoshi@sggs.ac.in">rnjoshi@sggs.ac.in</a></p>
          </Container>
        </Container>
      </Container>
      <center>***OTHER CONTACTS***</center>
    </Container>

</>);
}