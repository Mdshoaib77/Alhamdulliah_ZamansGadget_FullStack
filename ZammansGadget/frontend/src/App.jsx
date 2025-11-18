import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Icons
import { FaWhatsapp, FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";

// ✅ Animation library
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      {/* Main Routes */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-8">
      {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>

      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed z-50 p-3 mb-32 text-white transition duration-300 bg-green-500 rounded-full shadow-lg bottom-5 right-5 hover:bg-green-600"
      >
        <FaWhatsapp size={28} />
      </button>

      {/* ✅ Animated Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            ></motion.div>

            {/* Popup Box */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="fixed z-50 w-[90%] max-w-sm p-5 bg-white rounded-xl shadow-xl bottom-24 right-5"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b">
                <h2 className="text-lg font-semibold text-green-700">
                  How would you like to contact us?
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-xl text-gray-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                {/* ✅ WhatsApp */}
                <a
                  href="https://wa.me/8801723220078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 transition rounded-lg hover:bg-green-50"
                >
                  <FaWhatsapp className="text-2xl text-green-500" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-gray-500">Only Messages</p>
                  </div>
                </a>

                {/* ✅ Messenger (updated link) */}
                <a
                  href="https://www.facebook.com/zamansgadget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 transition rounded-lg hover:bg-blue-50"
                >
                  <FaFacebookMessenger className="text-2xl text-blue-500" />
                  <div>
                    <p className="font-semibold">Facebook Messenger</p>
                    <p className="text-sm text-gray-500">Only Message</p>
                  </div>
                </a>

                {/* ✅ Call Us */}
                <a
                  href="tel:01723220078"
                  className="flex items-center gap-3 p-3 transition rounded-lg hover:bg-green-50"
                >
                  <FaPhoneAlt className="text-2xl text-green-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-gray-500">24 Hours</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
