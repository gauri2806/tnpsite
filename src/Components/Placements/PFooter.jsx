import React from 'react';
import './PFooter.css'
import TNPLogo from '../../img/white logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Stack,
} from 'react-bootstrap';

export default function PFooter() {
  return (<>

    <Container className="p-footer" fluid>
      <img src={TNPLogo} alt="tnp logo" />
      <Stack className="p-social about-social" direction="horizontal">
        <a href="https://m.facebook.com/profile.php"><FontAwesomeIcon size="1.5x" color="#3b5998" icon={faFacebookF} /></a>
        <a href="https://twitter.com/tnpcell_sggsiet"><FontAwesomeIcon color="#1da1f2" icon={faTwitter} /></a>
        <a href="https://www.instagram.com/tnpcell_sggsnanded/"><FontAwesomeIcon color="#ffc0cb" icon={faInstagram} /></a>
        <a href="https://www.youtube.com/channel/UCxK3BwLWib2jd8y80CbD4DA"><FontAwesomeIcon color="#ff0000" icon={faYoutube} /></a>
        <a href="https://www.linkedin.com/in/sggs-tnpcell/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </Stack>
      <div className="copyright">
        copyright @2021 SGGSIE&T. All Rights Reserved.
      </div>
    </Container>

  </>);
}