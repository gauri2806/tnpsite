import React from 'react';
import './Team.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import  { Pagination } from 'swiper';
import Person1 from '../img/person_1_sm.jpg';
import Person2 from '../img/person_2_sm.jpg';
import Person3 from '../img/person_3_sm.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Team () {
return(<>

<div className="team-background">
  <h2 className="text-center team-main-text">OUR TEAM</h2>
  <div>
    <Swiper
      loop={true}
      slidesPerView={5}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="team-card">
          <img src={Person1} className="team-img" />
          <h4 className="p-3 text-white">Jane Doe</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person2} className="team-img" />
          <h4 className="p-3 text-white">Sarah Hill</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person3} className="team-img" />
          <h4 className="p-3 text-white">Matt King</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person2} className="team-img" />
          <h4 className="p-3 text-white">Sarah Hill</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person2} className="team-img" />
          <h4 className="p-3 text-white">Sarah Hill</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person3} className="team-img" />
          <h4 className="p-3 text-white">Matt King</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person1} className="team-img" />
          <h4 className="p-3 text-white">Jane Doe</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person2} className="team-img" />
          <h4 className="p-3 text-white">Sarah Hill</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person1} className="team-img" />
          <h4 className="p-3 text-white">Jane Doe</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-card">
          <img src={Person3} className="team-img" />
          <h4 className="p-3 text-white">Matt King</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

</>);
}