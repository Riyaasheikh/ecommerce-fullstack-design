import React from "react";
import Layout from "../layout/Layout";
import Banner from "../Components/ui/banner/Banner";
import Related from "../Components/ui/related/Related";
import BlockDetail from "../Components/ui/block-detail/BlockDetail";
import {  useNavigate, useParams } from "react-router-dom";
import { ProductData } from "../data/Content";
import BreadCrumb from "../Components/ui/breadCrumb/BreadCrumb";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import flag from "../assets/flag/icon.png";
import {
  RiGlobalLine,
  RiMessage2Line,
  RiShieldCheckLine,
  RiShoppingBasketLine,
} from "@remixicon/react";
import SectionWrapper from "../Components/global/SectionWrapper";
import Navbar from "../Components/global/Navbar";
import { useCart } from "../context/CartContext";

const ProductDetailPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = ProductData.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product)
    return <div className="p-5 text-center">Product not found!</div>;

  const RenderStars = (rating) => {
    const fullstars = Math.floor(rating);
    return (
      <span className="text-warning me-2">
        {"★".repeat(fullstars)}
        {"☆".repeat(5 - fullstars)}
      </span>
    );
  };
  const handleSendInquiry = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <Layout>
      <Navbar />

      <div className="d-none d-lg-block">
        <BreadCrumb />
      </div>

      <SectionWrapper>
        <div className="bg-white border rounded p-lg-4 p-0 shadow-sm mb-4 border-0 border-lg-1">
          <Row className="g-4">
            <Col lg={4} xs={12}>
              <div className="text-center position-relative">
                <div className="d-lg-none position-absolute top-50 start-0 translate-middle-y px-2">
                  <Button
                    variant="light"
                    size="sm"
                    className="rounded-circle shadow-sm opacity-75"
                  >
                    ←
                  </Button>
                </div>
                <div className="d-lg-none position-absolute top-50 end-0 translate-middle-y px-2">
                  <Button
                    variant="light"
                    size="sm"
                    className="rounded-circle shadow-sm opacity-75"
                  >
                    →
                  </Button>
                </div>

                <img
                  src={product.img}
                  className="img-fluid"
                  style={{ maxHeight: "350px", objectFit: "contain" }}
                  alt={product.title}
                />
              </div>
            </Col>

            <Col lg={5} xs={12} className="px-3 px-lg-0">
              <div className="d-flex align-items-center mb-2 small">
                {RenderStars(4)}
                <span className="text-warning fw-bold me-2">9.3</span>
                <span className="text-muted d-flex align-items-center gap-1">
                  • <RiMessage2Line size={16} /> 32 reviews •{" "}
                  <RiShoppingBasketLine size={16} /> 154 sold
                </span>
              </div>

              <h4 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                {product.title}
              </h4>

              <div
                className="rounded p-3 mb-3 d-lg-none"
                style={{ backgroundColor: "#fff" }}
              >
                <h4 className="text-danger fw-bold mb-0">$129.95</h4>
                <small className="text-muted">(50-100 pcs)</small>
              </div>

              <Row
                className="g-0 mb-4 p-3 rounded d-none d-lg-flex"
                style={{ backgroundColor: "#FFF0DF" }}
              >
                <Col className="border-end border-warning-subtle ps-2">
                  <h5 className="text-danger fw-bold mb-0">$98.00</h5>
                  <small className="text-muted">50-100 pcs</small>
                </Col>
                <Col className="border-end border-warning-subtle ps-3">
                  <h5 className="fw-bold mb-0">$90.00</h5>
                  <small className="text-muted">100-700 pcs</small>
                </Col>
                <Col className="ps-3">
                  <h5 className="fw-bold mb-0">$78.00</h5>
                  <small className="text-muted">700+ pcs</small>
                </Col>
              </Row>
              <Table borderless size="sm" className="small">
                <tbody>
                  <tr className="border-bottom">
                    <td className="text-muted py-2">Condition:</td>
                    <td className="py-2">Brand new</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="text-muted py-2">Material:</td>
                    <td className="py-2">Plastic</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="text-muted py-2">Category:</td>
                    <td className="py-2">Electronics, gadgets</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="text-muted py-2">Item num:</td>
                    <td className="py-2">23421</td>
                  </tr>
                </tbody>
              </Table>
              <p className="d-block d-lg-none">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                minus quaerat blanditiis est ab impedit suscipit provident
                consequatur ad qui, a eveniet? Nulla quia dolore quo
                exercitationem obcaecati a
              </p>
            </Col>

            <Col lg={3} xs={12}>
              <Card className="p-3 shadow-none border-light-subtle bg-white">
                <div className="d-flex gap-3 mb-3 align-items-center">
                  <div
                    className="p-3 rounded bg-info-subtle text-info fw-bold h4 mb-0 d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    R
                  </div>
                  <div className="small">
                    Supplier <br />
                    <span className="fw-bold">Guanjoi Trading LLC</span>
                  </div>
                  <div className="ms-auto d-lg-none">›</div>
                </div>
                <hr className="my-2" />
                <div className="text-muted small mb-4 d-flex flex-row flex-lg-column gap-3 gap-lg-0">
                  <p className="mb-2 d-flex align-items-center gap-2">
                    <img src={flag} alt="flag" style={{ width: "20px" }} />{" "}
                    Germany
                  </p>
                  <p className="mb-2 d-flex align-items-center gap-2">
                    <RiShieldCheckLine size={18} /> Verified
                  </p>
                  <p className="mb-2 d-flex align-items-center gap-2">
                    <RiGlobalLine size={18} /> Shipping
                  </p>
                </div>
                <Button
                  onClick={handleSendInquiry}
                  variant="primary"
                  className="w-100 mb-2 py-2 fw-bold "
                >
                  Send inquiry
                </Button>
                <Button
                  variant="outline-primary"
                  className="w-100 py-2 d-none d-lg-block"
                >
                  Seller's profile
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </SectionWrapper>

      <BlockDetail />
      <Related />
      <div className="d-none d-lg-block">
        <Banner />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
