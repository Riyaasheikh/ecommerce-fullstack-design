import React from 'react'
import SectionWrapper from '../../global/SectionWrapper'
import { Button, Card, Col, Row } from 'react-bootstrap'
import img1 from "../../../assets/img/tech/image 98.png";
import img2 from "../../../assets/img/tech/image 28.png";
import img3 from "../../../assets/img/tech/image 28.png";
import img4 from "../../../assets/img/tech/image 32.png";
import img5 from "../../../assets/img/tech/image 33.png";
import img6 from "../../../assets/img/tech/image 34.png";
import img7 from "../../../assets/img/tech/image 35.png";
import img8 from "../../../assets/img/tech/image 85.png";
import img9 from "../../../assets/img/tech/image 86.png";

const Tech=()=>{
    const items=[
            { title: "Soft chairs", price: "19", img: img2 },
            { title: "Kitchen Mixer", price: "100", img: img3 },
            { title: "Soft chairs", price: "19", img: img4 },
            { title: "Kitchen Mixer", price: "100", img: img5 },
            { title: "Soft chairs", price: "19", img: img6 },
            { title: "Kitchen Mixer", price: "100", img: img7 },
            { title: "Soft chairs", price: "19", img: img8 },
            { title: "Electric Kettle", price: "100", img: img9 },
    ]
    return(
        <div>
            <SectionWrapper>
                <div className='overflow-hidden border rounded' style={{backgroundColor:"#fff"}}>
                    <Row className='g-0 align-items-stretch'>
                        <Col lg={3} md={4} className='d-none d-md-block' >
                        <div style={{
                            backgroundImage:`url(${img1})`,
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            height:'100%',
                            minHeight:'257px',
                            padding:'20px'
                        }}>

                       <h4  style={{width:'120px',fontSize:'20px',fontWeight:'700'}}>
                            Consumer electronics and gadgets
                       </h4>
                       <Button variant='light' className='mt-2  shadow-sm'  style={{fontWeight:'600'}}>Source Now</Button>
                        </div>
                        </Col>

                        <Col lg={9} md={8}>
                        <Row className='g-0'>
                            {items.map((item,index)=>(
                                <Col
                                 xs={6} 
                                 md={3}
                                  key={index}
                                   className="border-start border-bottom"
                                 style={{ height: "128.5px" }}>
                                <Card className='h-100 border-0 rounded-0 p-2 flex-row'>
                                    <Card.Body className='d-flex  flex-column p-2'>
                                        <Card.Title className="mb-1" style={{ fontSize: "14px", fontWeight: "500" }}>
                                            {item.title}

                                        </Card.Title>
                                        <Card.Text className="text-muted small">
                                          From <br/>USD {item.price}

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Img
                                     
                                     src={item.img}
                                     alt={item.title}
                                     style=
                                     {{
                                         height: '65px',
                                         width:'65px',
                                          objectFit: 'contain',
                                          alignSelf:'flex-end' }} 
                                           />
                                </Card>
                                </Col>
                            ))}
                        </Row>
                        </Col>
                    </Row>
                </div>
            </SectionWrapper>

        </div>
    )
}
export default Tech