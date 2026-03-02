import React from 'react'
import { Sale } from '../../../data/Sale'
import { Card, Row, Col } from 'react-bootstrap'

const Aside = () => {
    return (
        <div className="bg-white p-3 border rounded shadow-sm d-none d-lg-block">
            <h5 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>You may like</h5>
            
            {Sale.slice(0, 5).map((item, idx) => (
                <div key={idx} className="mb-3">
                    <Row className="g-0 align-items-center">
                        {/* Image Column: Fixed small square */}
                        <Col xs={4}>
                            <div className="border rounded p-1 text-center bg-light" style={{ height: '80px', width: '80px' }}>
                                <img 
                                    src={item.img} 
                                    alt={item.title}
                                    className="img-fluid" 
                                    style={{ height: '100%', objectFit: 'contain' }} 
                                />
                            </div>
                        </Col>

                        <Col xs={8} className="ps-3">
                            <h6 className="mb-1 text-truncate-2" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>
                                {item.title}
                            </h6>
                            <span className="text-muted small">
                                {item.price}
                            </span>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default Aside