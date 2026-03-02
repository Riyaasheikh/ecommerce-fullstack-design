import React from "react";
import { Card, Col,  Row } from "react-bootstrap";
import SectionWrapper from "../../global/SectionWrapper";

import { Link } from "react-router-dom";
import { ProductData } from "../../../data/Content";
const Recommend = () => {
  const RecommendedItems=ProductData.filter(item=>item.id>=15).slice(0,10);
  return (
    <SectionWrapper>
      <h4 className="fw-bold mb-4">Recommended Items</h4>
      <Row className="g-3 row-cols-2 row-cols-md-3 row-cols-lg-5 mb-4">
        {RecommendedItems.map((item) => (
          <Col key={item.id}>
            <Link to={`/product/${item.id}`} className="text-decoration-none">
              <Card className="h-100 border shadow-sm hover-shadow transition">
                <div 
                  className="d-flex align-items-center justify-content-center p-2 rounded-top" 
                  style={{ height: "180px", backgroundColor: '#fff' }}
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt={item.title}
                    style={{
                      maxHeight: "140px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Body className="pt-2">
                  <Card.Title 
                    className="mb-1 text-dark" 
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    ${item.price}
                  </Card.Title>
                  <Card.Text 
                    className="text-muted mb-0" 
                    style={{ fontSize: "14px", lineHeight: "1.2" }}
                  >
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default Recommend;