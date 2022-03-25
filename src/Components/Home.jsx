import React from 'react';
import Social from './Social';
import Navbar from './Navbar';
import Hero from './Hero';
import Achievements from './Achievements';
import Counts from './Counts';
import Whyus from './Why-us';
import Departments from './Departments';
import Director from './Director';
import Graph from './Graph';
import Charts from './Charts';
import Recruiters from './Recruiters';
import Alumni from './Alumni';
import Team from './Team';
import Footer from './Footer';
import Contact from './Contact';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Home () {
return (<>

<Social />
<Navbar/>
<Hero/>
<main id="main">
  <Zoom><Achievements/></Zoom>
  <Fade bottom><Counts /></Fade>
  <Fade bottom><Whyus /></Fade>
  <Zoom><Departments /></Zoom>
  <Zoom><Director /></Zoom>
  <Fade><Graph /></Fade>
  {/* <Charts /> */}
  <Fade bottom><Recruiters /></Fade>
  <Alumni />
  <Team />
  <Fade><Contact /></Fade>
</main>
<Footer />

</>);
}