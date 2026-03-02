import React from 'react'
import { Container, Nav, Dropdown, Stack } from 'react-bootstrap'
import { RiAlignJustify } from '@remixicon/react'
import icon from '../../assets/flag/icon.png'
import SectionWrapper from './SectionWrapper'

const Navbar = () => {
    
    const fontColor = "#1C1C1C"; 
    return (
        <SectionWrapper>
        <nav className="border-bottom bg-white d-none d-lg-block">
            <Container fluid className="py-2">
                <Stack direction="horizontal" gap={4} className="align-items-center">
                    
                    {/* LEFT SIDE: Categories & Links */}
                    <Nav className="me-auto align-items-center gap-4 fw-medium" style={{ color: fontColor }}>
                        <Nav.Link href="#categories" className="d-flex align-items-center gap-2 p-0 text-dark ">
                            <RiAlignJustify size={22} />
                            All category
                        </Nav.Link>

                        <Nav.Link href="#offers" className="p-0 text-dark">Hot offers</Nav.Link>
                        <Nav.Link href="#gifts" className="p-0 text-dark">Gift boxes</Nav.Link>
                        <Nav.Link href="#projects" className="p-0 text-dark">Projects</Nav.Link>
                        <Nav.Link href="#menu" className="p-0 text-dark">Menu items</Nav.Link>

                        
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link} className="p-0 text-dark">
                                Help
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#support">Support</Dropdown.Item>
                                <Dropdown.Item href="#faq">FAQ</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                    
                    <Stack direction="horizontal" gap={4}>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="link" className="text-dark text-decoration-none p-0 fw-medium">
                                English, USD
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>German, EUR</Dropdown.Item>
                                <Dropdown.Item>French, EUR</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown align="end">
                            <Dropdown.Toggle variant="link" className="text-dark text-decoration-none p-0 fw-medium d-flex align-items-center gap-2">
                                Ship to <img src={icon} alt="flag" style={{ width: '18px' }} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Germany</Dropdown.Item>
                                <Dropdown.Item>USA</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Stack>
                    
                </Stack>
            </Container>
        </nav>
        </SectionWrapper>
    )
}

export default Navbar