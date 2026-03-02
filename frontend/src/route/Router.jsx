import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home'
import ProductListing from '../page/ProductListing'
import ProductDetailPage from '../page/ProductDetailPage'
import Cart from '../page/Cart'
import SignUp from '../Components/auth/SignUp'
import RouteProtected from '../Components/route-protected/RouteProtected'
import Login from '../Components/auth/Login'
import AdminRoute from '../Components/route-protected/AdminRoute'
import AdminDashboard from '../page/AdminDashboard'
import MyOrders from '../page/MyOrders'
export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/product',
        element: <ProductListing />
    },
    {
        path: '/product/:id',
        element: <ProductDetailPage />
    },
    {
        path: '/cart',
        element: (
            <RouteProtected>
                <Cart />
            </RouteProtected>
        )
    },
    {
        path: '/signup', 
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: (
            <AdminRoute>
                <AdminDashboard />
            </AdminRoute>
        )
    },
    {
        path: "/my-orders",
        element: (
            <RouteProtected>
                <MyOrders />
            </RouteProtected>
        )
    }
]);