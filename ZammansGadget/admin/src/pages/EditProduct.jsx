import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";

const EditProduct = ({ token }) => {
  const { id } = useParams();

  // ---------------- States (Same as Add.jsx)
  const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false); // Changed from soldOut to outOfStock

  const [variants, setVariants] = useState([]);
  const [variantInput, setVariantInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [variantRegularPriceInput, setVariantRegularPriceInput] = useState("");
  const [variantOfferPriceInput, setVariantOfferPriceInput] = useState("");

  const [specifications, setSpecifications] = useState([]);
  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");

  const categories = ["Official Phones", "Unofficial Phones", "Used Phones", "Adapter & Cables", "PowerBank", "Airbuds", "Earphones", "Neckband", "Gaming Accessories", "Speakers", "Cover & Glass", "Smart Watch"];
  const officialPhoneSubCategories = ["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"];

  // ---------------- Fetch existing product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.post(`${backendUrl}/api/product/single`, { id });
        if (res.data.success) {
          const p = res.data.product;

          // Images
          setImages(p.image || [null, null, null, null]);

          // Basic Info
          setName(p.name);
          setDescription(p.description);
          setPrice(p.price);
          setCategory(p.category);
          setSubCategory(p.subCategory || "");
          setBestseller(p.bestseller);
          setOutOfStock(p.outOfStock); // Changed from soldOut to outOfStock

          // Variants & Specs
          setVariants(p.variants || []);
          setSpecifications(p.specifications || []);
        } else toast.error(res.data.message);
      } catch (err) { toast.error("Failed to load product"); }
    };
    fetchProduct();
  }, [id]);

  // ---------------- Variant handlers
  const addVariant = () => {
    if (!variantInput || !colorInput || !variantRegularPriceInput) return toast.error("Fill all fields");
    const colors = colorInput.split(',').map(c => c.trim()).filter(c => c);
    setVariants([...variants, { variant: variantInput, colors, regularPrice: Number(variantRegularPriceInput), offerPrice: Number(variantOfferPriceInput || 0) }]);
    setVariantInput(''); setColorInput(''); setVariantRegularPriceInput(''); setVariantOfferPriceInput('');
  };

  const removeVariant = (i) => setVariants(variants.filter((_, idx) => idx !== i));

  // ---------------- Specification handlers
  const addSpecification = () => {
    if (!specKey || !specValue) return toast.error("Fill key and value");
    setSpecifications([...specifications, { key: specKey, value: specValue }]);
    setSpecKey(''); setSpecValue('');
  };

  const removeSpecification = (i) => setSpecifications(specifications.filter((_, idx) => idx !== i));

  // ---------------- Category handler
  const handleCategoryChange = (e) => { setCategory(e.target.value); setSubCategory(''); };

  // ---------------- Update Product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price || "0");
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("outOfStock", outOfStock); // Changed from soldOut to outOfStock
      formData.append("variants", JSON.stringify(variants));
      formData.append("specifications", JSON.stringify(specifications));

      images.forEach((img, idx) => {
        if (img instanceof File) formData.append(`image${idx + 1}`, img);
      });

      const res = await axios.put(`${backendUrl}/api/product/update/${id}`, formData, { headers: { token } });
      if (res.data.success) toast.success(res.data.message);
      else toast.error(res.data.message);
    } catch (err) { console.error(err); toast.error("Update failed"); }
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col w-full gap-3">
      <div className="flex gap-2">
        {images.map((img, idx) => (
          <label key={idx} className="cursor-pointer">
            <img className="object-cover w-20 h-20 border rounded" src={img ? (typeof img === 'string' ? img : URL.createObjectURL(img)) : assets.upload_area} />
            <input type="file" hidden onChange={e => {
              const newImages = [...images];
              newImages[idx] = e.target.files[0];
              setImages(newImages);
            }} />
          </label>
        ))}
      </div>

      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="px-3 py-2 border rounded" required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="px-3 py-2 border rounded" required />

      <select value={category} onChange={handleCategoryChange} className="px-3 py-2 border rounded" required>
        <option value="">Select Category</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      {category === "Official Phones" && (
        <select value={subCategory} onChange={e => setSubCategory(e.target.value)} className="px-3 py-2 border rounded" required>
          <option value="">Select SubCategory</option>
          {officialPhoneSubCategories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      )}

      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="px-3 py-2 border rounded" />

      {/* Variants */}
      <div className="flex flex-wrap gap-2 mt-2">
        <input placeholder="Variant" value={variantInput} onChange={e => setVariantInput(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Colors comma separated" value={colorInput} onChange={e => setColorInput(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Regular Price" value={variantRegularPriceInput} onChange={e => setVariantRegularPriceInput(e.target.value)} type="number" className="px-2 py-1 border rounded" />
        <input placeholder="Offer Price" value={variantOfferPriceInput} onChange={e => setVariantOfferPriceInput(e.target.value)} type="number" className="px-2 py-1 border rounded" />
        <button type="button" onClick={addVariant} className="px-3 py-1 text-white bg-black rounded">Add Variant</button>
      </div>
      <ul>{variants.map((v, i) => <li key={i}>{v.variant} - {v.colors.join(', ')} - ৳{v.regularPrice}{v.offerPrice ? ` | Offer: ৳${v.offerPrice}` : ''} <button type="button" onClick={() => removeVariant(i)} className="text-red-500">Remove</button></li>)}</ul>

      {/* Specifications */}
      <div className="flex flex-wrap gap-2 mt-2">
        <input placeholder="Key" value={specKey} onChange={e => setSpecKey(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Value" value={specValue} onChange={e => setSpecValue(e.target.value)} className="px-2 py-1 border rounded" />
        <button type="button" onClick={addSpecification} className="px-3 py-1 text-white bg-black rounded">Add Spec</button>
      </div>
      <ul>{specifications.map((s, i) => <li key={i}>{s.key}: {s.value} <button type="button" onClick={() => removeSpecification(i)} className="text-red-500">Remove</button></li>)}</ul>

      <label><input type="checkbox" checked={bestseller} onChange={() => setBestseller(prev => !prev)} /> Bestseller</label>
      <label><input type="checkbox" checked={outOfStock} onChange={() => setOutOfStock(prev => !prev)} /> Out of Stock</label>

      <button type="submit" className="px-4 py-2 mt-2 text-white bg-black rounded">UPDATE PRODUCT</button>
    </form>
  );
};

export default EditProduct;
