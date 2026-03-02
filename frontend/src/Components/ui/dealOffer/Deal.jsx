import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Sale } from '../../../data/Sale'; 
import SectionWrapper from "../../global/SectionWrapper";
import Time from "../time/Time";

const Deal = () => {
  return (
    <SectionWrapper>
      <Card className="mb-3 border-0 shadow-sm overflow-hidden">
        <Row className="mx-0">
          <Col lg={3} xs={12} className="border-bottom border-lg-end border-lg-bottom-0 px-3 px-lg-4 py-3 bg-white">
            <div className="d-flex d-lg-block justify-content-between align-items-center">
              <div className="text-start">
                <h4 className="mb-0 mb-lg-1" style={{ fontWeight: "600", fontSize: "18px" }}>Deals and offers</h4>
                <p className="mb-0 mb-lg-4 text-muted" style={{ fontSize: "14px" }}>Electronic equipments</p>
              </div>
              <div className="mt-lg-2">
                <Time />
              </div>
            </div>
          </Col>

          <Col lg={9} xs={12} className="p-0">
            <div className="d-flex overflow-auto no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
              {Sale.map((item, index) => (
                <div 
                  key={index} 
                  className="border-end p-3 text-center flex-shrink-0"
                  style={{ width: '140px', flex: '0 0 auto' }} 
                >
                  <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: '100px' }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="img-fluid"
                      style={{ maxHeight: '80px', objectFit: 'contain' }} 
                    />
                  </div>
                  <p className="text-truncate mb-1" style={{ fontSize: '13px' }}>{item.title}</p>
                  <span className="badge rounded-pill bg-danger-subtle text-danger px-2 py-1" style={{ fontSize: '11px' }}>
                    -{item.price}%
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Card>
    </SectionWrapper>
  );
};

export default Deal;