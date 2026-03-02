import React, { useMemo } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiShoppingBag2Fill,
  RiDeleteBin6Line,
} from "@remixicon/react";
import axios from "axios";

import Layout from "../layout/Layout";
import Featurebar from "../Components/ui/featurebar/Featurebar";
import Banner from "../Components/ui/banner/Banner";
import { useCart } from "../context/CartContext";
import SavedLater from "../Components/ui/savedlater/SavedLater";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQty } = useCart();
  const navigate = useNavigate();

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    const cleanPrice = price?.toString().replace(/[$,]/g, "");
    return parseFloat(cleanPrice) || 0;
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + parsePrice(item.price) * item.qty,
      0,
    );
    const shipping = cart.length > 0 ? 10.0 : 0;
    const tax = subtotal * 0.07;
    return { subtotal, shipping, tax, total: subtotal + shipping + tax };
  }, [cart]);

  const handleQtyChange = (id, currentQty, delta) => {
    const newQty = currentQty + delta;
    if (newQty > 0) {
      updateQty(id, newQty);
    } else {
      if (window.confirm("Remove this item?")) removeFromCart(id);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/checkout", {
        cart,
        amount: totals.total.toFixed(2),
      });
      clearCart();
      navigate("/my-orders");
    } catch (error) {
      alert("Checkout failed. Please try again.");
    }
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <Container className="py-5 text-center">
          <RiShoppingBag2Fill size={100} className="text-muted mb-4" />
          <h2 className="fw-bold">Your cart is empty</h2>
          <p className="text-muted">
            Looks like you haven't added anything yet.
          </p>
          <Button
            as={Link}
            to="/product"
            variant="primary"
            className="mt-3 px-5 py-2"
          >
            Explore Products
          </Button>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container className="py-4">
        <h4 className="fw-bold mb-4">Shopping Cart ({cart.length})</h4>
        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm overflow-hidden">
              <Card.Body className="p-0">
                {cart.map((item) => (
                  <div key={item.id} className="p-3 border-bottom bg-white">
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <div className="bg-light rounded p-2 text-center">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fluid
                            style={{ maxHeight: "80px" }}
                          />
                        </div>
                      </Col>
                      <Col xs={9} md={5}>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <small className="text-muted d-block mb-2">
                          Seller: Artel Market
                        </small>
                        <Button
                          variant="link"
                          className="p-0 text-danger text-decoration-none small d-flex align-items-center gap-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <RiDeleteBin6Line size={16} /> Remove
                        </Button>
                      </Col>
                      <Col xs={6} md={3} className="mt-3 mt-md-0">
                        <div className="d-flex border rounded w-fit-content">
                          <Button
                            variant="light"
                            className="px-3 border-0 rounded-0"
                            onClick={() =>
                              handleQtyChange(item.id, item.qty, -1)
                            }
                          >
                            −
                          </Button>
                          <div className="px-3 d-flex align-items-center fw-bold bg-white">
                            {item.qty}
                          </div>
                          <Button
                            variant="light"
                            className="px-3 border-0 rounded-0"
                            onClick={() =>
                              handleQtyChange(item.id, item.qty, 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </Col>
                      <Col xs={6} md={2} className="text-end mt-3 mt-md-0">
                        <span className="fw-bold h6">
                          ${(parsePrice(item.price) * item.qty).toFixed(2)}
                        </span>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
              <Card.Footer className="bg-white p-3 border-top-0 d-flex justify-content-between">
                <Button
                  as={Link}
                  to="/product"
                  variant="outline-primary"
                  className="d-flex align-items-center gap-2"
                >
                  <RiArrowLeftLine size={18} /> Continue Shopping
                </Button>
                <Button
                  variant="link"
                  className="text-danger text-decoration-none"
                  onClick={clearCart}
                >
                  Clear All Items
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className="border-0 shadow-sm p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-muted">
                <span>Tax (7%)</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="h5 fw-bold">Total</span>
                <span className="h5 fw-bold text-primary">
                  ${totals.total.toFixed(2)}
                </span>
              </div>
              <Button
                variant="success"
                className="w-100 py-3 fw-bold shadow-sm"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <SavedLater/>
      <div className="d-none d-lg-block">
        <Featurebar />
      </div>
      <div className="d-none d-lg-block">
        <Banner />
      </div>
    </Layout>
  );
};

export default Cart;
