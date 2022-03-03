import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
export default function Hero(){
    return (<>
    <section id="hero" className="d-flex justify-content-center align-items-center">
      <div className="container position-relative grid-box" data-aoos="zoom-in" data-aoos-delay="100">
        <div className="login-section mt-5">
          <Link to="/stlogin"><button className="cus-btn">Student</button></Link>
          <a className="cus-btn" role="button">Recruiter</a>
          <a className="cus-btn" role="button">Admin</a>
        </div>
        <div className="drives-section">
          <a className="cus-btn" href="#" role="button">Current Drives</a>
          <a className="cus-btn" href="#" role="button">Internships</a>
        </div>
      </div>
    </section>
    </>);
}