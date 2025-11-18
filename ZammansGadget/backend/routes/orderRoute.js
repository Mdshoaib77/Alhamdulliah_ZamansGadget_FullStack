import express from 'express';
import { placeOrder, allOrders, userOrders, updateStatus } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRoute = express.Router();

// Admin Features
orderRoute.post('/list', adminAuth, allOrders);
orderRoute.post('/status', adminAuth, updateStatus);

// Payment Feature (Only Cash on Delivery)
orderRoute.post('/place', authUser, placeOrder);

// User Feature 
orderRoute.post('/userorders', authUser, userOrders);

export default orderRoute;
