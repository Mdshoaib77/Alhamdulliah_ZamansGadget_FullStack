import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            // Attach order level info to each item
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            item.orderId = order._id; // 🆕 Add orderId
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='pt-16 mt-10 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image || ''} alt={item.title || 'Product Image'} />
              <div>
                <p className='font-medium sm:text-base'>{item.title || item.name}</p>

                <div className='flex flex-wrap items-center gap-3 mt-1 text-base text-gray-700'>
                  <p>Price: {currency}{item.variant?.price ?? item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Variant: {item.variant?.variantName || item.variant || 'N/A'}</p>
                  <p>Color: {item.variant?.color?.name || item.color || 'N/A'}</p>
                  {item.variant?.color?.code && (
                    <div className='flex items-center gap-1'>
                      <p>Color Code:</p>
                      <div
                        className='w-4 h-4 border rounded-full'
                        style={{ backgroundColor: item.variant.color.code }}
                      ></div>
                    </div>
                  )}
                </div>

                <p className='mt-1'>
                  Date:{' '}
                  <span className='text-gray-400 '>
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className='mt-1'>
                  Payment:{' '}
                  <span className='text-gray-400 '>{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className='flex justify-between md:w-1/2'>
              <div className='flex items-center gap-2'>
                <p className='h-2 bg-green-500 rounded-full min-w-2'></p>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>

              {/* ✅ WhatsApp Track Order Button */}
              <a
                href={`https://wa.me/8801723220078?text=Hello%2C%20I%20want%20to%20track%20my%20order%20(ID:%20${item.orderId})`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-center border rounded-sm"
              >
                Track Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;


// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const {
//     navigate,
//     backendUrl,
//     token,
//     cartItems,
//     setCartItems,
//     getCartAmount,
//     products,
//     deliveryArea,
//     setDeliveryArea
//   } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.phone || !formData.address) {
//       toast.error('Please fill in all the fields.');
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const productId in cartItems) {
//         for (const variantKey in cartItems[productId]) {
//           const cartData = cartItems[productId][variantKey]; // { quantity, color, price }
//           if (cartData.quantity > 0) {
//             const product = products.find(p => p._id === productId);
//             if (product) {
//               orderItems.push({
//                 productId,
//                 title: product.name,
//                 image: product.image && product.image.length > 0 ? product.image[0] : '',
//                 variant: variantKey,
//                 color: cartData.color || '',
//                 price: cartData.price,
//                 quantity: cartData.quantity,
//               });
//             }
//           }
//         }
//       }

//       const deliveryCharge = deliveryArea === 'Inside Bogura' ? 60 : 150;

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         deliveryArea,
//         deliveryCharge,
//         amount: getCartAmount() + deliveryCharge
//       };

//       const response = await axios.post(
//         backendUrl + '/api/order/place',
//         orderData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         setCartItems({});
//         toast.success("Order placed successfully!");
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='my-3 text-xl sm:text-2xl'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         {/* Full Name */}
//         <input
//           required
//           name="fullName"
//           value={formData.fullName}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="text"
//           placeholder='Full Name'
//         />

//         {/* Phone Number */}
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="number"
//           placeholder='Phone Number'
//         />

//         {/* Full Address */}
//         <textarea
//           required
//           name="address"
//           value={formData.address}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
//           placeholder='Full Address'
//         />

//         {/* Delivery Area */}
//         <div className='mt-4'>
//           <label className='block mb-2 font-medium'>Delivery Area:</label>
//           <select
//             value={deliveryArea}
//             onChange={(e) => setDeliveryArea(e.target.value)}
//             className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           >
//             <option value="Inside Bogura">Inside Bogura</option>
//             <option value="Outside Bogura">Outside Bogura</option>
//           </select>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//           <p className='mt-2'>
//             Delivery Charge: <span className='font-bold'>{deliveryArea === 'Inside Bogura' ? '৳60' : '৳150'}</span>
//           </p>
//           <p className='mt-1'>
//             Total Amount: <span className='font-bold'>৳{getCartAmount() + (deliveryArea === 'Inside Bogura' ? 60 : 150)}</span>
//           </p>
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex items-center gap-3 p-2 px-3 border'>
//             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
//             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
//           </div>

//           <div className='w-full mt-8 text-end'>
//             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;
