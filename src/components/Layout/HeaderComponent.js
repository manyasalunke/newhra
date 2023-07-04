import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from './Logo.png';

const HeaderComponent = () => {
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
    // Perform any additional login actions here
  };

  

  return (
    <div>
      <header style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999' }}>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <div className="header-left">
              <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                  <Link to="/" className="navbar-brand">
                    <img src={myLogo} alt="Logo" height="40"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/attendance-form" className="nav-link">Attendance</Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              {!loginClicked && (
                <Link to="/login" className="btn btn-light bg-success bg-gradient ml-6" onClick={handleLoginClick}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
