import Navbar from "./Navbar";
import React from "react";
import NavMob from "./NavMob";

const Wallets = () => {
  return (
    <div>
         <Navbar />
      <div className="wallet">Wallets</div>
      <div className="navmob">
        <NavMob />
      </div>
    </div>
  );
};

export default Wallets;

// import React, { useState } from "react";

// const OverlayExample = () => {
//   const [showOverlay, setShowOverlay] = useState(false);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       {/* Button to open overlay */}
//       <button
//         onClick={() => setShowOverlay(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         Open Overlay
//       </button>

//       {/* Overlay (pops up when showOverlay = true) */}
//       {showOverlay && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           {/* Modal content */}
//           <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
//             <h2 className="text-xl font-bold mb-4">Overlay Title</h2>
//             <p className="mb-4">This is an overlay modal in React!</p>
            
//             <button
//               onClick={() => setShowOverlay(false)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//             >
//               ✖
//             </button>
            
//             <button
//               onClick={() => setShowOverlay(false)}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OverlayExample;


