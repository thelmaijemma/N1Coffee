import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="card" id="about">
  <div className="card-body about">
    <h4><img className="about-img" src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/WellFind%20Transparent%20Cropped.png"/></h4>
    <h4 className="card-title super-large"> About</h4>
    <h6 className="card-subtitle mb-2 large about-line text-muted">It's not easy finding the nearest <i>Zero-Waste</i> store, or a quick <i>Keto</i> snack. We're here to help. </h6>
    <p className="card-text description"> Currently available to Greater Munich,
      WellFind catalogues wellness listings and makes them searchable by community-generated hashtags.</p>
    <p className="card-link text-muted">Since: 2023</p>
    <br/>
  </div>
</div>
    ) 
}

export default About