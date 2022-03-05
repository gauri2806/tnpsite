import React from 'react';
import './Counts.css';
import { 
    Container,
    Row,
    Col,
    Stack,
} from 'react-bootstrap';
//import './scripts/purecounter';
import CountUp from 'react-countup';
export default function Counts(){
return (<>

<Container fluid id="counter">
    <Row>
        <Col>
            <Stack id="count-center">
                <CountUp className="counterNum" end={2000} duration={1.5} useEasing={true} />
                Successful Placements
            </Stack>
        </Col>
        <Col>
            <Stack id="count-center">
                <CountUp className="counterNum" end={50} duration={1.5} useEasing={true} />
                Companies
            </Stack>
        </Col>
        <Col>
            <Stack id="count-center">
                <CountUp className="counterNum" end={95} duration={1.5} useEasing={true} />
                Placement Percentage
            </Stack>
        </Col>
        <Col>
            <Stack id="count-center">
                <CountUp className="counterNum" end={99} duration={1.5} useEasing={true} />
                Satisfaction
            </Stack>
        </Col>
    </Row>
</Container>

{/* <section id="counts" className="counts section-bg">
    <div className="container">

        <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
                {/* <div className="counterNum" id="placementsCounter" maxcount="200">0</div> 
                <CountUp className="counterNum" end={2000} duration={1.5} useEasing={true} />
                <p>Successful Placements</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <CountUp className="counterNum" end={50} duration={1.5} useEasing={true} />
                <p>Companies</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <CountUp className="counterNum" end={95} duration={1.5} useEasing={true} />
                <p>Placement Percentage</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <CountUp className="counterNum" end={99} duration={1.5} useEasing={true} />
                <p>Satisfaction</p>
            </div>

        </div>

      </div>
    </section> */}
    </>);}