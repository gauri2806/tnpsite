import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Achievements from './Achievements';
import Counts from './Counts';
import Whyus from './Why-us';
import Departments from './Departments';
import Graph from './Graph';
import Alumni from './Alumni';
import Team from './Team';
import Footer from './Footer';
import Contact from './Contact';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Home () {
return (<>

<Navbar/>
<Hero/>
<main id="main">
  <Zoom><Achievements/></Zoom>
  <Fade bottom><Counts /></Fade>
  <Fade bottom><Whyus /></Fade>
  <Zoom><Departments /></Zoom>
  <Fade><Graph /></Fade>
  <Alumni />
  <Team />
  <Contact />
</main>
<Footer />

</>);
}