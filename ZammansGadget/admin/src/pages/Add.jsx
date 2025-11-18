import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../App';
import { assets } from '../assets/assets';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [bestseller, setBestseller] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false); // Change soldOut to outOfStock

  const [variants, setVariants] = useState([]);
  const [variantInput, setVariantInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [variantRegularPriceInput, setVariantRegularPriceInput] = useState('');
  const [variantOfferPriceInput, setVariantOfferPriceInput] = useState('');

  const [specifications, setSpecifications] = useState([]);
  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');

  const categories = ["Official Phones", "Unofficial Phones", "Used Phones", "Adapter & Cables", "PowerBank", "Airbuds", "Earphones", "Neckband", "Gaming Accessories", "Speakers", "Cover & Glass", "Smart Watch"];
  const officialPhoneSubCategories = ["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"];

  const addVariant = () => {
    if (!variantInput || !colorInput || !variantRegularPriceInput) return toast.error("Fill all fields");
    const colors = colorInput.split(',').map(c => c.trim()).filter(c => c);
    setVariants([...variants, { variant: variantInput, colors, regularPrice: Number(variantRegularPriceInput), offerPrice: Number(variantOfferPriceInput || 0) }]);
    setVariantInput(''); setColorInput(''); setVariantRegularPriceInput(''); setVariantOfferPriceInput('');
  };

  const removeVariant = (index) => setVariants(variants.filter((_, i) => i !== index));

  const addSpecification = () => {
    if (!specKey || !specValue) return toast.error("Fill key and value");
    setSpecifications([...specifications, { key: specKey, value: specValue }]);
    setSpecKey(''); setSpecValue('');
  };

  const removeSpecification = (index) => setSpecifications(specifications.filter((_, i) => i !== index));

  const handleCategoryChange = (e) => { setCategory(e.target.value); setSubCategory(''); };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price || '0');
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('outOfStock', outOfStock); // Use outOfStock instead of soldOut
      formData.append('variants', JSON.stringify(variants));
      formData.append('specifications', JSON.stringify(specifications));
      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });
      if (response.data.success) toast.success(response.data.message);
      else toast.error(response.data.message);
    } catch (err) { console.error(err); toast.error("Server Error"); }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full gap-3">
      {/* Images */}
      <div className="flex gap-2">
        {[image1, image2, image3, image4].map((img, idx) => (
          <label key={idx} className="cursor-pointer">
            <img className="object-cover w-20 h-20 border rounded" src={img ? URL.createObjectURL(img) : assets.upload_area} />
            <input type="file" hidden onChange={e => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])} />
          </label>
        ))}
      </div>

      {/* Name and Description */}
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="px-3 py-2 border rounded" required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="px-3 py-2 border rounded" required />

      {/* Category & SubCategory */}
      <select value={category} onChange={handleCategoryChange} className="px-3 py-2 border rounded" required>
        <option value="">Select Category</option>
        {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </select>
      {category === "Official Phones" && (
        <select value={subCategory} onChange={e => setSubCategory(e.target.value)} className="px-3 py-2 border rounded" required>
          <option value="">Select SubCategory</option>
          {officialPhoneSubCategories.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
      )}

      {/* Price */}
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="px-3 py-2 border rounded" />

      {/* Variants */}
      <div className="flex flex-wrap gap-2 mt-2">
        <input placeholder="Variant" value={variantInput} onChange={e => setVariantInput(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Colors comma separated" value={colorInput} onChange={e => setColorInput(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Regular Price" value={variantRegularPriceInput} onChange={e => setVariantRegularPriceInput(e.target.value)} type="number" className="px-2 py-1 border rounded" />
        <input placeholder="Offer Price" value={variantOfferPriceInput} onChange={e => setVariantOfferPriceInput(e.target.value)} type="number" className="px-2 py-1 border rounded" />
        <button type="button" onClick={addVariant} className="px-3 py-1 text-white bg-black rounded">Add Variant</button>
      </div>

      {/* Variant List */}
      <ul>{variants.map((v, i) => <li key={i}>{v.variant} - {v.colors.join(', ')} - ৳{v.regularPrice} {v.offerPrice ? `| Offer: ৳${v.offerPrice}` : ''} <button type="button" onClick={() => removeVariant(i)} className="text-red-500">Remove</button></li>)}</ul>

      {/* Specifications */}
      <div className="flex flex-wrap gap-2 mt-2">
        <input placeholder="Key" value={specKey} onChange={e => setSpecKey(e.target.value)} className="px-2 py-1 border rounded" />
        <input placeholder="Value" value={specValue} onChange={e => setSpecValue(e.target.value)} className="px-2 py-1 border rounded" />
        <button type="button" onClick={addSpecification} className="px-3 py-1 text-white bg-black rounded">Add Spec</button>
      </div>
      <ul>{specifications.map((s, i) => <li key={i}>{s.key}: {s.value} <button type="button" onClick={() => removeSpecification(i)} className="text-red-500">Remove</button></li>)}</ul>

      {/* Bestseller and Out of Stock */}
      <label><input type="checkbox" checked={bestseller} onChange={() => setBestseller(prev => !prev)} /> Bestseller</label>
      <label><input type="checkbox" checked={outOfStock} onChange={() => setOutOfStock(prev => !prev)} /> Out of Stock</label>

      {/* Submit Button */}
      <button type="submit" className="px-4 py-2 mt-2 text-white bg-black rounded">ADD PRODUCT</button>
    </form>
  );
};

export default Add;
