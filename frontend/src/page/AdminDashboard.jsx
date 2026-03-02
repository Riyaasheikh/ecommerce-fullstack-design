import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Modal, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [shippingInfo, setShippingInfo] = useState('');
    const [stock, setStock] = useState(10);
    const [image, setImage] = useState(null);

    const [products, setProducts] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [editProduct, setEditProduct] = useState({ title: '', price: '', stock: '', description: '', category: '' });
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/products');
            setProducts(res.data);
        } catch (err) { console.error("Could not fetch products", err); }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData();
        data.append('title', title);
        data.append('price', price);
        data.append('category', category);
        data.append('description', description);
        data.append('shipping_info', shippingInfo);
        data.append('stock', stock);
        data.append('image', image);

        try {
            await axios.post('http://127.0.0.1:8000/api/products', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert("Product Uploaded Successfully!");
            e.target.reset(); 
            fetchProducts(); 
        } catch (err) { 
            alert("Upload failed. Check console."); 
            console.error(err); 
        } finally { setLoading(false); }
    };

    const handleEditClick = (product) => {
        setEditProduct(product);
        setShowEdit(true);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/products/${editProduct.id}`, editProduct);
            alert("Updated successfully!");
            setShowEdit(false);
            fetchProducts();
        } catch (err) { console.error(err); }
    };

    const handleDelete = async (id) => {
        if(window.confirm("Are you sure?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
                setProducts(products.filter(p => p.id !== id));
            } catch (err) { console.error(err); }
        }
    };

    return (
        <Container className="mt-5 mb-5">
            <div className="d-flex gap-3 mb-4">
    <Card className="p-3 shadow-sm bg-primary text-white flex-fill">
        <h5>Total Products</h5>
        <h3>{products.length}</h3>
    </Card>
    <Card className="p-3 shadow-sm bg-success text-white flex-fill">
        <h5>Total Stock Value</h5>
        <h3>${products.reduce((acc, p) => acc + (p.price * p.stock), 0).toFixed(2)}</h3>
    </Card>
</div>
            <h2 className="mb-4">Admin Control Panel</h2>

            <Form onSubmit={handleUpload} className="p-4 border rounded shadow-sm mb-5 bg-light">
                <div className="row">
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control type="number" step="0.01" onChange={(e) => setPrice(e.target.value)} required />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} required />
                </Form.Group>

                <div className="row">
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(e) => setCategory(e.target.value)} required>
                            <option value="">Choose...</option>
                            <option value="Decor">Decor</option>
                            <option value="Jewelry">Jewelry</option>
                            <option value="Textiles">Textiles</option>
                            <option value="Textiles">Dress</option>
                            <option value="Textiles">Devices</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Stock Level</Form.Label>
                        <Form.Control type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Shipping Info</Form.Label>
                        <Form.Control type="text" placeholder="e.g. 3 days" onChange={(e) => setShippingInfo(e.target.value)} />
                    </Form.Group>
                </div>

                <Form.Group className="mb-4">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                </Form.Group>
                
                <Button variant="success" type="submit" className="w-100" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload to Handcraft Shop'}
                </Button>
            </Form>

            <hr className="my-5" />
            <h3 className="mb-4">Inventory Management</h3>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td className="text-center">
                                <img 
                                    src={`http://127.0.0.1:8000/images/${p.img}`} 
                                    alt={p.title} 
                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} 
                                />
                            </td>
                            <td className="align-middle">{p.title}</td>
                            <td className="align-middle">{p.category}</td>
                            <td className="align-middle">${p.price}</td>
                            <td className="align-middle">{p.stock}</td>
                            <td className="align-middle text-center">
                                <Button variant="warning" size="sm" className='me-2' onClick={() => handleEditClick(p)}>Edit</Button>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showEdit} onHide={() => setShowEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit: {editProduct.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Price ($)</Form.Label>
                            <Form.Control 
                                type="number" 
                                step="0.01"
                                value={editProduct.price} 
                                onChange={(e) => setEditProduct({...editProduct, price: e.target.value})} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={editProduct.stock} 
                                onChange={(e) => setEditProduct({...editProduct, stock: e.target.value})} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AdminDashboard;