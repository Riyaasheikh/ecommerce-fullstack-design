// src/components/ui/header/MobileSidebar.jsx
import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  RiHome4Line, RiListCheck, RiHeartLine, RiShoppingBag3Line, 
  RiGlobalLine, RiCustomerService2Line, RiInformationLine,
  RiShieldCheckLine, RiHandHeartLine, RiLockPasswordLine, 
  RiUserFill
} from "@remixicon/react";

const MobileSidebar = ({ show, onHide, user }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="start" style={{ width: '280px' }}>
      <Offcanvas.Header closeButton className="bg-light border-bottom py-4">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
            <RiUserFill color="white" size={24} />
          </div>
          <div>
            <div className="fw-bold">
              {user ? <Link to="/profile" className="text-dark text-decoration-none">Hi, {user.name}</Link> : 
              <Link to="/login" className="text-dark text-decoration-none">Sign in | Register</Link>}
            </div>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Nav className="flex-column py-2 border-bottom">
          <NavLink icon={<RiHome4Line size={20}/>} label="Home" to="/" onHide={onHide} />
          <NavLink icon={<RiListCheck size={20}/>} label="Categories" to="/product" onHide={onHide} />
          <NavLink icon={<RiHeartLine size={20}/>} label="Favorites" to="/favorites" onHide={onHide} />
          <NavLink icon={<RiShoppingBag3Line size={20}/>} label="My orders" to="/my-orders" onHide={onHide} />
        </Nav>

        <Nav className="flex-column py-2 border-bottom">
          <NavLink icon={<RiGlobalLine size={20}/>} label="English | USD" to="#" onHide={onHide} />
          <NavLink icon={<RiCustomerService2Line size={20}/>} label="Contact us" to="/contact" onHide={onHide} />
          <NavLink icon={<RiInformationLine size={20}/>} label="About" to="/about" onHide={onHide} />
        </Nav>

        <Nav className="flex-column py-3 px-4 gap-3">
          <Link to="/agreement" className="text-dark text-decoration-none small">User agreement</Link>
          <Link to="/partnership" className="text-dark text-decoration-none small">Partnership</Link>
          <Link to="/privacy" className="text-dark text-decoration-none small">Privacy policy</Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

const NavLink = ({ icon, label, to, onHide }) => (
  <Nav.Link as={Link} to={to} onClick={onHide} className="d-flex align-items-center gap-3 px-4 py-3 text-dark">
    <span className="text-muted">{icon}</span>
    <span>{label}</span>
  </Nav.Link>
);

export default MobileSidebar;