import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Home from '../Home/Home';

import './App.scss';

const App = () => {

  return (
      <div>
        <Navbar />
        <Header />
        <Home />
      </div>
  );
};

export default App;