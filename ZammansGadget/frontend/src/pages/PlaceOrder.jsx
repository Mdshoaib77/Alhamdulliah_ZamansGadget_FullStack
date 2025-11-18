import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, products, deliveryLocation, setDeliveryLocation } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    deliveryLocation: deliveryLocation || 'Inside Bogura', // Default delivery location from context or fallback
  });

  // Handle changes in input fields and update the state accordingly
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));

    // If deliveryLocation changes, update the context
    if (name === 'deliveryLocation') {
      setDeliveryLocation(value); // Update delivery location in context
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.error('Please fill in all the fields.');
      return;
    }

    // Calculate the delivery fee based on the location selected
    const delivery_fee = formData.deliveryLocation === 'Inside Bogura' ? 60 : 150;

    try {
      let orderItems = [];

      // Loop through the cart items to prepare the order data
      for (const productId in cartItems) {
        for (const variantKey in cartItems[productId]) {
          const cartData = cartItems[productId][variantKey];
          if (cartData.quantity > 0) {
            const product = products.find(p => p._id === productId);
            if (product) {
              orderItems.push({
                productId,
                title: product.name,
                image: product.image && product.image.length > 0 ? product.image[0] : '',
                variant: variantKey,
                color: cartData.color || '',
                price: cartData.price,
                quantity: cartData.quantity,
              });
            }
          }
        }
      }

      // Prepare the order data with address and items
      const orderData = {
        address: {
          ...formData,
        },
        deliveryCharge: delivery_fee,
        items: orderItems,
        amount: getCartAmount() + delivery_fee, // Include delivery fee in the total
      };

      // Send the order data to the backend API
      const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

      if (response.data.success) {
        setCartItems({}); // Clear cart after successful order
        navigate('/orders'); // Redirect to orders page
      } else {
        toast.error(response.data.message); // Show error message if something went wrong
      }

    } catch (err) {
      toast.error(err.message); // Show error message if an exception occurs
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='my-3 text-xl sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        {/* Full Name Input */}
        <input
          required
          name="fullName"
          value={formData.fullName}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="text"
          placeholder='Full Name'
        />

        {/* Phone Number Input */}
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="number"
          placeholder='Phone Number'
        />

        {/* Address Textarea */}
        <textarea
          required
          name="address"
          value={formData.address}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
          placeholder='Full Address'
        />

        {/* Delivery Location Selection */}
        <select
          name="deliveryLocation"
          value={formData.deliveryLocation}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
        >
          <option value="Inside Bogura">Inside Bogura (৳60)</option>
          <option value="Outside Bogura">Outside Bogura (৳150)</option>
        </select>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        {/* Cart Total Component */}
        <div className='mt-8 min-w-80'>
          <CartTotal deliveryCharge={formData.deliveryLocation === 'Inside Bogura' ? 60 : 150} />
        </div>

        {/* Payment Method */}
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex items-center gap-3 p-2 px-3 border'>
            <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
            <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
          </div>

          {/* Submit Button */}
          <div className='w-full mt-8 text-end'>
            <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
