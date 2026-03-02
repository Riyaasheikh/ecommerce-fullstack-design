import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', backgroundColor: '#F8F9FA'}}>
                <div className="text-center">
                    <div className="spinner-border text-primary mb-2" role="status"></div>
                    <div className="text-muted small">Verifying credentials...</div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

  
    if (user.role !== "admin") {
        console.warn("Access Denied: User is not an admin", user);
        return <Navigate to="/product" replace />;
    }

    return children;
};

export default AdminRoute;