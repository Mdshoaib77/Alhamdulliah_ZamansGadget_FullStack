import React from 'react'; 
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to navigate to the respective category
  const handleStripeClick = () => {
    navigate('/collection?category=' + encodeURIComponent('Earphones'));
  };

  const handleRazorpayClick = () => {
    navigate('/collection?category=' + encodeURIComponent('Adapter & Cables'));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* Header Section */}
      <motion.div
        className="flex flex-col w-full gap-4 px-0 mt-20 lg:flex-row"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Large Image */}
        <div className="w-full lg:w-2/3">
          <img
            src={assets.hero_img}
            alt="Hero Banner"
            className="object-cover w-full h-full max-h-[600px] rounded"
          />
        </div>

        {/* Right Images */}
        <div className="flex flex-col w-full gap-4 lg:w-1/3">
          {/* Large Screen: column */}
          <img
            src={assets.stripe_logo}
            alt="Stripe Logo"
            className="object-cover w-full h-full max-h-[295px] rounded hidden lg:block cursor-pointer"
            onClick={handleStripeClick} // On click navigate to Earphones category
          />
          <img
            src={assets.razorpay_logo}
            alt="Razorpay Logo"
            className="object-cover w-full h-full max-h-[295px] rounded hidden lg:block cursor-pointer"
            onClick={handleRazorpayClick} // On click navigate to Adapter & Cables category
          />

          {/* Small Screen: row */}
          <div className="flex flex-row gap-4 lg:hidden">
            <img
              src={assets.stripe_logo}
              alt="Stripe Logo"
              className="object-cover w-1/2 h-full rounded cursor-pointer"
              onClick={handleStripeClick} // On click navigate to Earphones category
            />
            <img
              src={assets.razorpay_logo}
              alt="Razorpay Logo"
              className="object-cover w-1/2 h-full rounded cursor-pointer"
              onClick={handleRazorpayClick} // On click navigate to Adapter & Cables category
            />
          </div>
        </div>
      </motion.div>

      {/* Online Support Section */}
      {/* <motion.div
        className="flex flex-col items-center justify-center w-full px-4 py-12 mt-8 space-y-6 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Online Support
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/zamansgadget"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://wa.me/8801723220078"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white transition bg-green-500 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Hero;
