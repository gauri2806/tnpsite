import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import StLogin from './Components/StLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stLogin" element={<StLogin />} />
      </Routes>
    </div>
  );
}
export default App;