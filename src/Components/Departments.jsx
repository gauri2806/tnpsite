import React from 'react';
import './Departments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faFlask, faBuilding, faPaintRoller, faDatabase, faLaptopCode, faList, faCogs, faAnchor, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

export default function Departments () {
return(<>

<section id="features" className="features">
  <div className="container" data-aos="fade-up">
    <div className="row" data-aos="zoom-in" data-aos-delay="100">
      <h3 className="heading">Departments</h3>
      <div className="col-lg-3 col-md-4">
        <div className="icon-box">
            <FontAwesomeIcon className="faico" icon = {faTv} />
            <h3><a href="https://www.sggs.ac.in/home/page/department-of-computer-science-and-engineering">
              ComputerScience and Engineering
            </a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div className="icon-box">
        <FontAwesomeIcon className="faico" icon = {faFlask} />
          <h3><a href="https://www.sggs.ac.in/home/page/department-of-chemical-engineering">Chemical Engineering</a>
          </h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div className="icon-box">
        <FontAwesomeIcon className="faico" icon = {faBuilding} />
          <h3><a href="https://www.sggs.ac.in/home/page/department-of-civil-engineering">Civil Engineering</a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faPaintRoller} />
          <h3><a href="https://www.sggs.ac.in/home/page/electronics-and-telecommunication-engineering">Electronics
              And Telecommunication Engineering</a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faDatabase} />
          <h3><a href="https://www.sggs.ac.in/home/page/electrical-engineering">Electrical Engineering</a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faLaptopCode} />
          <h3><a href="https://www.sggs.ac.in/home/page/information-technology">Information Technology</a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faList} />
          <h3><a href="https://www.sggs.ac.in/home/page/instrumentation-engineering">Instrumentation Engineering</a>
          </h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faCogs} />
          <h3><a href="https://www.sggs.ac.in/home/page/mechanical-engineering">Mechanical Engineering</a></h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faAnchor} />
          <h3><a href="https://www.sggs.ac.in/home/page/department-of-textile-technology-">Textile Technology</a>
          </h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
          <FontAwesomeIcon className="faico" icon = {faCompactDisc} />
          <h3><a href="https://www.sggs.ac.in/home/page/department-of-production-engineering">Production
              Engineering</a></h3>
        </div>
      </div>
    </div>
  </div>
</section>

</>);
}