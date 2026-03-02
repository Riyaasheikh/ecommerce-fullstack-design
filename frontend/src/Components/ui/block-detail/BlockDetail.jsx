import { RiCheckLine } from '@remixicon/react'
import React from 'react'
import { Nav, Table, Row, Col } from 'react-bootstrap'
import Aside from '../aside/Aside'
import SectionWrapper from '../../global/SectionWrapper'

const BlockDetail = () => {
    const features = [
        { title: 'Some high-quality feature detail here' },
        { title: 'Another essential product specification' },
        { title: 'Detailed info about material or build' },
        { title: 'Warranty or support information' },
    ]

    return (
        <SectionWrapper>

        <Row className="g-4">
          
            <Col lg={9}>
                <div className="bg-white shadow-sm p-4 h-100">
                    <Nav variant="tabs" defaultActiveKey="/description" className="mb-4 d-none d-lg-block">
                        <Nav.Item>
                            <Nav.Link href="/description" className="border-bottom  pb-2 text-primary fw-bold">
                                Description
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item><Nav.Link className="text-muted">Reviews</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="text-muted">Shipping</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="text-muted">About seller</Nav.Link></Nav.Item>
                    </Nav>

                    <div className="mb-4">
                        <p className="text-muted lh-base d-none d-lg-block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus distinctio perferendis 
                            minus sed repudiandae quod dolor fugit modi nobis, magni officiis dolorem dolores odio.
                        </p>
                    </div>

                    <Table bordered hover size="sm" className="w-100 text-muted mb-4 d-none d-lg-block" style={{ fontSize: '0.9rem' }}>
                        <tbody>
                            <tr><td className="bg-light fw-bold" style={{ width: '30%' }}>Model</td><td>#33fc90</td></tr>
                            <tr><td className="bg-light fw-bold">Style</td><td>Classic Style</td></tr>
                            <tr><td className="bg-light fw-bold">Certificate</td><td>ISO-99877533</td></tr>
                            <tr><td className="bg-light fw-bold">Size</td><td>34mm * 450mm * 19mm</td></tr>
                            <tr><td className="bg-light fw-bold">Memory</td><td>36GB RAM</td></tr>
                        </tbody>
                    </Table>

                    <div className="d-flex flex-column gap-2 d-none d-lg-block">
                        {features.map((fea, index) => (
                            <div key={index} className="d-flex align-items-center text-muted">
                                <RiCheckLine size={20} className="me-2 text-secondary" />
                                <span>{fea.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Col>

            <Col lg={3}>
                <Aside />
            </Col>
        </Row>
        </SectionWrapper>
    )
}

export default BlockDetail