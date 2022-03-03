import React from 'react';
import './Footer.css'

export default function Footer () {
return(<>

<footer>
    <div class="container">
      <div class="sec aboutus">
        <h2>About Us</h2>
        <p> This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. 
        </p>

        <ul class="sci">
          <li><a href="https://m.facebook.com/profile.php?id=100073430083642&refid=52&__tn__=C-R#_=_"><i
                class="fab fa-facebook-square"></i></a></li>
          <li><a href="https://twitter.com/tnpcell_sggsiet"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/tnpcell_sggsnanded/"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
          <li><a href="https://www.linkedin.com/in/sggs-tnpcell/"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>

      <div class="sec quickLinks">
        <h2 id="Ql">Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Why SGGSIE&T</a></li>
          <li><a href="#">Achievments</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="#">Our Recruiters</a></li>
          <li><a href="#">Our Team</a></li>
        </ul>
      </div>

      <div class="sec contact">
        <h2>Contact Info</h2>
        <ul class="info">
          <li>
            <span><i class="fas fa-map-marker-alt"></i></span>
            <p><a target="_blank" href="https://maps.app.goo.gl/KdkCbFL9v8gFrEm98">
                SGGSIE&T <br /> Vishunupuri <br /> Nanded .
              </a></p>
          </li>
          <li>
            <span><i class="fas fa-phone-square-alt"></i></span>
            <p>
              <a href="tel:123456789">+91 9876543210</a>
            </p>
          </li>
          <li>
            <span><i class="fas fa-envelope-open"></i></span>
            <p><a href="mail to:tnpcell@sggs.ac.in">tnpcell@sggs.ac.in</a></p>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>copyright @2021 SGGSIT&E . All Rights Reserved.</p>
      </div>
    </div>
  </footer>

</>);
}