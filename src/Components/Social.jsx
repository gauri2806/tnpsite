import React from 'react';
import './Social.css';

import { Container, Stack } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Social () {
  return(<>
  
    <Container className="social-banner" fluid>
      <Container className="social-list">
        <Stack direction="horizontal">
          <div className="ms-auto"></div>
          <a href="https://www.facebook.com/Training-Placement-Cell-SGGS-Nanded-110045764789964"><FontAwesomeIcon className="social-btn" icon={faFacebook} /></a>
          <a href="https://twitter.com/tnpcell_sggsiet"><FontAwesomeIcon className="social-btn" icon={faTwitter} /></a>
          <a href="https://www.youtube.com/channel/UCxK3BwLWib2jd8y80CbD4DA"><FontAwesomeIcon className="social-btn" icon={faYoutube} /></a>
          <a href="https://www.linkedin.com/company/placementcell-sggsiet"><FontAwesomeIcon className="social-btn" icon={faLinkedin} /></a>
          <a href="https://instagram.com/tnpcell_sggsnanded"><FontAwesomeIcon className="social-btn" icon={faInstagram} /></a>
        </Stack>
      </Container>
    </Container>

  </>);
}