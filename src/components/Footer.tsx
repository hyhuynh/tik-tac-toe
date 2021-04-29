import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './styles/layout/Footer.css';

const FooterPage = () => {
  return (
    
      <div className="footer">
        <p className="copyright">&copy; {new Date().getFullYear()} Copyright: <a href="https://ponnyhubby.com"> Tik-tak-toe </a></p>
          
      </div>
  );
}

export default FooterPage;
