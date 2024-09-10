import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Paint from '../Paint/Paint';
import Metalwork from '../Metalwork/Metalwork';
import Restoration from '../Restoration/Restoration';
import Fabrication from '../Fabrication/Fabrication';
import Roofing from '../Roofing/Roofing';
import Terms from '../Terms/Terms';
import Privacy from '../Privacy/Privacy';
import Cookies from '../Cookies/Cookies';


import './App.scss';


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/paint" element={<Paint />}/>
        <Route path="/metalworks" element={<Metalwork />}/>
        <Route path="/restoration" element={<Restoration />}/>
        <Route path="/fabrication" element={<Fabrication />}/>
        <Route path="/roofing" element={<Roofing />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/cookies" element={<Cookies />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;