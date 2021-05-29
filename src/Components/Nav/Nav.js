import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg medium navbar-light bg-light navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/WellFind/"><img src="https://raw.githubusercontent.com/thelmaijemma/WellFind/master/src/logo/WellFindLogos/WellFind%20Transparent%20Cropped.png" className="logo" alt="WellFind Icon With Transparent Background"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/WellFind/">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#addlisting">Add A Listing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Resources</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="https://findappco.github.io/API/" target="_blank">FindAppCo Ecosystem <i className="fas fa-external-link-alt"></i></a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="https://findappco.github.io/API/#docs" target="_blank">Developers: Visit Our API <i className="fas fa-external-link-alt"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ) 
}

export default Nav