import { v2 as cloudinary } from 'cloudinary';
import productModel from "../models/productModel.js";

// Fixed categories
const fixedCategories = [
  "Official Phones", "Unofficial Phones", "Used Phones",
  "Adapter & Cables", "PowerBank", "Airbuds", "Earphones",
  "Neckband", "Gaming Accessories", "Speakers",
  "Cover & Glass", "Smart Watch"
];

// =======================
// ✅ Add Product
// =======================
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller, outOfStock, colors, variants, specifications } = req.body;

    if (!fixedCategories.includes(category))
      return res.status(400).json({ success: false, message: "Invalid category" });
    if (category === "Official Phones" && !subCategory)
      return res.status(400).json({ success: false, message: "Subcategory is required for Official Phones" });

    const files = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0]
    ].filter(Boolean);

    const imagesUrl = await Promise.all(
      files.map(file =>
        cloudinary.uploader.upload(file.path, { resource_type: "image" })
          .then(result => result.secure_url)
      )
    );

    const parseJSON = (data) => {
      try { return data ? JSON.parse(data) : []; }
      catch { return []; }
    };

    const productData = {
      name,
      description,
      category,
      subCategory: subCategory || null,
      price: Number(price) || 0,
      bestseller: bestseller === "true" || bestseller === true,
      outOfStock: outOfStock === "true" || outOfStock === true,
      sizes: parseJSON(sizes),
      colors: parseJSON(colors),
      variants: parseJSON(variants),
      specifications: parseJSON(specifications),
      image: imagesUrl,
      date: Date.now()
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ List Products
// =======================
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Remove Product
// =======================
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Product Removed Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Single Product
// =======================
const singleProduct = async (req, res) => {
  try {
    const { id } = req.body; // Changed from productId to id to match frontend
    const product = await productModel.findById(id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Get Categories
// =======================
const getCategories = async (req, res) => {
  try {
    res.json({ success: true, categories: fixedCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Get Products by Category/Subcategory
// =======================
const getProductsByCategory = async (req, res) => {
  try {
    const { category, subCategory } = req.query;
    if (!category) return res.status(400).json({ success: false, message: "Category required" });
    const query = { category };
    if (subCategory) query.subCategory = subCategory;
    const products = await productModel.find(query);
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Get Featured Products
// =======================
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await productModel.find({ bestseller: true });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// 🟣 Update/Edit Product
// =======================
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // product ID
    const updatedData = req.body;

    const files = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0]
    ].filter(Boolean);

    if (files.length > 0) {
      const imagesUrl = await Promise.all(
        files.map(file =>
          cloudinary.uploader.upload(file.path, { resource_type: "image" })
            .then(result => result.secure_url)
        )
      );
      updatedData.image = imagesUrl;
    }

    const parseJSON = (data) => {
      try { return data ? JSON.parse(data) : []; }
      catch { return []; }
    };

    if (updatedData.sizes) updatedData.sizes = parseJSON(updatedData.sizes);
    if (updatedData.colors) updatedData.colors = parseJSON(updatedData.colors);
    if (updatedData.variants) updatedData.variants = parseJSON(updatedData.variants);
    if (updatedData.specifications) updatedData.specifications = parseJSON(updatedData.specifications);

    if (updatedData.outOfStock) updatedData.outOfStock = updatedData.outOfStock === "true" || updatedData.outOfStock === true;  // Handle outOfStock

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ success: false, message: "Product not found" });

    res.json({ success: true, message: "Product Updated Successfully", product: updatedProduct });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =======================
// ✅ Export all functions
// =======================
export { 
  addProduct, 
  listProducts, 
  removeProduct, 
  singleProduct, 
  getCategories, 
  getProductsByCategory, 
  getFeaturedProducts, 
  updateProduct 
};
