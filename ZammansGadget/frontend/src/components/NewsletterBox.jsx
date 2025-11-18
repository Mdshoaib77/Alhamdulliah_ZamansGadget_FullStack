import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterBox = () => {

  const [status, setStatus] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "9fcf44a6-7821-4715-bba7-3df1f4bba2f1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Thank you for subscribing!");
        event.target.reset();
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try later.");
    }
  };

  return (
    <div className="px-4 py-16 bg-white sm:px-8 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 py-12 mx-auto text-center bg-white border shadow-lg rounded-3xl sm:px-16"
      >
        <p className="mb-4 text-2xl font-bold text-black md:text-3xl">
          🎉 Visit our Shop & Get Up to<span className="text-yellow-500"> 10% OFF</span>
        </p>
        <p className="max-w-md mx-auto mb-6 text-sm text-gray-600 sm:text-base">
          Subscribe now and be the first to hear about new gadgets, exclusive deals, and special offers.
        </p>

        <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
          <input 
            className="w-full px-5 py-3 text-black bg-gray-100 rounded-full shadow-sm outline-none sm:w-2/3 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300" 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required 
          />
          <button 
            type="submit" 
            className="px-8 py-3 font-semibold text-black transition bg-yellow-300 rounded-full hover:bg-yellow-400"
          >
            Subscribe Now
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
      </motion.div>
    </div>
  );
};

export default NewsletterBox;


