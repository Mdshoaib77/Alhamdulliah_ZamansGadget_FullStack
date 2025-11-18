import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, deliveryLocation } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const variantName in cartItems[productId]) {
          const item = cartItems[productId][variantName];
          if (item.quantity > 0) {
            tempData.push({
              _id: productId,
              variant: variantName,
              quantity: item.quantity,
              price: item.price,
              color: item.color,
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14 mt-11'>

      <div className='mb-3 text-2xl '>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.length === 0 ? (
            <p className='py-20 text-center text-gray-500'>Your cart is empty.</p>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find(product => product._id === item._id);

              if (!productData) return null;

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6 '>
                    <img className='w-16 rounded-md sm:w-20' src={productData.image[0]} alt={productData.name} />
                    <div>
                      <p className='text-xs font-medium sm:text-lg'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{item.price}</p>
                        {item.variant !== 'default' && (
                          <p className='px-2 border sm:px-3 sm:py-1 bg-slate-50'>{item.variant}</p>
                        )}
                      </div>

                      {/* ✅ Updated color display */}
                      {item.color && (
                        <div className='flex items-center gap-2 mt-1'>
                          <div
                            className='w-6 h-6 border rounded-full'
                            style={{ backgroundColor: item.color }}
                            title={item.color}
                          ></div>
                          <span className="text-xs text-gray-600">{item.color}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '' || val === '0') return;
                      updateQuantity(item._id, item.variant, Number(val));
                    }}
                    className='px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2'
                    type="number"
                    min={1}
                    value={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.variant, 0)}
                    className='w-4 mr-4 cursor-pointer sm:w-5'
                    src={assets.bin_icon}
                    alt="Remove"
                  />
                </div>
              );
            })
          )
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          {/* CartTotal component here */}
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='px-8 py-3 my-8 text-sm text-white bg-black'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
