import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Achievements from './Components/Achievements';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <main id="main">
        <Achievements/>
      </main>
    </div>
  );
}
export default App;