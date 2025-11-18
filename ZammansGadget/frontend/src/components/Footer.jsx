import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const mapQuery = encodeURIComponent(
    'Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road, Bogura, Puran Bogra, Bangladesh'
  );
  const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <footer className="mt-12 bg-[#1f2937] text-white print:hidden w-full">
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-9 md:gap-10 lg:gap-4"
        >
          {/* SUPPORT */}
          <section className="lg:col-span-3">
            <p className="text-center md:text-left mb-4 md:mb-8 tracking-[0.25rem] text-orange-400 font-semibold text-xl">
              SUPPORT
            </p>
            <div className="flex flex-col items-center gap-5 md:items-start">
              <div className="duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col w-full">
                  <a
                    className="text-xl tracking-wide hover:text-orange-400"
                    href="tel:01723220078"
                  >
                    01723-220078
                  </a>
                </div>
              </div>

              <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 duration-300 w-[275px] h-[71px] border px-6 py-3 rounded-full border-white hover:border-orange-400 flex items-center gap-4"
              >
                <span className="text-2xl">📍</span>
                <span className="w-[1px] bg-white h-full"></span>
                <div className="flex flex-col justify-between h-full">
                  <p className="text-xs">Store Locator</p>
                  <p className="text-xl tracking-wide">Find Our Stores</p>
                </div>
              </a>

              <div className="flex justify-center gap-2 px-6 md:justify-start">
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#3b5998] hover:text-white"
                  href="https://www.facebook.com/zamansgadget"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  aria-label="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] rounded-full bg-white text-[#1f2937] flex justify-center items-center text-lg hover:bg-[#25D366] hover:text-white"
                  href="https://wa.me/8801723220078"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT + POLICY Combined */}
          <section className="w-full lg:col-span-4">
            <div className="flex flex-col items-center text-sm text-gray-300 sm:flex-row sm:justify-between sm:gap-8 sm:items-start">
              {/* ABOUT */}
              <div className="w-full sm:w-1/2">
                <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 sm:text-left">
                  About Us
                </h2>
                {/* <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left"> */}
                     <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left lg:space-y-3 ">
                  <li>About Us |</li>
                  <li>Blog |</li>
                  <li>Careers |</li>
                  <li>Contact Us |</li>
                  <li>FAQs</li>
                </ul>
              </div>

              {/* POLICY */}
              <div className="w-full mt-8 sm:w-1/2 sm:mt-0">
                <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 sm:text-left">
                  Policy
                </h2>
                {/* <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left"> */}
                <ul className="flex flex-wrap justify-center text-center sm:block gap-x-2 gap-y-1 sm:text-left lg:space-y-3 ">

                  <li>Privacy Policy |</li>
                  <li>Warranty Policy |</li>
                  <li>Exchange Policy |</li>
                  <li>Delivery Policy |</li>
                  <li>Refund Policy |</li>
                  <li>Return Policy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* STAY CONNECTED */}
          <section className="lg:col-span-2">
            <h2 className="mb-5 text-xl font-semibold text-center text-orange-400 md:text-left">
              Stay Connected
            </h2>
            <div className="space-y-4 text-sm text-center text-gray-300 md:text-left">
              <p className="font-semibold text-white">Zaman's Gadgets</p>
              <p>
                Shop Number B1 Al-amin Complex 1st floor Nawab Bari Road,
               Puran Bogra,Bogura,Bangladesh
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:zammanGadget@gmail.com"
                  className="text-orange-400 hover:underline"
                >
                  zamansGadget@gmail.com
                </a>
              </p>
            </div>
          </section>
        </motion.div>
        
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <hr className="my-10 border-gray-300" />

  <p className="text-xs font-light tracking-wide text-center text-gray-400 uppercase">
    &copy; {new Date().getFullYear()} Zammans Gadgets — All Rights Reserved
  </p>
  {/* <p className="mt-3 text-sm text-center text-gray-700 sm:text-base">
    <span className="font-semibold text-teal-400">Made by:</span> 
    <span className="ml-1 font-bold text-sky-400">Md Shoaib</span> 
    | <span className="font-semibold text-teal-400">Contact:</span> 
    <a 
      href="mailto:mdshoaibfullstack@gmail.com" 
      className="ml-1 font-medium text-violet-500 hover:text-violet-600 hover:underline"
    >
    mdshoaibfullstack@gmail.com
    </a>
  </p> */}
  <footer className="bg-[#1f2937] py-6 text-center relative overflow-hidden">
  <div className="inline-block text-center">
    {/* First line: ⚡ Crafted by Md Shoaib */}
    <p className="text-sm sm:text-base md:text-base font-[Poppins] tracking-wide font-medium text-transparent 
      bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 
      hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 
      transition-all duration-700 ease-in-out drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
      
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300">
        ⚡ Crafted by
      </span>{" "}
      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 animate-pulse">
        Md Shoaib
      </span>
    </p>

    {/* Second line: Contact */}
    <p className="mt-2 text-sm font-semibold text-transparent sm:text-base bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400">
      Contact:{" "}
      <a
        href="mailto:mdshoaibfullstack@gmail.com"
        className="ml-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 
          hover:from-violet-400 hover:via-pink-400 hover:to-fuchsia-400 
          transition-all duration-500 hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]"
      >
        mdshoaibfullstack@gmail.com
      </a>
    </p>
  </div>

  {/* ✨ Animated Gradient Line Underneath */}
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 w-2/3 h-[2px] 
    bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
    animate-[pulse_3s_ease-in-out_infinite] rounded-full opacity-60" />
</footer>
</motion.div>


      </section>
    </footer>
  );
};

export default Footer;
