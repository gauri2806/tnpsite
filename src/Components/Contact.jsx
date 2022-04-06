import React from 'react';
import './Contact.css';
import Person1 from '../img/trainers/trainer-1.jpg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

export default function Contact () {
  return (<>

    <Container className="contact" id="contactus" fluid>
      <h2>Contact Us</h2>
      <Container className="contact-main">
        <Row>
          <Col lg={4}>
            <img src={Person1} />
          </Col>
          <Col className="cm-data" lg={8}>
            <div className="cm-inner">
              <h4>Dr. Ravindra Joshi</h4>
              <p className="subtext">Dean (Industry Liaison), In-charge Training & Placement Office</p>
              <p><FontAwesomeIcon icon={faPhone} /> : <a href="tel:9876543210">+91 98765 43210</a></p>
              <p><FontAwesomeIcon icon={faEnvelope} /> : <a href="mailto:tpo@sggs.ac.in">tpo@sggs.ac.in</a>, <a href="mailto:rnjoshi@sggs.ac.in">rnjoshi@sggs.ac.in</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>

</>);
}