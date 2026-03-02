import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { RiInboxLine, RiSearchLine, RiSendPlane2Fill, RiShieldFill } from '@remixicon/react';
import SectionWrapper from '../../global/SectionWrapper';
import img1 from '../../../assets/img/services/image 108.png';
import img2 from '../../../assets/img/services/image 104.png';
import img3 from '../../../assets/img/services/image 106.png';
import img4 from '../../../assets/img/services/image 107.png';

const Services = () => {
  const serviceData = [
    {
      img: img1,
      description: 'Source your products with deep market research.',
      icon: <RiSearchLine size={20} />
    },
    {
      img: img2,
      description: 'Manage your inventory with integrated tools.',
      icon: <RiInboxLine size={20} />
    },
    {
      img: img3,
      description: 'Fast and reliable shipping to your doorstep.',
      icon: <RiSendPlane2Fill size={20} />
    },
    {
      img: img4,
      description: 'Secure payments and trade assurance.',
      icon: <RiShieldFill size={20} />
    },
  ];

  return (
    <SectionWrapper>
      
        <h4 className="fw-bold mb-3">Our extra services</h4>
        
        {/* Using row-cols for automatic 4-column layout on desktop */}
        <Row className="g-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4">
          {serviceData.map((service, index) => (
            <Col key={index}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden position-relative">
                {/* Image Section */}
                <div style={{ height: '130px', backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={service.img}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                  />
                </div>

                <div 
                  className="position-absolute border border-2 border-white rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ 
                    width: '45px', 
                    height: '45px', 
                    top: '110px', 
                    right: '20px',
                    zIndex: 2,
                    backgroundColor:'#D1E7FF', 
                  }}
                >
                  {service.icon}
                </div>

                <Card.Body className="pt-4 pb-3">
                  <Card.Text className="text-dark fw-medium pe-4">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     
    </SectionWrapper>
  );
};

export default Services;