import React from 'react';
import Nav from '../Nav';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Footer from '../Footer';

function Homepage() {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay/>
      <Footer/>
    </>
  );
}

export default Homepage;
