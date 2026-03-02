import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, InputGroup, Button, Form, Dropdown } from "react-bootstrap";
import logo from "../../assets/brand/logo-symbol.svg";
import { 
  RiMessage2Line, 
  RiPokerHeartsFill, 
  RiShoppingCart2Fill, 
  RiUserFill, 
  RiAlignJustify, 
  RiSearchLine,
  RiArrowLeftLine 
} from "@remixicon/react";
import SectionWrapper from "./SectionWrapper";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const isDetailPage = location.pathname.startsWith('/product/');
  const isCartPage = location.pathname === '/cart';
  const shouldHideAll = isDetailPage || isCartPage; 

  const iconColor = "#8B96A5"; 
  const brandBlue = "#8CB7F5";
  const borderBlue = "#0D6EFD";
  const iconStyle = { width: "20px", height: "19px", color: iconColor };
  
  const handleSearch = (e) => {
    if (e) e.preventDefault(); 
    navigate(`/product?search=${query}&category=${selectedCategory}`);
  };

  return (
    <SectionWrapper>
      <div className="d-lg-none bg-white">
        {!shouldHideAll ? (
          <>

            <div className="d-flex align-items-center justify-content-between p-3">
              <div className="d-flex align-items-center gap-3">
                <RiAlignJustify size={24} />
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center m-0">
                  <div className="bg-primary rounded p-1 me-2 d-flex align-items-center shadow-sm">
                    <RiShoppingCart2Fill color="white" size={18} />
                  </div>
                  <span className="fw-bold text-primary" style={{ fontSize: "20px" }}>Brand</span>
                </Navbar.Brand>
              </div>
              <div className="d-flex gap-3 text-dark">
                <Link to="/cart" className="text-dark"><RiShoppingCart2Fill size={24} /></Link>
                <Link to="/profile" className="text-dark"><RiUserFill size={24} /></Link>
              </div>
            </div>

            <div className="px-3 pb-2">
              <Form onSubmit={handleSearch}>
                <InputGroup className="bg-light border rounded">
                  <InputGroup.Text className="bg-transparent border-0 pe-1">
                    <RiSearchLine color="#8B96A5" size={20} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search"
                    className="border-0 bg-transparent py-2"
                    style={{ boxShadow: 'none' }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
              </Form>
            </div>

            <div className="d-flex overflow-auto gap-2 px-3 pb-3 no-scrollbar" style={{ whiteSpace: 'nowrap' }}>
              {['All category', 'Gadgets', 'Clothes', 'Accessories'].map((cat) => (
                <Button 
                  key={cat} 
                  variant="light" 
                  onClick={() => { setSelectedCategory(cat); handleSearch(); }}
                  className="text-primary border-0 rounded py-1 px-3 fw-medium" 
                  style={{ backgroundColor: "#E5F1FF", fontSize: '14px' }}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="d-flex align-items-center p-3 border-bottom bg-white sticky-top">
             <Button variant="link" onClick={() => navigate(-1)} className="p-0 text-dark me-3">
                <RiArrowLeftLine size={24} />
             </Button>
             <h5 className="mb-0 fw-bold">{isCartPage ? "Shopping cart" : "Details"}</h5>
          </div>
        )}
      </div>

      <div className="d-none d-lg-block">
        <Nav className="ms-auto d-flex justify-content-end align-items-center bg-light px-4 py-1">
          {user ? (
            <>
              <Nav.Link className="text-center p-0 me-3">
                <RiUserFill style={iconStyle} />
                <small className="ms-1 text-dark">Hi, {user.name}</small>
              </Nav.Link>
              <Button variant="link" className="p-0 text-decoration-none text-muted" onClick={logout}>
                <small>Logout</small>
              </Button>
            </>
          ) : (
            <Nav.Link as={Link} to="/login" className="text-center p-0">
              <RiUserFill style={iconStyle} />
              <small className="ms-1 text-dark">Login</small>
            </Nav.Link>
          )}
        </Nav>

        <Navbar bg="white" expand="lg" className="border-bottom py-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src={logo} alt="brand" className="me-2" />
              <span style={{ color: brandBlue, fontWeight: "bold", fontSize: "20px" }}>Brand</span>
            </Navbar.Brand>
            <div className="d-flex flex-grow-1 mx-5 justify-content-center">
              <InputGroup style={{ maxWidth: "580px" }}>
                <Form.Control
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ borderColor: borderBlue }}
                />
                <Dropdown>
                  <Dropdown.Toggle 
                    variant="outline-primary"
                    className="bg-white text-dark border-start-0"
                    style={{ borderColor: borderBlue, borderRadius: "0" }}
                  >
                    {selectedCategory}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSelectedCategory("All Category")}>All Category</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedCategory("Electronics")}>Electronics</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedCategory("Furniture")}>Furniture</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedCategory("Mobile")}>Mobile</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" onClick={handleSearch} style={{ borderRadius: "0 4px 4px 0" }}>
                  Search
                </Button>
              </InputGroup>
            </div>

            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/profile" className="d-flex flex-column align-items-center mx-2 text-center text-dark text-decoration-none">
                <RiUserFill style={iconStyle} />
                <small style={{ color: iconColor }}>Profile</small>
              </Nav.Link>
              <Nav.Link as={Link} to="/my-orders" className="d-flex flex-column align-items-center mx-2 text-center text-dark text-decoration-none">
                <RiPokerHeartsFill style={iconStyle} />
                <small style={{ color: iconColor }}>Orders</small>
              </Nav.Link>
              <Nav.Link as={Link} to='/cart' className="d-flex flex-column align-items-center mx-2 text-center text-dark text-decoration-none">
                <RiShoppingCart2Fill style={iconStyle} />
                <small style={{ color: iconColor }}>My Cart</small>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </SectionWrapper>
  );
};

export default Header;