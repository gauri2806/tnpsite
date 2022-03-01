import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Achievements from './Components/Achievements';
import Counts from './Components/Counts';
import Whyus from './Components/Why-us';
import Departments from './Components/Departments';
import Graph from './Components/Graph';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <main id="main">
        <Achievements/>
        <Counts/>
        <Whyus />
        <Departments />
        <Graph />
      </main>
    </div>
  );
}
export default App;