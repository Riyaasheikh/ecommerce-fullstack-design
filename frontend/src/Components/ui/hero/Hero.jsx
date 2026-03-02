import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Menu from "./Menu";
import Block from "./Block";
import heroImg from "../../../assets/img/heroImg.png";
import SectionWrapper from "../../global/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper>
      {/* Container: Remove border/shadow on mobile for a cleaner 'full-bleed' look if desired */}
      <Container className="bg-white p-2 rounded shadow-sm border mt-3 mb-4 px-0 px-md-2">
        <Row className="g-0 g-md-3 mx-0">
          
          {/* LEFT SIDEBAR: Hidden on mobile (d-none), visible on medium screens+ */}
          <Col md={3} lg={3} className="d-none d-md-block">
            <Menu />
          </Col>

          {/* MAIN BANNER: Full width on mobile (12), 6 or 9 columns on desktop */}
          <Col xs={12} md={6} lg={6}>
            <div
              className="d-flex flex-column justify-content-center"
              style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: window.innerWidth < 768 ? "200px" : "370px", 
                padding: window.innerWidth < 768 ? "20px" : "40px",
                borderRadius: "4px"
              }}
            >
              <h4 className="text-dark mb-1" style={{ fontSize: window.innerWidth < 768 ? "16px" : "24px" }}>
                Latest trending
              </h4>
              <h2 className="fw-bold text-dark mb-4" style={{ fontSize: window.innerWidth < 768 ? "20px" : "32px" }}>
                Electronic items
              </h2>
              <Button 
                variant="light" 
                className="border-0 fw-bold shadow-sm" 
                style={{ width: window.innerWidth < 768 ? "120px" : "150px" }}
              >
                Learn more
              </Button>
            </div>
          </Col>

          {/* RIGHT BLOCK: Hidden on mobile, visible on large screens+ */}
          <Col lg={3} className="d-none d-lg-block">
            <Block />
          </Col>

        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;