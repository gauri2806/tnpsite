import React from 'react';
import './Alumni.css';

import {
  Stack,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

import Person1 from '../img/person_1_sm.jpg';
import Person2 from '../img/person_2_sm.jpg';
import Person3 from '../img/person_3_sm.jpg';

export default function Alumni () {
return(<>

<div className="alumni-background">
  <Stack>
    <h1 className="alumni-main-text">Alumni Testimonial</h1>
    <p className="alumni-main-text"> This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
  </Stack>
  <div className="alumni-swiper">
    <Swiper
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="alumni-card">
          <Row>
            <Col md={4}>
              <Image src={Person1} roundedCircle fluid className="alumni-img" />
            </Col>
            <Col md={8}>
            <div className="alumni-text">
              <p>This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
            </div>
            </Col>
          </Row>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div className="alumni-swiper-mobile">
    <Swiper
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="alumni-card">
          <Image className="alumni-img-mobile" src={Person1} roundedCircle/>
          <div className="alumni-text">
          This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends.
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

{/* <div className="alumni-background">
  <div className="p-5 car-inner-container">
    <h1 className="text-center alumni-main-text">Alumni Testimonial</h1>
    <p className="text-center alumni-main-text"> This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
  </div>
  <div className="alumni-swiper">
    <Swiper
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{
        clickable: false,
      }}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="card mb-3 alumni-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img alumni-img" src={Person1} />
            </div>
            <div className="col-md-8 alumni-text">
            This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. 
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card mb-3 alumni-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img alumni-img" src={Person2} />
            </div>
            <div className="col-md-8 alumni-text">
            This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. 
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card mb-3 alumni-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img alumni-img" src={Person3} />
            </div>
            <div className="col-md-8 alumni-text">
            This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. 
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div> */}


</>);
}