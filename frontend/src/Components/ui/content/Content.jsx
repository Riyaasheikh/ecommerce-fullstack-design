import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination, Form } from "react-bootstrap";
import TopToolbar from "../top/TopToolbar";
import { RiHeartLine, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Content = ({ className, products = [] }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Determine items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(9);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderStars = (rating = 4) => {
    const fullStars = Math.floor(rating);
    return (
      <span className="text-warning">
        {"★".repeat(fullStars)}
        {"☆".repeat(5 - fullStars)}
      </span>
    );
  };

  return (
    <div className={className}>
      <TopToolbar viewMode={viewMode} setViewMode={setViewMode} />

      <Row className="mt-3">
        {currentItems.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={6}
            md={viewMode === "grid" ? 4 : 12}
            className="mb-4"
          >
            <Card className="h-100 shadow-sm border-light">
              {viewMode === "list" ? (
                /* --- LIST VIEW --- */
                <Row className="g-0 p-3">
                  <Col md={3} className="d-flex align-items-center justify-content-center">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={`http://localhost:8000/images/${item.img}`}
                        alt={item.title}
                        className="img-fluid"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                    </Link>
                  </Col>
                  <Col md={9} className="position-relative">
                    <div className="position-absolute" style={{ top: "0", right: "0" }}>
                      <div className="border rounded p-2 bg-white shadow-sm cursor-pointer">
                        <RiHeartLine size={20} className="text-primary" />
                      </div>
                    </div>
                    <Card.Body className="py-0 ps-4 pe-5">
                      <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                        <Card.Title className="h5 mb-2 fw-normal">{item.title}</Card.Title>
                      </Link>
                      <div className="d-flex align-items-baseline gap-2 mb-2">
                        <span className="h4 fw-bold mb-0">${item.price}</span>
                        <span className="text-muted text-decoration-line-through small">$1128.00</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        {renderStars(item.rating)}
                        <span className="text-warning ms-2 fw-bold">7.5</span>
                        <span className="text-muted mx-2">•</span>
                        <span className="text-muted small">154 orders</span>
                        <span className="text-muted mx-2">•</span>
                        <span className="text-success small fw-bold">Free Shipping</span>
                      </div>
                      <Card.Text className="text-muted mb-3 small">
                        {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                      </Card.Text>
                      <Link to={`/product/${item.id}`} className="text-primary fw-bold text-decoration-none">View details</Link>
                    </Card.Body>
                  </Col>
                </Row>
              ) : (
                /* --- GRID VIEW --- */
                <Card.Body className="d-flex flex-column p-3">
                  <Link to={`/product/${item.id}`} className="text-center mb-3">
                    <Card.Img
                      src={`http://localhost:8000/images/${item.img}`}
                      alt={item.title}
                      style={{ height: "180px", objectFit: "contain" }}
                    />
                  </Link>
                  <hr className="text-muted opacity-25" />
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <div>
                        <span className="fw-bold h5 mb-0">${item.price}</span>
                        <span className="text-muted text-decoration-line-through small ms-2">$1128.00</span>
                      </div>
                      <div className="border rounded p-1 shadow-sm cursor-pointer">
                        <RiHeartLine size={20} className="text-primary" />
                      </div>
                    </div>
                    <div className="mb-2">
                      {renderStars(item.rating)}
                      <small className="text-muted ms-2">7.5</small>
                    </div>
                    <Card.Text className="text-muted small mb-0">
                      {item.title}
                    </Card.Text>
                  </div>
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>

      {/* --- PAGINATION SECTION (Matches image_4311c5.png) --- */}
      <div className="d-flex justify-content-end align-items-center mt-4 mb-5 gap-3">
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted small">Show</span>
          <Form.Select 
            size="sm" 
            className="w-auto" 
            value={itemsPerPage} 
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Form.Select>
        </div>

        <Pagination className="mb-0">
          <Pagination.Prev 
            disabled={currentPage === 1} 
            onClick={() => paginate(currentPage - 1)}
          >
            <RiArrowLeftSLine size={20} />
          </Pagination.Prev>
          
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item 
              key={index + 1} 
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next 
            disabled={currentPage === totalPages} 
            onClick={() => paginate(currentPage + 1)}
          >
            <RiArrowRightSLine size={20} />
          </Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
};

export default Content;