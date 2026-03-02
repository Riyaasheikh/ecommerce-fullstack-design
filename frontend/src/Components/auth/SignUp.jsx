import React, { useState, useContext } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
            
            login(response.data.token, response.data.user); 
       
            if (response.data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/product');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Email might already exist.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '400px' }} className="p-4 shadow">
                <h2 className="text-center mb-4">Create Account</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                            required 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
                </Form>
                <div className="text-center mt-2">
                    <small className="text-muted">
                        Already have an account? <Link to="/login">Login here</Link>
                    </small>
                </div>
            </Card>
        </Container>
    );
};

export default SignUp;