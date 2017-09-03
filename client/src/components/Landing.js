//The landing page
import React from 'react';
import tent from '../assets/tent-icon.png';

const Landing = () => {
  return (
    <div className="indigo darken-2 white-text full landing">
      <h1>Campr</h1>
      <img src={tent} alt="A tent. Not even a fancy one." />
      <p>E-mail feedback campaigns done right.</p>
    </div>
  );
};

export default Landing;
