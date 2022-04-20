import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

//Swiper
import { Autoplay, Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Poster1 from '../img/PlacementPoster/poster1.png';
import Poster2 from '../img/PlacementPoster/poster2.png';
import Poster3 from '../img/PlacementPoster/poster3.png';
import Poster4 from '../img/PlacementPoster/poster4.png';
import Poster5 from '../img/PlacementPoster/poster5.png';
import Poster6 from '../img/PlacementPoster/poster6.png';
import Poster7 from '../img/PlacementPoster/poster7.png';
import Poster8 from '../img/PlacementPoster/poster8.png';
import Poster9 from '../img/PlacementPoster/poster9.png';
import Poster10 from '../img/PlacementPoster/poster10.png';
import Poster11 from '../img/PlacementPoster/poster11.png';
import Poster12 from '../img/PlacementPoster/poster12.png';
import Poster13 from '../img/PlacementPoster/poster13.png';
import Poster14 from '../img/PlacementPoster/poster14.png';
import Poster15 from '../img/PlacementPoster/poster15.jpg';
import Poster16 from '../img/PlacementPoster/poster16.png';
import Poster17 from '../img/PlacementPoster/poster17.png';


import './Achievements.css';

class Carousel extends React.Component {
  render() {
    return (
      <Col lg="6" >
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={Poster1} class="d-block w-100" alt="Poster 1" /></SwiperSlide>
          <SwiperSlide><img src={Poster2} class="d-block w-100" alt="Poster 2" /></SwiperSlide>
          <SwiperSlide><img src={Poster3} class="d-block w-100" alt="Poster 3" /></SwiperSlide>
          <SwiperSlide><img src={Poster4} class="d-block w-100" alt="Poster 4" /></SwiperSlide>
          <SwiperSlide><img src={Poster5} class="d-block w-100" alt="Poster 5" /></SwiperSlide>
          <SwiperSlide><img src={Poster6} class="d-block w-100" alt="Poster 6" /></SwiperSlide>
          <SwiperSlide><img src={Poster7} class="d-block w-100" alt="Poster 7" /></SwiperSlide>
          <SwiperSlide><img src={Poster8} class="d-block w-100" alt="Poster 8" /></SwiperSlide>
          <SwiperSlide><img src={Poster9} class="d-block w-100" alt="Poster 9" /></SwiperSlide>
          <SwiperSlide><img src={Poster10} class="d-block w-100" alt="Poster 10" /></SwiperSlide>
          <SwiperSlide><img src={Poster11} class="d-block w-100" alt="Poster 11" /></SwiperSlide>
          <SwiperSlide><img src={Poster12} class="d-block w-100" alt="Poster 12" /></SwiperSlide>
          <SwiperSlide><img src={Poster13} class="d-block w-100" alt="Poster 13" /></SwiperSlide>
          <SwiperSlide><img src={Poster14} class="d-block w-100" alt="Poster 14" /></SwiperSlide>
          <SwiperSlide><img src={Poster15} class="d-block w-100" alt="Poster 15" /></SwiperSlide>
          <SwiperSlide><img src={Poster16} class="d-block w-100" alt="Poster 16" /></SwiperSlide>
          <SwiperSlide><img src={Poster17} class="d-block w-100" alt="Poster 17" /></SwiperSlide>      
        </Swiper>
    </Col>
    );
  }
}

export default function Achievements() {
  return (
    <>
      <section id="Achievements" classNameName="about">
        <Container>

          <Row>
            <Col lg="6" className="ach-text">
            {/* <Col className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"> */}
              <h3>ACHIEVEMENTS</h3>
              <p className="italic">
                Established in 1981, Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded, is one of the promising leader institutions in technical education, research and technology transfer. Since its inception, the institute is dedicated to students’ centric learning and believes in pursuing academic excellence. It is having neat, clean and green campus spread over land of 46 acres. It receives 100% grant-in aid from Government of Maharashtra.
              </p>
              <ul>
                <li><FontAwesomeIcon className="check-icon" icon={faCheckCircle} /> The Institute has collaborations with a number of premier institutes (including foreign universities) and industries through which substantial opportunities like internships, credit transfers and industry relevant projects. </li>
                <li><FontAwesomeIcon className="check-icon" icon={faCheckCircle} /> The institute has established the industry supported laboratories like E-PASS laboratory sponsored by Emerson Automation Solution, Mumbai, Center for VLSI Design and Verification by Mentor Graphics, USA and NVDIA GPU Education Center, Pune giving fillip to the research and skill development activities. </li>
                <li><FontAwesomeIcon className="check-icon" icon={faCheckCircle} /> Institute has excellent track record of publications with recent statistics as 1200+ peer reviewed publications, 8000+ research citations, 25 patents filed and two awarded.</li>
              </ul>
              <p>
                Students at SGGS bagged AIR-1 three times and several students in top 100 in GATE examination every year. Also students design and build new vehicle every year by participating in Baja and Supra competitions. Students get exposure to multidisciplinary and innovative project in institute Innovation laboratory, which is kept open 24 X 7.
              </p>

            </Col>
            <Carousel />
          </Row>
        </Container>
      </section>
    </>);
}