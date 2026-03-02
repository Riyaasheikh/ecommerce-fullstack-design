import React, { useEffect, useState } from 'react';
import { Container, Card, Table, Badge, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Fetching from your Laravel 12 backend
                const res = await axios.get('http://127.0.0.1:8000/api/my-orders');
                setOrders(res.data);
            } catch (err) {
                setError("Failed to load orders. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
    if (error) return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;

    return (
        <Container className="mt-5 mb-5">
            <h2 className="mb-4">My Purchase History</h2>
            {orders.length === 0 ? (
                <Alert variant="info">You haven't placed any orders yet!</Alert>
            ) : (
                orders.map(order => (
                    <Card key={order.id} className="mb-4 shadow-sm border-0">
                        <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                            <span>Order #{order.id} — {new Date(order.created_at).toLocaleDateString()}</span>
                            <Badge bg={order.status === 'delivered' ? 'success' : 'warning'}>
                                {order.status.toUpperCase()}
                            </Badge>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive borderless className="mb-0">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.product?.title || "Product Removed"}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.price}</td>
                                            <td>${(item.quantity * item.price).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Shipping to:</strong><br />
                                    <small className="text-muted">{order.shipping_address}</small>
                                </div>
                                <div className="text-end">
                                    <h5 className="mb-0">Total: ${order.total_amount}</h5>
                                    <small className="text-success">{order.payment_status.toUpperCase()}</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
};

export default MyOrders;