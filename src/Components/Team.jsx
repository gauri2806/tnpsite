import React, { useState, useLayoutEffect } from 'react';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper';

import surwal from '../img/team/suruchiwalthare.jpeg';
import saupac from '../img/team/saurabhpachghare.jpg';
import sanwag from '../img/team/sanketwaghmare.jpeg';
import sarbha from '../img/team/sarveshabhatgare.jpeg';
import sahdon from '../img/team/sahildongre.jpeg';
import mahwat from '../img/team/maheshwattamwar.jpeg';
import monham from '../img/team/monikahamand.jpg';
import harkad from '../img/team/harshkadam.jpg';
import vaides from '../img/team/vaidikdeshmukh.jpeg';
import kapkap from '../img/team/kapilkapse.jpeg';
import yasrau from '../img/team/yashraut.jpeg';
import tandes from '../img/team/tanmaydeshmukh.jpeg';
import poobho from '../img/team/poojabhoskar.jpeg';
import nitkod from '../img/team/nitinkode.jpeg';
import omfuta from '../img/team/omfutariya.jpeg';
import shisin from '../img/team/shivangsingh.jpeg';
import ayuran from '../img/team/ayushrane.jpg';
import vedtot from '../img/team/vedanttotla.jpeg';
import saksab from '../img/team/sakshisabu.jpeg';
import hitkol from '../img/team/hiteshkoli.jpeg';
import russol from '../img/team/rushikeshsolanke.jpeg';
import akakha from '../img/team/akankshakhandare.jpeg';
import rohgar from '../img/team/rohitgarje.jpg';
import hemsaj from '../img/team/hemantsajjan.jpeg';
import samdes from '../img/team/samradnyideshpande.jpg';
import puskha from '../img/team/pushkarkhawas.jpeg';
import shisap from '../img/team/shivanisapkal.jpeg';


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
              fullname="Suruchi Walthare"
              pfp={surwal}
              phone="tel:8956426701"
              mail="mailto:2019bcs050@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/suruchi-walthare-4841311b1/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Saurabh Pachghare"
              pfp={saupac}
              phone="tel:7841983268"
              mail="mailto:2019bel019@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/saurabh-pachghare-3bb471207/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sanket Waghmare"
              pfp={sanwag}
              phone="tel:9067405977"
              mail="mailto:2019bce050@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/sanket-waghmare-318093222"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sarvesha Bhatgare"
              pfp={sarbha}
              phone="tel:8668953689"
              mail="mailto:2019bch024@sggs.ac.in"
              linkedin="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sahil Dongare"
              pfp={sahdon}
              phone="tel:7745028224"
              mail="mailto:2019bcs046@sggs.ac.in"
              linkedin="linkedin.com/in/sahil-dongare-7794a41ab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Mahesh Wattamwar"
              pfp={mahwat}
              phone="tel:7218232383"
              mail="mailto:2020bcs509@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/maheshwattamwar/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Monika Hamand"
              pfp={monham}
              phone="tel:9156591896"
              mail="mailto:2019bel021@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/monika-hamand-59a020203"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Harsh Kadam"
              pfp={harkad}
              phone="tel:7083615677"
              mail="mailto:2020bch502@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/harsh-kadam-880a88202"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Vaidik Deshmukh"
              pfp={vaides}
              phone="tel:8275711529"
              mail="mailto:2019bme023@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/vaidik-deshmukh-a99a931b7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Kapil Kapse"
              pfp={kapkap}
              phone="tel:9356708071"
              mail="mailto:2019bec043@sggs.ac.in "
              linkedin="https://www.linkedin.com/in/kapil-kapse-410635215/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Yash Raut"
              pfp={yasrau}
              phone="tel:9834094712"
              mail="mailto:2020bme501@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/yash-raut-236766168"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Tanmay Deshmukh"
              pfp={tandes}
              phone="tel:9767097542"
              mail="mailto:2019bch007@sggs.ac.in"
              linkedin="www.linkedin.com/in/061200tanmaydeshmukh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Pooja Bhoskar"
              pfp={poobho}
              phone="tel:7666129545"
              mail="mailto:2020bit503@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/pooja-bhoskar/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Nitin Kode"
              pfp={nitkod}
              phone="tel:8605261826"
              mail="mailto:2019bec102@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/nitin-kode-81a1291ab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Om Futariya"
              pfp={omfuta}
              phone="tel:9359858126"
              mail="mailto:2019bcs008@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/om-futariya-060a95214"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Shivang Singh"
              pfp={shisin}
              phone="tel:7588915396"
              mail="mailto:2019bel027@sggs.ac.in"
              linkedin="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Ayush Rane"
              pfp={ayuran}
              phone="tel:7385570289"
              mail="mailto:2019bch152@sggs.ac.in"
              linkedin="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Vedant Totla"
              pfp={vedtot}
              phone="tel:9307863330"
              mail="mailto:2019bme068@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/vedant-kailashji-totla-a070b520b"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Sakshi Sabu"
              pfp={saksab}
              phone="tel:9403067337"
              mail="mailto:sabusakshi12@gmail.com"
              linkedin="https://www.linkedin.com/in/sakshi-sabu-79ba06194"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Hitesh Koli"
              pfp={hitkol}
              phone="tel:9075706930"
              mail="mailto:2019bin025@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/hitesh-koli-703834218"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Rushikesh Solanke"
              pfp={russol}
              phone="tel:8806890697"
              mail="mailto:2019bel035@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/rushikesh-solanke-9a243421b"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Akanksha Khandare"
              pfp={akakha}
              phone="tel:7219720955"
              mail="mailto:2019bme026@sggs.ac.in "
              linkedin="https://www.linkedin.com/in/akanksha-khandare-19265a213"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Rohit Garje"
              pfp={rohgar}
              phone="tel:9881051140"
              mail="mailto:2019bec055@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/rohit-garje-a72a48192"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Hemant Sajjan"
              pfp={hemsaj}
              phone="tel:8855831445"
              mail="mailto:2019bcs061@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/hemant-sajjan-1891341b1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Samradnyi Deshpande"
              pfp={samdes}
              phone="tel:9373661868"
              mail="mailto:2019bcs069@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/samradnyi-deshpande-339065205"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Pushkar Khawas"
              pfp={puskha}
              phone="tel:7768860281"
              mail="mailto:2019bpr035@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/pushkar-khawas-14a68a199/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              fullname="Shivani Sapkal"
              pfp={shisap}
              phone="tel:8999223205"
              mail="mailto:2019btt601@sggs.ac.in"
              linkedin="https://www.linkedin.com/in/shivani-sapkal-529b6b205"
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