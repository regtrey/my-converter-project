import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Converter from './container/Converter';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Converter />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
