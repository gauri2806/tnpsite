import React from 'react';
import './Hero.css';
export default function Hero(){
    return (<>
    <section id="hero" className="d-flex justify-content-center align-items-center">
      <div className="container position-relative grid-box" data-aoos="zoom-in" data-aoos-delay="100">
        <div className="login-section mt-5">
          <a className="cus-btn" href="#" role="button">Student</a>
          <a className="cus-btn" href="#" role="button">Recruiter</a>
          <a className="cus-btn" href="#" role="button">Admin</a>
        </div>
        <div className="drives-section">
          <a className="cus-btn" href="#" role="button">Current Drives</a>
          <a className="cus-btn" href="#" role="button">Internships</a>
        </div>
      </div>
    </section>
    </>);
}