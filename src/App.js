import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import MainPage from './component/MainPage';
import About from './component/About';


import Footer from './component/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden" style={{ background: "#00040F" }}>
        <div className='px-[5%]'><Navbar /></div>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;