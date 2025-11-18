import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '৳ BDT ';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [deliveryLocation, setDeliveryLocation] = useState('Inside Bogura'); // Default
    const navigate = useNavigate();

    // Add to cart with variantInfo = { variant, color, price }
    const addToCart = async (itemId, variantInfo) => {
        if (!variantInfo) {
            const product = products.find(p => p._id === itemId);
            if (!product) {
                toast.error('Product not found');
                return;
            }
            variantInfo = {
                variant: 'default',
                color: '',
                price: product.price, // Set price without including delivery charge
            };
        } else if (!variantInfo.variant) {
            toast.error('Select Product Variant');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][variantInfo.variant]) {
                cartData[itemId][variantInfo.variant].quantity += 1;
            } else {
                cartData[itemId][variantInfo.variant] = {
                    quantity: 1,
                    price: variantInfo.price,
                    color: variantInfo.color,
                };
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][variantInfo.variant] = {
                quantity: 1,
                price: variantInfo.price,
                color: variantInfo.color,
            };
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId, variant: variantInfo.variant, color: variantInfo.color },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const variantName in cartItems[itemId]) {
                try {
                    let item = cartItems[itemId][variantName];
                    if (item.quantity > 0) totalCount += item.quantity;
                } catch (error) {}
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, variantName, quantity) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId] && cartData[itemId][variantName]) {
            if (quantity <= 0) {
                delete cartData[itemId][variantName];
                if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
            } else {
                cartData[itemId][variantName].quantity = quantity;
            }
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/update',
                    { itemId, variant: variantName, quantity },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Calculate total amount (products) - do not add delivery fee yet
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            for (const variantName in cartItems[itemId]) {
                try {
                    let item = cartItems[itemId][variantName];
                    if (item.quantity > 0) totalAmount += item.price * item.quantity;
                } catch (error) {}
            }
        }
        return totalAmount; // Do not include delivery fee here
    };

    // Fetch products
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) setProducts(response.data.products.reverse());
            else toast.error(response.data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Fetch user cart
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) setCartItems(response.data.cartData);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => { getProductsData(); }, []);
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
        if (token) getUserCart(token);
    }, [token]);

    const value = {
        products,
        currency,
        cartItems,
        addToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
        deliveryLocation,
        setDeliveryLocation, // Allow changing location from PlaceOrder.jsx
    };

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
