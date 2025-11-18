import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      {/* Title */}
      <motion.div
        className="py-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title text1={'LATEST'} text2={'ARRIVAL'} />
      </motion.div>

      {/* Swiper Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            enabled: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              navigation: false,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              navigation: false,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              navigation: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 2,
              navigation: true,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 2,
              navigation: true,
            },
          }}
        >
          {latestProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-auto mb-6 group">
                {/* ✅ Out of Stock label (same style as FeaturedProducts) */}
                {item.outOfStock && (
                  <div className="absolute z-30 px-4 py-1 text-xs font-bold text-white transform scale-110 bg-red-600 rounded-md shadow-xl pointer-events-none select-none left-1 top-8 rotate-12 opacity-90 sm:text-sm sm:px-5 sm:py-2 sm:top-8 sm:left-4 sm:scale-100">
                    OUT OF STOCK
                  </div>
                )}

                {/* Product Card */}
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default LatestCollection;
