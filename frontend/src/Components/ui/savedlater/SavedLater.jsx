import React from 'react';
import { Button, Col, Row, Card } from 'react-bootstrap';
import SectionWrapper from '../../global/SectionWrapper';
import { ProductData } from '../../../data/Content';
import { useCart } from '../../../context/CartContext'; 

const SavedLater = () => {
    const { addToCart, removeFromCart } = useCart(); 
    
    const SavedItems = ProductData.filter(item => item.id > 11 && item.id <= 15);

    const handleMoveToCart = (item) => {
        addToCart(item); 
    };

    return (
        <SectionWrapper>
            <div className="bg-white border-top border-bottom p-3 mt-4">
                <h5 className="fw-bold mb-4">Saved for later</h5>
                <Row className="g-3">
                    {SavedItems.map((item) => (
                        <Col key={item.id} lg={3} md={4} xs={12}>
                            <Card className="p-3 border rounded shadow-sm h-100">
                                <div className="d-flex d-md-block align-items-center gap-3">
                            
                                    <div 
                                        className="rounded d-flex align-items-center justify-content-center flex-shrink-0" 
                                        style={{ backgroundColor: '#F7F7F7', width: '110px', height: '110px' }}
                                    >
                                        <img 
                                            src={item.img} 
                                            alt={item.title}
                                            className="img-fluid" 
                                            style={{ maxHeight: '90px', objectFit: 'contain' }} 
                                        />
                                    </div>

                                    <div className="flex-grow-1 mt-md-3">
                                        <h6 
                                            className="text-dark mb-1 text-truncate-2" 
                                            style={{ fontSize: '15px', fontWeight: '400', lineHeight: '1.4' }}
                                        >
                                            {item.title}
                                        </h6>
                                        <div className="fw-bold mb-3" style={{ fontSize: '17px' }}>
                                            ${item.price}
                                        </div>

                                        <div className="d-flex gap-2">
                                            <Button 
                                                variant="outline-primary" 
                                                size="sm" 
                                                className="fw-medium px-3 border d-flex align-items-center gap-1"
                                                style={{ borderRadius: '6px' }}
                                                onClick={() => handleMoveToCart(item)}
                                            >
                                                Move to cart
                                            </Button>
                                            <Button 
                                                variant="outline-danger" 
                                                size="sm" 
                                                className="px-3 border"
                                                style={{ borderRadius: '6px' }}
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </SectionWrapper>
    );
};

export default SavedLater;