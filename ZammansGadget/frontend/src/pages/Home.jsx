import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import LatestCollection from '../components/LatestCollection';
import FeaturedProducts from '../components/FeaturedProducts'; // ✅ import this instead of BestSeller
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <LatestCollection />
      <FeaturedProducts /> {/* ✅ Replaced BestSeller with tab-based FeaturedProducts */}
      {/* <OurPolicy /> */}
      <NewsletterBox />
    </div>
  );
};

export default Home;