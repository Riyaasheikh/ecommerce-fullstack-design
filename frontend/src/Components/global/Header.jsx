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
import MobileSidebar from "../ui/mobsidebar/MobileSidebar";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showSidebar, setShowSidebar] = useState(false);
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
      {/* Mobile Drawer Component */}
      <MobileSidebar 
        show={showSidebar} 
        onHide={() => setShowSidebar(false)} 
        user={user} 
      />

      {/* MOBILE VIEW */}
      <div className="d-lg-none bg-white">
        {!shouldHideAll ? (
          <>
            <div className="d-flex align-items-center justify-content-between p-3">
              <div className="d-flex align-items-center gap-3">
                {/* Hamburger triggers Sidebar */}
                <RiAlignJustify 
                  size={24} 
                  onClick={() => setShowSidebar(true)} 
                  style={{ cursor: 'pointer' }} 
                />
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center m-0">
                  <div className="bg-primary rounded p-1 me-2 d-flex align-items-center shadow-sm">
                    <RiShoppingCart2Fill color="white" size={18} />
                  </div>
                  <span className="fw-bold text-primary" style={{ fontSize: "20px" }}>Brand</span>
                </Navbar.Brand>
              </div>
              <div className="d-flex gap-3 text-dark align-items-center">
                <Link to="/cart" className="text-dark">
                  <RiShoppingCart2Fill size={24} />
                </Link>
                {/* Profile Icon triggers Sidebar */}
                <div 
                  onClick={() => setShowSidebar(true)} 
                  style={{ cursor: 'pointer' }}
                >
                  <RiUserFill size={24} />
                </div>
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

      {/* DESKTOP VIEW */}
      <div className="d-none d-lg-block">
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
              {/* Desktop Profile Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle 
                  as="div" 
                  className="d-flex flex-column align-items-center mx-2 text-center text-dark text-decoration-none" 
                  style={{ cursor: 'pointer' }}
                >
                  <RiUserFill style={iconStyle} />
                  <small style={{ color: iconColor }}>{user ? user.name : "Profile"}</small>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow-sm border-0 mt-2 p-2" style={{ width: '200px' }}>
                  {user ? (
                    <>
                      <div className="px-3 py-2 border-bottom mb-2">
                        <div className="fw-bold text-truncate">{user.name}</div>
                        <small className="text-muted text-truncate d-block">{user.email}</small>
                      </div>
                      <Dropdown.Item as={Link} to="/profile" className="rounded">My Account</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-orders" className="rounded">My Orders</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logout} className="text-danger rounded">Logout</Dropdown.Item>
                    </>
                  ) : (
                    <div className="p-2">
                      <Button as={Link} to="/login" variant="primary" className="w-100 mb-2 btn-sm">Sign In</Button>
                      <Button as={Link} to="/signup" variant="outline-primary" className="w-100 btn-sm">Register</Button>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="/message" className="d-flex flex-column align-items-center mx-2 text-center text-dark text-decoration-none">
                <RiMessage2Line style={iconStyle} />
                <small style={{ color: iconColor }}>Message</small>
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