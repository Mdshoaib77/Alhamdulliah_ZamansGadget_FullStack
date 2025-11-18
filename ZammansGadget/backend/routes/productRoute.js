import express from 'express';
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  getCategories,
  getProductsByCategory,
  getFeaturedProducts,
  updateProduct
} from '../controllers/productController.js';

import { productUpload } from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Add Product Route
productRouter.post('/add', adminAuth, productUpload, addProduct);

// Remove Product Route
productRouter.post('/remove', adminAuth, removeProduct);

// Single Product Route (to get product details)
productRouter.post('/single', singleProduct);

// Update Product Route
productRouter.put('/update/:id', adminAuth, productUpload, updateProduct);

// List All Products Route
productRouter.get('/list', listProducts);

// Get All Categories Route
productRouter.get('/categories', getCategories);

// Get Products by Category/SubCategory Route
productRouter.get('/category-products', getProductsByCategory);

// Get Featured Products Route
productRouter.get('/featured', getFeaturedProducts);

export default productRouter;
