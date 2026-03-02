import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/brand/logo-symbol.svg';
import icons from '../../assets/icon/Group 987.png';
import button1 from '../../assets/misc/market-button.svg';
import button2 from '../../assets/misc/button 2.svg';
import SectionWrapper from './SectionWrapper';

const Footer = () => {
  const brandBlue = "#8CB7F5";
  
  const fontStyle = {
    color: '#8B96A5',
    fontWeight: 400,
    fontSize: '16px',
    letterSpacing: '-0.2px',
    lineHeight: '24px',
    fontStyle:'Inter'
};

const headerStyle = {
      fontStyle:'Inter',
    fontWeight: 500,
    fontSize: '16px',
    marginBottom: '15px',
    color: '#1C1C1C',
    textAlign:'left'
  };

  return (

    
    <SectionWrapper>

  
    <footer className="bg-white py-5 border-top">
      <Container fluid className="px-1"> 
        <Row className="justify-content-between mx-0"> 

          <Col lg={3} md={12} className="ps-1">
            <Navbar.Brand className="d-flex align-items-center mb-2 p-0">
              <img src={logo} alt="Logo" className="me-2" style={{ display: 'block' }} />
              <span style={{ color: brandBlue, fontWeight: 'bold', fontSize: '20px' }}>
                Brand
              </span>
            </Navbar.Brand>
            <p style={{ ...fontStyle, maxWidth: '260px' }} className="mb-3">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div>
              <img src={icons} alt="Social Media" />
            </div>
          </Col>

          <Col lg="auto" sm={6} xs={12}>
            <div style={headerStyle}>About</div>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>About us</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Find Store</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Categories</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Blogs</Nav.Link>
            </Nav>
          </Col>

          <Col lg="auto" sm={6} xs={12}>
            <div style={headerStyle}>Partnership</div>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>About us</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Find Store</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Categories</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Blogs</Nav.Link>
            </Nav>
          </Col>

          <Col lg="auto" sm={6} xs={12}>
            <div style={headerStyle}>Information</div>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Help Center</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Money Refund</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Shipping</Nav.Link>
              <Nav.Link href="#" className="p-0 mb-1" style={fontStyle}>Contact us</Nav.Link>
            </Nav>
          </Col>

          <Col lg="auto" md={12} className="pe-0  text-lg-end">
            <div style={headerStyle} >Get Apps</div>
            <div className="d-flex flex-column align-items-lg-end gap-2">
              <a href="#" className="p-0">
                <img src={button1} alt="Market Button" style={{ width: '124px' }} />
              </a>
              <a href="#" className="p-0">
                <img src={button2} alt="App Store" style={{ width: '124px' }} />
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
      </SectionWrapper>
  );
};

export default Footer;