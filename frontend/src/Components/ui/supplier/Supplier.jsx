import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionWrapper from '../../global/SectionWrapper';


import img1 from '../../../assets/flag/CN@2x.png';
import img2 from '../../../assets/flag/FR@2x.png';
import img3 from '../../../assets/flag/GB@2x.png';
import img4 from '../../../assets/flag/US@2x.png';
import img5 from '../../../assets/flag/icon.png';
import img6 from '../../../assets/flag/item-country.png';

const SUPPLIER_DATA = [
  { id: 1, img: img1, url: 'shopname.ae', title:'Russia' },
  { id: 2, img: img2, url: 'shopname.ae', title:'Russia' },
  { id: 3, img: img3, url: 'shopname.ae', title:'Russia' },
  { id: 4, img: img4, url: 'shopname.ae', title:'Russia' },
  { id: 5, img: img5, url: 'shopname.ae', title:'Russia' },
  { id: 6, img: img6, url: 'shopname.ae', title:'Russia' },
  { id: 7, img: img1, url: 'shopname.ae', title:'Russia' },
  { id: 8, img: img1, url: 'shopname.ae', title:'Russia' },
  { id: 9, img: img1, url: 'shopname.ae', title:'Russia' },
  { id: 10, img: img1, url: 'shopname.ae', title:'Russia' },
];

const Supplier = () => {
  return (
    <SectionWrapper>
     
        <h4 className="fw-bold mb-4">Supplier by region</h4>
        
        <Row className="g-4 row-cols-2 row-cols-md-3 row-cols-lg-5">
          {SUPPLIER_DATA.map((item) => (
            <Col key={item.id} className="d-flex align-items-center gap-2 mb-3">
              <div 
                style={{ 
                  width: '28px', 
                  height: '20px', 
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.img}
                  alt="flag"
                  className="img-fluid " 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div className="text-truncate">
                 <p className="mb-0 text-dark fw-medium" style={{ fontSize: '14px' }}>
                  {item.title}
                </p>
                <p className="mb-0  fw-medium text-sm" style={{ fontSize: '14px' }}>
                  {item.url}
                </p>
              </div>
            </Col>
          ))}
        </Row>
     
    </SectionWrapper>
  );
};

export default Supplier;