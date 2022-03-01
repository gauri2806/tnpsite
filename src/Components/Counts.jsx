import React from 'react';
import './Counts.css';
import './scripts/purecounter';
export default function Counts(){
return (<>
<section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
                <div className="counterNum" id="placementsCounter" maxcount="200">0</div>
                <p>Successful Placements</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <div className="counterNum" id="companiesCounter" maxcount="30">0</div>
                <p>Companies</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <div className="counterNum" id="ppCounter" maxcount="99">0</div>
                <p>Placement Percentage</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <div className="counterNum" id="satisfactionCounter" maxcount="100">0</div>
                <p>Satisfaction</p>
            </div>

        </div>

      </div>
    </section>
    </>);}