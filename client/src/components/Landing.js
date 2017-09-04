//The landing page
import React from 'react';
import tent from '../assets/tent-icon.png';

const Landing = () => {
  return (
    <div className="indigo darken-2 white-text full landing">
      <h1>Campr</h1>
      <img src={tent} alt="A tent. Not even a fancy one." />
      <h5>E-mail feedback campaigns done right.</h5>
    </div>
  );
};

export default Landing;
