import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const OurPolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base"
    >
      
      {/* Easy Exchange */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </motion.div>

      {/* 3 Days Return */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Return" />
        <p className="font-semibold">3 Days Return Policy</p>
        <p className="text-gray-400">We provide 3 days free return policy</p>
      </motion.div>

      {/* Best Customer Support */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </motion.div>

    </motion.div>
  );
};

export default OurPolicy;
