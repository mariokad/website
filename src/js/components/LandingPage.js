import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import QuickSearch from './QuickSearch';

const LandingPage = () =>  {
  return (
    <div>
      <Header />
      <About />
      <QuickSearch />
      <Footer />
    </div>
  );
};

export default LandingPage;
