// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// // App Config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// // middlewares
// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)

// app.get('/',(req,res)=>{
//     res.send("API Working")
// })

// app.listen(port, ()=> console.log('Server started on PORT : '+ port))



// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;

// // Database & Cloudinary Connection
// connectDB();
// connectCloudinary();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Test Route
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // Server Start
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));




// import express from 'express'; 
// import cors from 'cors';
// import 'dotenv/config';  // Loads environment variables from .env file
// import connectDB from './config/mongodb.js';  // Database connection
// import connectCloudinary from './config/cloudinary.js';  // Cloudinary connection
// import userRouter from './routes/userRoute.js';  // User route import
// import productRouter from './routes/productRoute.js';  // Product route import
// import cartRouter from './routes/cartRoute.js';  // Cart route import
// import orderRouter from './routes/orderRoute.js';  // Order route import

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;  // Port from env variable or default to 4000

// // Connect to Database & Cloudinary
// connectDB();  // Connect to MongoDB
// connectCloudinary();  // Connect to Cloudinary for image uploads

// // Middlewares
// app.use(express.json());  // Parse JSON requests
// app.use(cors());  // Enable Cross-Origin Resource Sharing

// // API Routes (all API endpoints)
// app.use('/api/user', userRouter);  // User-related routes
// app.use('/api/product', productRouter);  // Product-related routes
// app.use('/api/cart', cartRouter);  // Cart-related routes
// app.use('/api/order', orderRouter);  // Order-related routes

// // Test Route (Optional, useful for checking server)
// app.get('/', (req, res) => {
//   res.send('API Working');
// });

// // Global Error Handling (Optional, improves server robustness)
// app.use((err, req, res, next) => {
//   console.error(err.stack);  // Log errors to the console
//   res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// // Start the Server
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));

// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';  // Loads environment variables from .env file
// import path from 'path';
// import { fileURLToPath } from 'url';

// import connectDB from './config/mongodb.js';  // Database connection
// import connectCloudinary from './config/cloudinary.js';  // Cloudinary connection
// import userRouter from './routes/userRoute.js';  // User route import
// import productRouter from './routes/productRoute.js';  // Product route import
// import cartRouter from './routes/cartRoute.js';  // Cart route import
// import orderRouter from './routes/orderRoute.js';  // Order route import

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;

// // Support ES Module __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Connect to Database & Cloudinary
// connectDB();
// connectCloudinary();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Serve frontend static files from dist/
// app.use(express.static(path.join(__dirname, 'dist')));

// // Fallback for frontend routes (SPA fix for Vercel)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// // Start server
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));

// export default app;
// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';  // Loads environment variables from .env file
// import path from 'path';
// import { fileURLToPath } from 'url';

// import connectDB from './config/mongodb.js';  // Database connection
// import connectCloudinary from './config/cloudinary.js';  // Cloudinary connection
// import userRouter from './routes/userRoute.js';  // User route import
// import productRouter from './routes/productRoute.js';  // Product route import
// import cartRouter from './routes/cartRoute.js';  // Cart route import
// import orderRouter from './routes/orderRoute.js';  // Order route import

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;

// // Support ES Module __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Connect to Database & Cloudinary
// connectDB();
// connectCloudinary();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Serve frontend static files from frontend/dist/
// app.use(express.static(path.join(__dirname, 'ZammansGadget', 'frontend', 'dist')));

// // Fallback for frontend routes (SPA fix for Vercel)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'ZammansGadget', 'frontend', 'dist', 'index.html'));
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// // Start server
// app.listen(port, () => console.log(`Server started on PORT : ${port}`));

// export default app;

// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import path from 'path';
// import { fileURLToPath } from 'url';

// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// const app = express();
// const port = process.env.PORT || 4000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// connectDB();
// connectCloudinary();

// app.use(express.json());
// app.use(cors());

// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Serve React frontend build static files
// app.use(express.static(path.join(__dirname, 'ZammansGadget', 'frontend', 'dist')));

// // SPA Fallback route for client side routing
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'ZammansGadget', 'frontend', 'dist', 'index.html'));
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, message: 'Something went wrong!' });
// });

// app.listen(port, () => console.log(`Server started on PORT : ${port}`));

// export default app;

// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import path from 'path';
// import { fileURLToPath } from 'url';

// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// const app = express();
// const port = process.env.PORT || 4000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Connect to Database & Cloudinary
// connectDB();
// connectCloudinary();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Serve static files from frontend/dist/
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// // Fallback route (SPA fix)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server started on PORT : ${port}`);
// });

// export default app;

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to Database & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Serve static files from frontend/dist/
// NOTE the '..' to go up from backend folder to root, then into frontend/dist
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Fallback route (SPA fix)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server started on PORT : ${port}`);
});

export default app;
