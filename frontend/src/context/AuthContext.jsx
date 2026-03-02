import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);

    // PERSISTENCE & RECOVERY: Validates the token on mount
    useEffect(() => {
        const verifyUser = async () => {
            const storedToken = localStorage.getItem("token");
            const storedUser = localStorage.getItem("user");

            if (storedToken) {
                // Set header immediately for the verification call
                axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
                
                // Pre-fill user from local storage to prevent instant redirects
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }

                try {
                    const res = await axios.get("/api/user");
                    setUser(res.data);
                    localStorage.setItem("user", JSON.stringify(res.data));
                } catch (error) {
                    console.error("Token verification failed:", error);
                    logout(); // Clear storage if token is invalid or expired
                }
            }
            setLoading(false); // Stop loading only after verification attempt
        };

        verifyUser();
    }, []);

    const login = (newToken, userData) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
    };

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};