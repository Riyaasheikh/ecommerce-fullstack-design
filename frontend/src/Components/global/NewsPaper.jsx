import React from 'react';
import { Button, Form, InputGroup, Container } from 'react-bootstrap';
import icon from '../../assets/icon/Vector.png';

const Newspaper = () => {
  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '-0.2px',
    color: '#1C1C1C',
  };

  const subtitleStyle = {
    color: '#606060',
    fontSize: '16px',
    marginBottom: '24px',
  };

  return (
    <section style={{ backgroundColor: '#EFF2F4', padding: '40px 0' }}>
      <Container className="text-center">
        <h2 style={titleStyle}>Subscribe to our newsletter</h2>
        <p style={subtitleStyle}>
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        <Form className="d-flex justify-content-center">
          <InputGroup style={{ maxWidth: '388px', width: '100%' }}>
            <div style={{ position: 'relative', flex: '1' }}>
              <img
                src={icon}
                alt="mail-icon"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 5,
                  width: '18px',
                  opacity: 0.6
                }}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  paddingLeft: '40px', 
                  height: '40px',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }}
              />
            </div>
            
            <Button 
              variant="primary" 
              style={{ 
                padding: '0 24px',
                height: '40px',
                fontWeight: 500 
              }}
            >
              Subscribe
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </section>
  );
};

export default Newspaper;