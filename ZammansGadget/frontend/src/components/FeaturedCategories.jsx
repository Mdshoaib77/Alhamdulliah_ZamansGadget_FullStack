// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds } from 'react-icons/bs'; // Importing BsEarbuds for Airbuds
// import { MdOutlineCable, MdBluetoothAudio } from 'react-icons/md'; 
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 
//     { name: 'Adapter & Cables', icon: <MdOutlineCable size={30} />, color: 'text-cyan-600' }, 
//     { name: 'PowerBank', icon: <FaBatteryFull size={30} />, color: 'text-green-600' }, 
//     { name: 'Airbuds', icon: <BsEarbuds size={30} />,  color: 'text-sky-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />,  color: 'text-indigo-600'}, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 
//     { name: 'Speakers', icon: <FaVolumeUp size={30} />, color: 'text-pink-600' }, 
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: ' text-yellow-700' }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;

// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaBatteryFull, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds, BsPlugin } from 'react-icons/bs'; 
// import { MdBluetoothAudio } from 'react-icons/md'; 
// import { GiSmartphone, GiEarbuds } from 'react-icons/gi';

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 

//     // ✅ Updated Adapter icon
//     { 
//       name: 'Adapter & Cables', 
//       icon: <BsPlugin size={30} />, 
//       color: 'text-cyan-600' 
//     }, 

//     { name: 'PowerBank', icon: <FaBatteryFull size={30} />, color: 'text-green-600' }, 
//     { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-sky-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-indigo-600' }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 
//     { name: 'Speakers', icon: <FaVolumeUp size={30} />, color: 'text-pink-600' }, 
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: 'text-yellow-700' }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;
// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaHeadphones, FaGamepad, FaVolumeUp, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds, BsPlugin } from 'react-icons/bs'; 
// import { MdBluetoothAudio } from 'react-icons/md'; 
// import { GiEarbuds } from 'react-icons/gi';
// import { IoBatteryCharging } from "react-icons/io5"; // ✅ New import

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 

//     { 
//       name: 'Adapter & Cables', 
//       icon: <BsPlugin size={30} />, 
//       color: 'text-cyan-600' 
//     }, 

//     // ✅ Replaced PowerBank icon
//     { name: 'PowerBank', icon: <IoBatteryCharging size={30} />, color: 'text-green-600' },

//     { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-sky-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-indigo-600' }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 
//     { name: 'Speakers', icon: <FaVolumeUp size={30} />, color: 'text-pink-600' }, 
//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: 'text-yellow-700' }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;


// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaHeadphones, FaGamepad, FaGlassWhiskey } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds, BsPlugin } from 'react-icons/bs'; 
// import { MdBluetoothAudio, MdSpeaker } from 'react-icons/md'; // Added MdSpeaker here
// import { GiEarbuds } from 'react-icons/gi';
// import { IoBatteryCharging } from "react-icons/io5"; // ✅ New import

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 

//     { 
//       name: 'Adapter & Cables', 
//       icon: <BsPlugin size={30} />, 
//       color: 'text-cyan-600' 
//     }, 

//     { name: 'PowerBank', icon: <IoBatteryCharging size={30} />, color: 'text-green-600' },

//     { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-sky-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-indigo-600' }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 

//     // Replaced FaVolumeUp with MdSpeaker here:
//     { name: 'Speakers', icon: <MdSpeaker size={30} />, color: 'text-pink-600' }, 

//     { name: 'Cover & Glass', icon: <FaGlassWhiskey size={30} />, color: 'text-yellow-700' }, 
//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;


// import React from 'react'; 
// import { useNavigate } from 'react-router-dom'; 
// import { FaMobileAlt, FaHeadphones, FaGamepad } from 'react-icons/fa';
// import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds, BsPlugin } from 'react-icons/bs'; 
// import { MdBluetoothAudio, MdSpeaker, MdMobileScreenShare } from 'react-icons/md'; // Added MdMobileScreenShare here
// import { GiEarbuds } from 'react-icons/gi';
// import { IoBatteryCharging } from "react-icons/io5"; // ✅ New import

// const FeaturedCategories = () => { 
//   const navigate = useNavigate(); 

//   const categories = [ 
//     { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
//     { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
//     { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 

//     { 
//       name: 'Adapter & Cables', 
//       icon: <BsPlugin size={30} />, 
//       color: 'text-cyan-600' 
//     }, 

//     { name: 'PowerBank', icon: <IoBatteryCharging size={30} />, color: 'text-green-600' },

//     { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-sky-600' }, 
//     { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
//     { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-indigo-600' }, 
//     { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 

//     { name: 'Speakers', icon: <MdSpeaker size={30} />, color: 'text-pink-600' }, 

//     // Updated icon here:
//     { name: 'Cover & Glass', icon: <MdMobileScreenShare size={30} />, color: 'text-yellow-700' }, 

//     { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
//   ];

//   return ( 
//     <div className="max-w-6xl px-4 py-10 mx-auto"> 
//       <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
//       <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
//             className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
//           >
//             <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
//             <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;

import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { FaMobileAlt, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { BsPhoneFlip, BsPhoneVibrate, BsSmartwatch, BsEarbuds, BsPlugin } from 'react-icons/bs'; 
import { MdBluetoothAudio, MdSpeaker, MdMobileScreenShare } from 'react-icons/md'; 
import { GiEarbuds } from 'react-icons/gi';
import { RiChargingPile2Line } from 'react-icons/ri'; // ✅ Updated import

const FeaturedCategories = () => { 
  const navigate = useNavigate(); 

  const categories = [ 
    { name: 'Official Phones', icon: <FaMobileAlt size={30} />, color: 'text-blue-600' }, 
    { name: 'Unofficial Phones', icon: <BsPhoneVibrate size={30} />, color: 'text-red-600' },
    { name: 'Used Phones', icon: <BsPhoneFlip size={30} />, color: 'text-yellow-600' }, 

    { 
      name: 'Adapter & Cables', 
      icon: <BsPlugin size={30} />, 
      color: 'text-cyan-600' 
    }, 

    // Updated PowerBank icon here:
    { name: 'PowerBank', icon: <RiChargingPile2Line size={30} />, color: 'text-green-600' },

    { name: 'Airbuds', icon: <BsEarbuds size={30} />, color: 'text-sky-600' }, 
    { name: 'Earphones', icon: <GiEarbuds size={30} />, color: 'text-purple-600' }, 
    { name: 'Neckband', icon: <MdBluetoothAudio size={30} />, color: 'text-indigo-600' }, 
    { name: 'Gamming Accesorices', icon: <FaGamepad size={30} />, color: 'text-orange-600' }, 

    { name: 'Speakers', icon: <MdSpeaker size={30} />, color: 'text-pink-600' }, 

    { name: 'Cover & Glass', icon: <MdMobileScreenShare size={30} />, color: 'text-yellow-700' }, 

    { name: 'Smart Watch', icon: <BsSmartwatch size={30} />, color: 'text-yellow-500' }, 
  ];

  return ( 
    <div className="max-w-6xl px-4 py-10 mx-auto"> 
      <h2 className="mb-6 text-2xl font-bold text-center">Featured Categories</h2> 
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/collection?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:scale-105"
          >
            <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
            <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
