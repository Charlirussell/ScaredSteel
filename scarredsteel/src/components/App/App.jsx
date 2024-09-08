import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Paint from '../Paint/Paint';
import Metalwork from '../Metalwork/Metalwork';
import Restoration from '../Restoration/Restoration';
import Fabrication from '../Fabrication/Fabrication';
import Roofing from '../Roofing/Roofing';


import './App.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/paint" element={<Paint />}/>
        <Route path="/metalworks" element={<Metalwork />}/>
        <Route path="/restoration" element={<Restoration />}/>
        <Route path="/fabrication" element={<Fabrication />}/>
        <Route path="/roofing" element={<Roofing />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;