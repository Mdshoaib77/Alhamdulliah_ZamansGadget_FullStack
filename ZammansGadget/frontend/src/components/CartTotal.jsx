// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {

//     const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

//   return (
//     <div className='w-full'>
//       <div className='text-2xl'>
//         <Title text1={'CART'} text2={'TOTALS'} />
//       </div>

//       <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>Subtotal</p>
//                 <p>{currency} {getCartAmount()}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <p>Shipping Fee</p>
//                 <p>{currency} {delivery_fee}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default CartTotal


// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// const CartTotal = () => {
//     const { currency, deliveryLocation, getCartAmount } = useContext(ShopContext);

//     // Calculate delivery fee based on the location (Inside or Outside Bogura)
//     const deliveryFee = deliveryLocation === 'Inside Bogura' ? 60 : 150;

//     // Format the amounts to 2 decimal places
//     const formattedCartAmount = getCartAmount().toFixed(2);
//     const formattedTotal = (getCartAmount() + deliveryFee).toFixed(2);

//     return (
//         <div className='w-full'>
//             <div className='text-2xl'>
//                 <Title text1={'CART'} text2={'TOTALS'} />
//             </div>

//             <div className='flex flex-col gap-2 mt-2 text-sm'>
//                 <div className='flex justify-between'>
//                     <p>Subtotal</p>
//                     <p>{currency} {formattedCartAmount}</p>
//                 </div>
//                 <hr />
//                 <div className='flex justify-between'>
//                     <p>Shipping Fee</p>
//                     <p>{currency} {deliveryFee}.00</p>
//                 </div>
//                 <hr />
//                 <div className='flex justify-between'>
//                     <b>Total</b>
//                     <b>{currency} {formattedTotal}</b>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartTotal;


import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, deliveryLocation, getCartAmount } = useContext(ShopContext);

    // Calculate delivery fee based on the location (Inside or Outside Bogura)
    const deliveryFee = deliveryLocation === 'Inside Bogura' ? 60 : 150;

    // Format the amounts to 2 decimal places
    const formattedCartAmount = getCartAmount().toFixed(2); // Subtotal amount (product total)
    const formattedTotal = (parseFloat(formattedCartAmount) + deliveryFee).toFixed(2); // Total including delivery fee

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {formattedCartAmount}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {deliveryFee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {formattedTotal}</b>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
