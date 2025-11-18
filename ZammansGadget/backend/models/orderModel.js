import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  variant: { type: String, required: false },  // e.g., "8/128"
  color: { type: String, required: false },    // e.g., "Lavender"
}, { _id: false });

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  items: { type: [orderItemSchema], required: true },

  amount: { type: Number, required: true },

  deliveryCharge: { type: Number, required: true }, // ✅ Add delivery charge

  address: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },

  status: { type: String, required: true, default: 'Order Placed' },

  paymentMethod: { type: String, required: true },

  payment: { type: Boolean, required: true, default: false },

  date: { type: Number, required: true, default: () => Date.now() }
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
