import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Paint from '../Paint/Paint';
import Metalwork from '../Metalwork/Metalwork';
import Restoration from '../Restoration/Restoration';
import Sandblasting from '../Sandblasting/Sandblasting';
import Layout from '../Layout/Layout';

import './App.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Layout backgroundImage='/src/assets/images/welding-far.jpeg'>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/paint"
          element={
            <Layout backgroundImage='/src/assets/images/paint.jpg'>
              <Paint />
            </Layout>
          }
        />
        <Route
          path="/metalworks"
          element={
            <Layout backgroundImage='/src/assets/images/welding-close.jpg'>
              <Metalwork />
            </Layout>
          }
        />
        <Route
          path="/restoration"
          element={
            <Layout backgroundImage='/src/assets/images/gate.jpeg'>
              <Restoration />
            </Layout>
          }
        />
        <Route
          path="/sandblasting"
          element={
            <Layout backgroundImage='/src/assets/images/sandblasting.jpg'>
              <Sandblasting />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;