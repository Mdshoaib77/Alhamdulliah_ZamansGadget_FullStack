import mongoose from 'mongoose';

const categoryOptions = [
  "Official Phones", "Unofficial Phones", "Used Phones",
  "Adapter & Cables", "PowerBank", "Airbuds", "Earphones",
  "Neckband", "Gaming Accessories", "Speakers",
  "Cover & Glass", "Smart Watch"
];

const officialPhoneSubCategories = [
  "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
];

const variantSchema = new mongoose.Schema({
  variant: { type: String, required: true },
  colors: { type: [String], required: true },
  regularPrice: { type: Number, required: true },
  offerPrice: { type: Number, default: 0 }
}, { _id: false });

const specificationSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: categoryOptions, required: true },
  subCategory: { 
    type: String, 
    validate: {
      validator: function(value) {
        if(this.category === "Official Phones") return officialPhoneSubCategories.includes(value);
        return true;
      },
      message: props => `${props.value} is not a valid subCategory for ${this.category}`
    },
    required: function() { return this.category === "Official Phones"; },
    default: null
  },
  bestseller: { type: Boolean, default: false },
  outOfStock: { type: Boolean, default: false },  // Changed soldOut to outOfStock
  sizes: { type: [String], default: [] },
  colors: { type: [String], default: [] },
  image: { type: [String], default: [] },
  variants: { type: [variantSchema], default: [] },
  specifications: { type: [specificationSchema], default: [] },
  date: { type: Date, default: Date.now }
});

const productModel = mongoose.model('Product', productSchema);
export default productModel;
