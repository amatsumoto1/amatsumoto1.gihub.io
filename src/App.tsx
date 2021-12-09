import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router basename='/'>
      <Background />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </Router>
  );
}

export default App;
