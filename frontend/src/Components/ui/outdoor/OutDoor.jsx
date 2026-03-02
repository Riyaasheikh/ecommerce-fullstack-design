import React from "react";
import SectionWrapper from "../../global/SectionWrapper";
import { Button, Card, Col,  Row } from "react-bootstrap";
import img1 from "../../../assets/img/image 92.png";
import img2 from "../../../assets/img/image 87.png";
import img3 from "../../../assets/img/image 88.png";
import img4 from "../../../assets/img/image 89.png";
import img5 from "../../../assets/img/image 90.png";
import img6 from "../../../assets/img/image 93.png";
import img7 from "../../../assets/img/img3.jpeg";
import img8 from "../../../assets/img/interior.png";
import img9 from "../../../assets/img/rasm.png";

const OutDoor = () => {
  const items = [
    { title: "Soft chairs", price: "19", img: img2 },
    { title: "Kitchen Mixer", price: "100", img: img3 },
    { title: "Soft chairs", price: "19", img: img4 },
    { title: "Kitchen Mixer", price: "100", img: img5 },
    { title: "Soft chairs", price: "19", img: img6 },
    { title: "Kitchen Mixer", price: "100", img: img7 },
    { title: "Soft chairs", price: "19", img: img8 },
    { title: "Kitchen Mixer", price: "100", img: img9 },
  ];

  return (
    <SectionWrapper>
      <div className="overflow-hidden border rounded" style={{ backgroundColor: "#fff" }}>
        <Row className="g-0 align-items-stretch">
          
          <Col lg={3} md={4} className="d-none d-md-block">
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%", 
                minHeight: "257px", 
                padding: "20px",
              }}
            >
              <h4  style={{ width: "120px", fontSize: "20px",fontWeight:'700' }}>
                Home and outdoor
              </h4>
              <Button variant="light" className="mt-2 shadow-sm" style={{fontWeight:'600'}}>
                Source now
              </Button>
            </div>
          </Col>

          <Col lg={9} md={8}>
            <Row className="g-0">
              {items.map((item, index) => (
                <Col 
                  xs={6} 
                  md={3} 
                  key={index} 
                  className="border-start border-bottom"
                  style={{ height: "128.5px" }} 
                >
                  <Card className="h-100 border-0 rounded-0 flex-row p-2">
                    <Card.Body className="p-2 d-flex flex-column">
                      <Card.Title className="mb-1" style={{ fontSize: "14px", fontWeight: "500" }}>
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        From <br /> USD {item.price}
                      </Card.Text>
                    </Card.Body>
                    
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "65px",
                        height: "65px",
                        objectFit: "contain",
                        alignSelf: "flex-end",
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </SectionWrapper>
  );
};

export default OutDoor;