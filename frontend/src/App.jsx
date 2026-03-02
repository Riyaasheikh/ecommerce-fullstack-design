import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './route/Router';
import axios from "axios";
import { useEffect, useContext } from 'react';
import { AuthContext } from './context/AuthContext';

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

function App() {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    logout(); 
                }
                return Promise.reject(error);
            }
        );

        return () => axios.interceptors.response.eject(interceptor);
    }, [logout]);

    return <RouterProvider router={Router} />;
}

export default App;