import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="left">
        <h1><span className="highlight-yellow">Little Lemon</span></h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn-reserve">Reserve a Table</button>
      </div>
      <div className="right">
        <img 
          src="/images/bruschetta.svg" 
          alt="Bruschetta" 
          className="hero-image" 
        />
      </div>
    </div>
  );
}

export default CallToAction;
