import React from 'react';
import './Director.css'

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import RNJoshi from '../img/RN joshi sir 3.jpg';
import YVJoshi from '../img/joshi sir.jpg';
import Person3 from '../img/person_3_sm.jpg';

export default function Director() {
  return(<>
    <Container className="dir" fluid>
      <h3>Director Sir's Message</h3>
      <Row>
        <Col lg={4}>
          <Container className="dir-card">
            <img src={RNJoshi} />
            <h5>Dr. R. N. Joshi</h5>
            <p className="dir-subtext">Dean (Industry Liaison) and I/C TPO</p>
            <center><hr /></center>
            <p className="dir-details">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes. More...</p>
          </Container>
        </Col>
        <Col lg={4}>
          <Container className="dir-card">
            <img src={YVJoshi} />
            <h5>Dr. Y. V. Joshi</h5>
            <p className="dir-subtext">Director</p>
            <center><hr /></center>
            <p className="dir-details">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes. More...</p>
          </Container>
        </Col>
        <Col lg={4}>
          <Container className="dir-card">
            <img src={Person3} />
            <h5>William Anderson</h5>
            <p className="dir-subtext">Content</p>
            <center><hr /></center>
            <p className="dir-details">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes. More...</p>
          </Container>
        </Col>
      </Row>
    </Container>
</>);
}