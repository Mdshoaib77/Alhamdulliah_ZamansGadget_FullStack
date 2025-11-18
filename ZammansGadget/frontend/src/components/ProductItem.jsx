// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const navigate = useNavigate();

//   const productImage = Array.isArray(image) && image.length > 0
//     ? image[0]
//     : image || 'https://via.placeholder.com/400x300';

//   const goToProductPage = () => {
//     navigate(`/product/${id}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="flex flex-col justify-between transition-shadow duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl hover:shadow-md"
//     >
//       {/* Product Image and Title */}
//       <Link
//         onClick={() => window.scrollTo(0, 0)}
//         to={`/product/${id}`}
//         className="block group"
//       >
//         <div className="overflow-hidden rounded-t-xl">
//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 200 }}
//             src={productImage}
//             alt={name}
//             className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <p className="mb-1 font-semibold text-gray-900 truncate transition-colors duration-300 group-hover:text-cyan-600">
//             {name}
//           </p>
//           <p className="text-sm font-medium text-gray-600">
//             ৳ BDT {price}
//           </p>
//         </div>
//       </Link>

//       {/* Responsive Buttons */}
//       <div className="flex flex-col w-full gap-2 px-4 pt-0 pb-4 sm:flex-row">
//         <button
//           onClick={goToProductPage}
//           className="flex-1 w-full py-2 text-xs font-semibold text-center text-white transition bg-orange-600 rounded-lg shadow sm:w-auto hover:bg-orange-700 active:bg-orange-800"
//           aria-label={`Buy now ${name}`}
//         >
//           Buy Now
//         </button>
//         <button
//           onClick={goToProductPage}
//           className="flex-1 w-full py-2 text-xs font-semibold text-center text-orange-600 transition border border-orange-600 rounded-lg sm:w-auto hover:bg-orange-50 active:bg-orange-100"
//           aria-label={`Add ${name} to cart`}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductItem;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductItem = ({ id, image, name, price }) => {
  const navigate = useNavigate();

  const productImage = Array.isArray(image) && image.length > 0
    ? image[0]
    : image || 'https://via.placeholder.com/400x300';

  const goToProductPage = () => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col justify-between transition-shadow duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl hover:shadow-md"
    >
      {/* Product Image and Title */}
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={`/product/${id}`}
        className="block group"
      >
        <div className="overflow-hidden rounded-t-xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            src={productImage}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 md:h-64"
          />
        </div>
        <div className="p-4 text-center">
          {/* Updated Product Name with wrapping */}
          <p className="mb-1 font-semibold text-gray-900 break-words transition-colors duration-300 group-hover:text-cyan-600">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-600">
            ৳ BDT {price}
          </p>
        </div>
      </Link>

      {/* Responsive Buttons */}
      <div className="flex flex-col w-full gap-2 px-4 pt-0 pb-4 sm:flex-row">
        <button
          onClick={goToProductPage}
          className="flex-1 w-full py-2 text-xs font-semibold text-center text-white transition bg-orange-600 rounded-lg shadow sm:w-auto hover:bg-orange-700 active:bg-orange-800"
          aria-label={`Buy now ${name}`}
        >
          Buy Now
        </button>
        <button
          onClick={goToProductPage}
          className="flex-1 w-full py-2 text-xs font-semibold text-center text-orange-600 transition border border-orange-600 rounded-lg sm:w-auto hover:bg-orange-50 active:bg-orange-100"
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductItem;
