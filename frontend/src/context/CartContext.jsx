import { createContext, useState, useContext, useCallback, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    const updateQty = useCallback((id, newQty) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
            )
        );
    }, []);

    const removeFromCart = useCallback((id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }, []);

    const clearCart = useCallback(() => setCart([]), []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQty }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);