import React, { useState, useLayoutEffect } from 'react';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Person1 from '../img/person_1_sm.jpg';
import Person2 from '../img/person_2_sm.jpg';
import Person3 from '../img/person_3_sm.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class TeamCard extends React.Component {
  render() {
    return (
      <div className="team-card">
        <img src={this.props.pfp} className="team-img" />
        <h4 className="p-3 text-white">{this.props.fullname}</h4>
        <a href={this.props.phone}><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
        <a href={this.props.mail}><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
        <a href={this.props.linkedin}><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
      </div>
    );
  }
}

export default function Team() {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
  const [width, height] = useWindowSize();

  return (<>
    <div className="team-background" id="ourteam">
      <h2 className="text-center team-main-text">OUR TEAM</h2>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1250,
            disableOnInteraction: false,
          }}
          slidesPerView={width < 768 ? 1 : 5}
          spaceBetween={50}
          // pagination={{
          //   clickable: true,
          // }}
          navigation = {true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <TeamCard
              fullname="Sarah Hill"
              pfp={Person1}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Jane Doe"
              pfp={Person2}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Max Knight"
              pfp={Person3}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sarah Hill"
              pfp={Person1}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Jane Doe"
              pfp={Person2}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Max Knight"
              pfp={Person3}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sarah Hill"
              pfp={Person1}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Jane Doe"
              pfp={Person2}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Max Knight"
              pfp={Person3}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sarah Hill"
              pfp={Person1}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Jane Doe"
              pfp={Person2}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Max Knight"
              pfp={Person3}
              phone="tel:9876543210"
              mail="mailto:xyz@example.com"
              linkedin="url-to-linkedin-profile"
            />
          </SwiperSlide>

          {/* <SwiperSlide>
        <div className="team-card">
          <img src={Person1} className="team-img" />
          <h4 className="p-3 text-white">{team.name}</h4>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="m-2" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} className="m-2" /></a>
        </div>
      </SwiperSlide> */}
          {/* <SwiperSlide>
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
      </SwiperSlide> */}
        </Swiper>
      </div>
    </div>

  </>);
}