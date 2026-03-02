import React, { useState, useContext } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            
            // This function should save to localStorage and state
            login(res.data.token, res.data.user); 

            if (res.data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/product');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Invalid Credentials");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '400px' }} className="p-4 shadow-sm border-0">
                <h3 className="text-center mb-4 fw-bold">Sign In</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 py-2 mb-3"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Log In'}
                    </Button>
                </Form>
                <div className="text-center mt-2">
                    <small className="text-muted">
                        Don't have an account? <Link to="/signup">Register here</Link>
                    </small>
                </div>
            </Card>
        </Container>
    );
};

export default Login;