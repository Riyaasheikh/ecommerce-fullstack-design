import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Container } from "react-bootstrap";
import SectionWrapper from "../../global/SectionWrapper";
import img from '../../../assets/img/inquiry/image 102.png';

const Inquiry = () => {
  const heroStyle = {
    background: `linear-gradient(90deg, rgba(44, 124, 241, 0.9) 0%, rgba(0, 209, 255, 0.6) 100%), url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '6px',
    padding: '30px', 
    minHeight: '180px', // Smaller for mobile
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <SectionWrapper className="my-4">
      <div style={heroStyle} className="shadow-sm">
        <Row className="w-100 align-items-center">
          <Col xs={12} lg={7} className="text-white">
            <h4 className="fw-bold mb-3" style={{ maxWidth: '300px' }}>
              An easy way to send requests to all suppliers
            </h4>
            <p className="d-none d-lg-block" style={{ maxWidth: '400px', opacity: 0.9 }}>
              Streamline your procurement process. Fill out the form and receive 
              quotes from verified suppliers within 24 hours.
            </p>
            <Button variant="primary" className="d-lg-none mt-2 px-4 shadow-sm fw-bold">
               Send inquiry
            </Button>
          </Col>

          <Col lg={5} className="d-none d-lg-block">
            <Card className="p-3 border-0 shadow-sm rounded-3">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Send quote to suppliers</Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="What item do you need?" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={2} placeholder="Type more details" />
                  </Form.Group>
                  <div className="d-flex gap-2 mb-3">
                    <Form.Control type="number" placeholder="Qty" style={{ width: '120px' }} required />
                    <Form.Select style={{ width: '110px' }}>
                      <option value="Pcs">Pcs</option>
                      <option value="Kg">Kg</option>
                    </Form.Select>
                  </div>
                  <Button variant="primary" type="submit" className="w-100 fw-bold border-0" style={{ backgroundColor: '#127fff' }}>
                    Send inquiry
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </SectionWrapper>
  );
};

export default Inquiry;