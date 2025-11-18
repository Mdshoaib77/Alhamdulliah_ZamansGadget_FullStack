import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>
            <motion.div
                className='py-8 text-3xl text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-sm italic font-bold leading-relaxed tracking-wider text-gray-700 sm:text-base md:text-lg">
                    Discover the latest and coolest phone to elevate your mobile experience.
                </p>
            </motion.div>

            <motion.div
                className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                {
                    bestSeller.map((item) => (
                        <div key={item._id} className="relative group">
                            {/* "Out of Stock" label */}
                            {item.outOfStock && (
                                <div className="absolute left-0 z-30 px-4 py-1 text-xs font-bold text-white transform scale-110 bg-red-600 rounded-md shadow-xl pointer-events-none select-none top-8 rotate-12 opacity-90 sm:text-sm sm:px-5 sm:py-2 sm:top-8 sm:left-4 sm:scale-100">
                                    OUT OF STOCK
                                </div>
                            )}
                            <ProductItem 
                                id={item._id} 
                                name={item.name} 
                                image={item.image} 
                                price={item.price} 
                            />
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default BestSeller;
