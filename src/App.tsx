import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Footer from './components/Footer';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App: React.VFC = () => {
  return (
    <Router basename='/'>
      <Background />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element = {<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
