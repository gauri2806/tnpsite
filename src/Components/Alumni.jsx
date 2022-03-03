import React from 'react';
import './Alumni.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper';
import Person1 from '../img/person_1_sm.jpg';
import Person2 from '../img/person_2_sm.jpg';
import Person3 from '../img/person_3_sm.jpg';

export default function Alumni () {
return(<>

<div className="alumni-background">
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
</div>

{/* <div class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <div class="car-inner-container">
        <div class="alumni-heading">
          <h1>Alumni Testimonial</h1>
          <p> This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
        </div>

        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="img-text">

              <div class="alumni-img">
                <img src={Person1} alt="p1" />
              </div>
              <div class="alumni-text">
                <p>This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="img-text">

              <div class="alumni-img">
                <img src={Person2} alt="p2" />
              </div>
              <div class="alumni-text">
                <p>This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
              </div>

            </div>
          </div>
          <div class="carousel-item">
            <div class="img-text">
              <div class="alumni-img">
                <img src={Person3} alt="p3" />
              </div>
              <div class="alumni-text">
                <p>This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. </p>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carousel1ExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel1ExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>

      </div>
    </div> */}

</>);
}