
import { Button, Col, Row } from 'react-bootstrap'
import { RiShoppingBasketLine } from '@remixicon/react'
import SectionWrapper from '../../global/SectionWrapper'
import { Link } from 'react-router-dom';
import {ProductData} from '../../../data/Content'
const SavedForLater = () => {
    const SavedItems=ProductData.filter(item=>item.id>11 && item.id<=15)
    return (
        <SectionWrapper>
        <div className="bg-white border rounded p-4 mt-4 shadow-sm">
            <h5 className="fw-bold mb-4">Saved for later</h5>
            <Row className="g-3">
                {SavedItems.map((item) => (
                    <Col key={item.id} lg={2} md={4} sm={6} xs={6}>
                        <div className="text-center">
                            <div className="p-3 rounded mb-2" style={{ backgroundColor: '#EEEEEE' }}>
                                <img src={item.img} className="img-fluid" style={{ height: '120px', objectFit: 'contain' }} />
                            </div>
                            <h6 className="small text-muted text-truncate mb-1">{item.title}</h6>
                            <div className="fw-bold small mb-2">{item.price}</div>
                            <Link to={`/product/${item.id}`}>
                            <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-2 mx-auto px-3">
                                <RiShoppingBasketLine size={16} /> Move to cart
                            </Button>
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
        </SectionWrapper>
    );
};
export default SavedForLater