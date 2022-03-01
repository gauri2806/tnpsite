import React from 'react';
import './Why-us.css';
import './scripts/popup';

export default function Whyus() {
    return (<>

<section id="why-us" class="why-us">
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
</section>

    </>);
}