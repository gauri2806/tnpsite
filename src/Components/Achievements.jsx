
import React from 'react';
import './Achievements.css';
export default function Achievements(){
  return(
  <>
    <section id="Achievements" classNameName="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2//" data-aos="fade-right" data-aos-delay="100">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/assets/img/person_1_sm.jpg" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                  <img src="/assets/img/person_2_sm.jpg" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                  <img src="/assets/img/person_3_sm.jpg" className="d-block w-100" alt=""/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>ACHIEVEMENTS</h3>
            <p className="fst-italic">
              Established in 1981, Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded, is one of the promising leader institutions in technical education, research and technology transfer. Since its inception, the institute is dedicated to students’ centric learning and believes in pursuing academic excellence. It is having neat, clean and green campus spread over land of 46 acres. It receives 100% grant-in aid from Government of Maharashtra.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i>The Institute has collaborations with a number of premier institutes (including foreign universities) and industries through which substantial opportunities like internships, credit transfers and industry relevant projects. </li>
              <li><i className="bi bi-check-circle"></i> The institute has established the industry supported laboratories like E-PASS laboratory sponsored by Emerson Automation Solution, Mumbai, Center for VLSI Design and Verification by Mentor Graphics, USA and NVDIA GPU Education Center, Pune giving fillip to the research and skill development activities. </li>
              <li><i className="bi bi-check-circle"></i> Institute has excellent track record of publications with recent statistics as 1200+ peer reviewed publications, 8000+ research citations, 25 patents filed and two awarded.</li>
            </ul>
            <p>
              Students at SGGS bagged AIR-1 three times and several students in top 100 in GATE examination every year. Also students design and build new vehicle every year by participating in Baja and Supra competitions. Students get exposure to multidisciplinary and innovative project in institute Innovation laboratory, which is kept open 24 X 7.
            </p>

          </div>
        </div>
      </div>
    </section>
    </>);}