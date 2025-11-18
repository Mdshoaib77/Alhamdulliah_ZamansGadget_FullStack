import orderModel from "../models/orderModel.js"; 
import userModel from "../models/userModel.js";

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { items, amount, address, deliveryCharge } = req.body;

        if (!items || !amount || !address?.fullName || !address?.phone || !address?.address || deliveryCharge === undefined) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Format items with variant and color info
        const formattedItems = items.map((item) => ({
            productId: item.productId || item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.variant?.price || item.price,
            variant: item.variant?.variantName || "N/A",
            color: item.variant?.color || "N/A",
        }));

        const orderData = {
            userId,
            items: formattedItems,
            address,
            amount, // frontend e already getCartAmount() + deliveryCharge
            deliveryCharge, // ✅ add this field
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
            status: "Pending"
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear user's cart after order placement
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// other functions remain same
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const userOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { placeOrder, allOrders, userOrders, updateStatus };
