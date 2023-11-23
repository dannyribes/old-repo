// src/App.js
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Add the imported icons to the library
library.add(faFacebook, faTwitter, faLinkedin, faInstagram);

function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <img src="https://example.com/your-logo.png" alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />
      <h1>Build Private Ethereum Networks</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <a href="#" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Who are we</a>
      <a href="#" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Privacy</a>
      <a href="#" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Terms and Conditions</a>

      {/* Social Network Icons */}
      <div className="social-icons" style={{ marginTop: '10px' }}>
        <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* Main Content Goes Here */}
      <Footer />
    </div>
  );
}

export default App;

