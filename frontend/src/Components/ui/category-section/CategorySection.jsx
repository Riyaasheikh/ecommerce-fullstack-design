import React from "react";
import SectionWrapper from "../../global/SectionWrapper";
import { Button, Card, Col, Row } from "react-bootstrap";
import { RiArrowRightLine } from "@remixicon/react";

const CategorySection = ({ title, bannerImg, items }) => {
  if (!items) return null;

  return (
    <SectionWrapper>
      <div className="overflow-hidden border rounded bg-white shadow-sm mb-4">
        <div className="d-md-none p-3 border-bottom">
          <h6 className="fw-bold mb-0 text-dark">{title}</h6>
        </div>

        <Row className="g-0 align-items-stretch">
          <Col md={4} lg={3} className="d-none d-md-block">
            <div
              style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                minHeight: "257px",
                padding: "20px",
              }}
            >
              <h4 className="fw-bold text-dark" style={{ width: "120px", fontSize: "20px" }}>
                {title}
              </h4>
              <Button variant="light" className="mt-2 fw-bold shadow-sm border-0">
                Source now
              </Button>
            </div>
          </Col>

          <Col md={8} lg={9}>
          
            <div className="d-flex flex-nowrap flex-md-wrap overflow-auto no-scrollbar">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="border-start border-bottom d-flex flex-shrink-0 flex-md-shrink-1"
                  
                  style={{ 
                    height: "140px", 
                    width: window.innerWidth < 768 ? "135px" : "25%",
                    flex: window.innerWidth < 768 ? "0 0 135px" : "0 0 25%"
                  }}
                >
                  <Card className="h-100 border-0 rounded-0 p-2 w-100 bg-transparent">
                    <div className="d-flex flex-column h-100 text-start">
                      <div className="flex-grow-1">

                        <div 
                          className="text-dark mb-1 fw-medium text-truncate" 
                          style={{ fontSize: window.innerWidth < 768 ? "13px" : "14px" }}
                        >
                          {item.title}
                        </div>
                        <div className="text-muted" style={{ fontSize: "12px" }}>
                           From <br className="d-none d-md-block" /> USD {item.price}
                        </div>
                      </div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="mt-auto align-self-end"
                        style={{ width: "55px", height: "55px", objectFit: "contain" }}
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <div className="d-md-none p-3 border-top bg-white">
          <a href="#" className="text-primary text-decoration-none fw-bold small d-flex align-items-center gap-2">
            Source now <RiArrowRightLine size={18} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CategorySection;