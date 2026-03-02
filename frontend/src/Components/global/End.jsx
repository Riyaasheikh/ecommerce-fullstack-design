import React from 'react';
import { Dropdown, Container, Nav } from 'react-bootstrap';
import flag from '../../assets/flag/US@2x.png';

const End = () => {
  return (
    <footer className="w-100" style={{ backgroundColor: '#F7F7F7', borderTop: '1px solid #E0E0E0' }}>
      <Container className="py-3">
        <div className="d-flex justify-content-between align-items-center">

          <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
          </p>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <img 
                src={flag} 
                alt="USA Flag" 
                style={{ width: '22px', height: '15px', objectFit: 'cover' }} 
              />
              <Dropdown>
                <Dropdown.Toggle 
                  variant="link" 
                  className="p-0 text-decoration-none text-dark fw-medium shadow-none"
                  style={{ fontSize: '14px' }}
                >
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.Item>Germany</Dropdown.Item>
                  <Dropdown.Item>Italy</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            
           
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default End;