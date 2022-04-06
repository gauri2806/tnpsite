import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import StLogin from './Components/StLogin';
import Placements from './Components/Placements/Placements';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stLogin" element={<StLogin />} />
        <Route path="/placements" element={<Placements />} />
      </Routes>
    </div>
  );
}
export default App;