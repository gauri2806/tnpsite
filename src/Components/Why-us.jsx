import React from 'react';
import './Why-us.css';
import Popup from 'reactjs-popup';

import {
  Container,
  Row,
  Col,
  Stack,
  Button,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAward,
  faLaptopCode,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';

export default function Whyus() {
  return (<>

    <div className="wu-container" id="whyus">
      <Container fluid>
        <Row>
          <Col className="wu-main-details" lg={4}>
            <h3>Why SGGSIE&T?</h3>
            <div className="scrollable">
            <p>The answer to this question, "Where can we get the academic achievements that will benefit us for the upcoming future?" is SGGSIE&T. " Apart from being one of the best Technical Institute in MARATHWADA and one of only a few in the MAHARASHTRA, SGGSIE&T creates experiences that students cherish for their lifetime. If you are passionate about your interests and want to be part of a peer group that too are enthusiasts, the institute will embrace you with its electrifying aura and with its time old wisdom. In the institute, students usually find extracurricular activities that they are passionate about. Whether the passion is with core branches or another non-academic curriculum, the Institute is home to all of them. The distinguished and renowned faculty at SGGSIE&T is among one the best in MAHARASHTRA's vocational institutes. The majority of the faculty members are high achievers in their own right, as well as excellent teachers and mentors. "Most of our professors are research scholars themselves and are deeply involved in their subjects of interest," one student says.</p>
            <p>It is our professors' attitude that characterizes them and makes them alluring to our students. Our students need to have professors who think in this way if they are to get their answers and take their involvement in their courses to the next level." The institute not only has a bright set of students at all times, but it also has one of the strongest and most loyal alumni networks, SGGSIE&T alumni regularly contribute to enriching its experience. One of the most surprising reasons that students choose to be a part of SGGSIE&T is that most people would not expect it. While the academic curriculum is an important part of the SGGSIE&T experience, the institute also provides several extracurricular activities in which SGGSIE&T students are encouraged to participate. This ensures that students receive a well-rounded education that is not limited to academic achievements alone. "We are proud to be a part of an institute that promotes a strong curriculum with a strong interest in participation outside of the classroom," says one SGGSIE&T student.</p>
            <p>SGGSIE&T is a place that believes in the entrepreneurship philosophy as well. Many SGGSIE&T students devote a significant amount of time to their projects, which they eventually turn into full-fledged businesses as soon as they graduate from SGGSIE&T. TRAINING AND PLACEMENT CELL (T&P) is housed at the institute, and it encourages students to think for themselves. The research and incubation of technological ideas that can be translated into entrepreneurial ventures are supported by society. As a result, the institute provides a conducive environment for new ideas to be generated, researched, and nurtured before they become industry-ready. Other attractions include a green campus that is a welcome change from the concrete jungle that is the rest of NANDED and one of the best college festivals in NANDED, Mood Indigo, which ensures that there is never a dull moment in the lives of SGGSIE&T students.SGGSIET has bagged 4th Rank in India, and 2nd in the state in ARIIA 2020 rankings among Govt. and Govt. aided Colleges/Institutes category. SGGSIE&T is ranked 89th amongst the top 100 engineering Institutes in the country by NIRF. Studying at SGGSIE&T can be a truly transformative experience.</p>
            </div>
          </Col>
          <Col>
            <Container lg={8}>
              <Row>
                <Col xl={4}>
                  <div className="wu-popup-card">
                    <Stack>
                      <FontAwesomeIcon className="card-icon" icon={faAward} size="2x" color="#0d6efd" />
                      <h5 className="card-head">Our Standings</h5>
                      <p className="card-text">Through the survey conducted in 2004, constituted by the Government of Maharashtra and...</p>
                      <Popup trigger={<Button className="card-button">Read More</Button>} modal nested>
                        {close => (
                          <Container className="popup-main">
                            <h2 className="popup-head">
                              <FontAwesomeIcon icon={faAward} />
                              &nbsp;Standings
                            </h2>
                            <hr />
                            <div className="scrollable">
                              <ul>
                                <li>Through the survey conducted in 2004, constituted by the Government of Maharashtra and headed by Dr F. C. Kohli, Chairman, TCS, SGGSIE&T, Nanded is identified as an Institute which can be raised to the level of Center of Excellence along with three other well-established organizations.</li>
                                <li>Recently the institute has signed MoUs for academic collaboration with Foreign Universities like CUNY CREST and Civil Engineering Department, The City University of New York, USA, Oakland University Michigan, USA, SAI Technologies, USA and Universiti Teknologi Petronas, Malaysia.</li>
                                <li>Institute has an excellent track record of publications with recent statistics as 1200+ peer-reviewed publications, 8000+ research citations, 25 patents filed and two awarded.</li>
                                <li>Institute hosted three prestigious international conferences last year in collaboration with national and international premier institutes.</li>
                                <li>Students at SGGS bagged AIR-1 three times and several students in the top 100 in the GATE examination every year.</li>
                                <li>Students bagged First prize in Smart India Hackathon 2017 to Team: Alphas for a solution to the problem statement of the Department of Biotechnology, Government of India. Another Team “continuum” was one among the first ten teams in the Smart India Hackathon for the Problem statement of the Department of Rural Development, Government of India. This year (2019) the vehicle secured third prize in the Baja Competition, first prize in one of the Smart India Hackathons.</li>
                                <li>Institute boasts of having 25+ Placement MNC partners.</li>
                                <li>Recently, Alumni Meets were organized Abroad: the USA Meets 2015 at New Jersy and San Jose, Gulf Meet 2016 at Dubai, USA Meets 2016 at New Jersy, San Jose and Atlanta.</li>
                                <li>The Institute library has a stock of more than 56000 books and 4000 bound volumes of national and international journals. Institute currently subscribes to 72 National and 59 International journals annually.</li>
                              </ul>
                            </div>
                            <Button className="popup-closebtn" onClick={close}>X</Button>
                          </Container>
                        )}
                      </Popup>
                    </Stack>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="wu-popup-card">
                    <Stack>
                      <FontAwesomeIcon className="card-icon" icon={faLaptopCode} size="2x" color="#0d6efd" />
                      <h5 className="card-head">Tech Skills</h5>
                      <p className="card-text">The institute has established AICTE-IDEA Lab, Center of Excellence-, Mentor Graphics Lab...</p>
                      <Popup trigger={<Button className="card-button">Read More</Button>} modal nested>
                        {close => (
                          <Container className="popup-main">
                            <h2 className="popup-head">
                              <FontAwesomeIcon icon={faLaptopCode} />
                              &nbsp;Tech Skills
                            </h2>
                            <hr />
                            <div className="scrollable">
                            <p>The institute has established AICTE-IDEA Lab, Center of Excellence-, Mentor Graphics Lab, Media Language LAB, Emerson-Pass Lab, Emerson & Hausers Laboratory, TEQIP, SGGS-SAI CRD In the CSE department. The Institute has also entrenched industry-supported laboratories like the E-PASS laboratory sponsored by Emerson Automation Solution, Mumbai. Center for VLSI Design and Verification by Mentor Graphics, USA and NVIDIA GPU Education Center, Pune giving a fillip to the research and skill development activities. The research culture of the institute has been proven through publication in peer-reviewed journals and reputed international conferences.</p>
                            <p>The AICTE-IDEA Lab encourages students to apply science technology engineering and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing and even product visualization. TIEC – Technology Innovation and Entrepreneurship Cell identifies entrepreneurial traits in the students and builds their capacity for entrepreneurship and encourages technology start-ups on the campus. SGGS-SAI CRD provides workflow security in all cloud topologies and delivers DATA/VIDEO security for all cloud communications solutions. 
The Center of Excellence engages in an ambitious plan for generating high calibre manpower and entrepreneurs in the field of Signal and Image Processing. Research at Computer Science Department aims to develop innovative solutions to the world’s most frightening challenges from addressing the energy needs of tomorrow to cancer detection and classification, Other Modern laboratories include the Data Analytics Lab, Computer Network & Security Lab, Database System Lab to serve the teaching and research needs of the students and faculty. The Electronics and Telecommunication Department has strong research groups in digital signal and image processing, speech processing, computer vision, pattern recognition, VLSI Design and Embedded Systems.</p>
                            </div>
                            <Button className="popup-closebtn" onClick={close}>X</Button>
                          </Container>
                        )}
                      </Popup>
                    </Stack>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="wu-popup-card">
                    <Stack>
                      <FontAwesomeIcon className="card-icon" icon={faBalanceScale} size="2x" color="#0d6efd" />
                      <h5 className="card-head">Overall Development</h5>
                      <p className="card-text">An individual's abilities, intelligence, and wisdom get reflected in his or her personality. We provide...</p> 
                      <Popup trigger={<Button className="card-button">Read More</Button>} modal nested>
                        {close => (
                          <Container className="popup-main">
                            <h2 className="popup-head">
                              <FontAwesomeIcon icon={faBalanceScale} />
                              &nbsp;Overall Development
                            </h2>
                            <hr />
                            <div className="scrollable">
                              <p>An individual's abilities, intelligence, and wisdom get reflected in his or her personality. We provide several options for an individual's multi-dimensional development.</p>
                              <p>SGGSIE&T Nanded promotes various kinds of student activities managed by students which range from inter-departmental competitions, and festivals conducted at the national level to managing facilities like messing and hostel infrastructure. These activities provide multiple platforms for students to improve their soft skills, which are crucial for one to excel in his/ her workspace. Besides, the campus is engaged with activities of various student clubs and organizations.</p>
                              <h5>TnP-Cell</h5>
                              <p>The Training and Placement Cell at SGGSIE&T Nanded is a student organization with the vision to provide students with a platform for using their technical perception to gain valuable experience by working in the mainstream industry. It also acts as a confluence for Companies seeking young talent in various disciplines.</p>
                              <h5>Clubs</h5>
                              <p>For the special interests of students, there are various clubs like RNXG (Robotics for next generation), Phoenix, Avaroh, Bhaskaracharya Mathematics club, Voice club, Sankalp, Chitraksh, and Gandharva Drama Club. These clubs act as a platform to bring together students possessing similar talents and interests and through well-organized activities may develop into better artists.</p>
                              <h5>Departmental Activities</h5>
                              <p>Various workshops, conferences, and discussions are held by students in their department to promote student-faculty engagement and provide a forum for students to strengthen their inventive abilities in their fields of interest. To carry out these academic and non-academic activities, the department has its student association.</p>
                              <h5>Cultural Activities</h5>
                              <p>Performing Arts Festivals, Inter-departmental competitions, professional performances, concerts by renowned artists, exhibitions, talent shows, seminars, and much more abound at the institute throughout the year. Utsav is an annual cultural celebration where all students gather together to put on a large-scale display. It is a celebration of all forms of cultural expression, including drama, fine arts, music, dance, and literature, and it is an event that everyone in the community looks forward to.</p>
                              <h5>Sports Activities</h5>
                              <p>To live a better lifestyle while coping with the high demands of the academic environment, one must be healthy both emotionally and physically. As part of this, SGGSIE&T Nanded places a strong emphasis on sports and considers them to be an important part of the curriculum. SGGSIE&T Nanded features a multitude of physical education and sports activity centres that help students maintain their physical health and create a competitive attitude. It has a large number of outdoor playgrounds and indoor tennis courts. We have ZENITH, which is a state-level inter-college sports event organized by SGGSIE&T students to promote sportsmanship.</p>
                              <h5>Other Activities</h5>
                              <p>Apart from the above-mentioned activities, there are groups such as Study Abroad Chapter, Drishti, UPSC Chapter, NSS (National Service Scheme), and others that strive to raise a collective consciousness in the student community and encourage activities aimed at social welfare and that to result in personal growth. They are a collection of activities that include a variety of teaching and vocational training programs as well as the development of technical solutions to rural issues.</p>
                            </div>
                            <Button className="popup-closebtn" onClick={close}>X</Button>
                          </Container>
                        )}
                      </Popup>
                    </Stack>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
    
    {/* <section id="why-us" class="why-us">
    <div class="container" data-aos="fade-up">
        <div class="row">
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="content">
                    <h3>Why SGGSIE&T ?</h3>
                    <p>
                        Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET) is technical college in Nanded, Maharashtra, India. The institute was accorded full autonomous status in June 2004. It offers training in ten undergraduate and ten postgraduate programs in various fields of technical education, research and technology transfer. It also offers a PhD programs under its affiliating university, Swami Ramanand Teerth Marathwada University and under Quality Improvement Programme of Ministry of Education, Government of India, New Delhi.[citation needed]
                    </p>
                </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                    <div class="row">
                        <div class="col-xl-4 d-flex align-items-stretch popup-open" data-modal="popup1">
                            <div class="icon-box mt-4 mt-xl-0">
                                <i class="fas fa-award"></i>
                                <h4>Standings</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                <button class="btn btn-primary popup-open" type="submit">Read More</button>
                            </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch popup-open" data-modal="popup2">
                            <div class="icon-box mt-4 mt-xl-0">
                                <i class="fas fa-laptop-code"></i>
                                <h4>Tech Skills</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                <button class="btn btn-primary popup-open" type="submit">Read More</button>
                            </div>
                        </div>
                        <div class="col-xl-4 d-flex align-items-stretch popup-open" data-modal="popup3">
                            <div class="icon-box mt-4 mt-xl-0">
                                <i class="fas fa-balance-scale"></i>
                                <h4>Overall Development</h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                <button class="btn btn-primary popup-open" type="submit">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup" id="popup1">
        <div class="popup-content">
            <div class="popup-header">
                <i class="material-icons popup-close-btn">close</i>
                <div class="popup-name"><i class="fas fa-award"></i>
                    <span>Standings</span>
                </div>
            </div>
            <div class="popup-body">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes.  More...
            </div>
        </div>
    </div>
    <div class="popup" id="popup2">
        <div class="popup-content">
            <div class="popup-header">
                <i class="material-icons popup-close-btn">close</i>
            </div>
            <div class="popup-name"><i class="fas fa-laptop-code"></i>
                <span>Tech Skills</span>
            </div>
            <div class="popup-body">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes.  More...
            </div>
        </div>
    </div>
    <div class="popup" id="popup3">
        <div class="popup-content">
            <div class="popup-header">
                <i class="material-icons popup-close-btn">close</i>
            </div>
            <div class="popup-name"><i class="fas fa-balance-scale"></i>
                <span>Overall Development</span>
            </div>
            <div class="popup-body">I welcome you to Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded. This is one of the prestigious institutes in the state of Maharashtra. This institute provides you the opportunities to empower you with the present technologies. The faculty in the institute is ever enthusiastic to familiarize the students in future technology trends. You are encouraged to harness your inquisitive skills with proactive learning. The purpose of education is to transform proactive learners into self-actualized learners and our experience confirms us that every self-actualized learner flourishes.  More...
            </div>
        </div>
    </div>
</section> */}

  </>);
}