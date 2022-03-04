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

export default function Home () {
return (<>

<Navbar/>
<Hero/>
<main id="main">
  <Achievements/>
  <Counts/>
  <Whyus />
  <Departments />
  <Graph />
  <Alumni />
  <Team />
  <Counts />
</main>
<Footer />

</>);
}