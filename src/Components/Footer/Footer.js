import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><img class="footer-logo" src="logo\WellFindLogos\WF Transparent Dark.png"/></li>
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Add A Listing</a></li>
    <li className="breadcrumb-item active">LinkedIn <i className="fas fa-external-link-alt"></i></li>
  </ol>
</footer>
    )
}

export default Footer