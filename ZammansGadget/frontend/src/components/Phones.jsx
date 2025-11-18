import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const Phones = () => {
  const { products } = useContext(ShopContext);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const phoneList = products.filter((item) => item.category === 'official phones');
    setPhones(phoneList);
  }, [products]);

  return (
    <div>
      <motion.h3
        className="mb-3 text-xl font-bold text-blue-600"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Phones
      </motion.h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {phones.length > 0 ? (
          phones.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-gray-500">No official phones found.</p>
        )}
      </div>
    </div>
  );
};

export default Phones;
