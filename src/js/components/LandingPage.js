import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import QuickSearch from './QuickSearch';

const rootClassName="landingPage"

const LandingPage = () =>  {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__heroImage`}></div>
      <div className={`${rootClassName}__content`}>
        <Header />
        <About />
        <QuickSearch />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
