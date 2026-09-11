import React from 'react';

const Navbar = ({ setSearchTerm }) => {
  return (
    <div className="w-full bg-[#FECE00] sticky top-0 z-50 select-none">
      <div className="max-w-[1440px] mx-auto px-4 h-[60px] flex items-center justify-between gap-4">
        
        {/* Left: Logo & Country Tag */}
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-[28px] font-black tracking-tighter text-black cursor-pointer flex items-center font-sans">
            noon<span className="text-[10px] font-bold bg-black text-[#FECE00] px-1 py-0.5 ml-1 rounded-sm tracking-normal">AE</span>
          </div>
          
          {/* Deliver To Pin Panel */}
          <div className="hidden lg:flex items-center gap-1.5 text-[12px] border-l border-yellow-600 pl-4 cursor-pointer text-gray-900">
            <span className="text-gray-800 font-normal">Deliver to</span>
            <span className="font-bold flex items-center gap-1 text-black">
              Dubai, UAE <span className="text-[8px] text-gray-700">▼</span>
            </span>
          </div>
        </div>

        {/* Center: Search Bar with Clean Search Text Icon */}
        <div className="flex-1 max-w-[800px] relative flex items-center">
          <input 
  type="text" 
  placeholder="What are you looking for?" 
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full bg-white text-black text-[14px] pl-4 pr-12 py-2 rounded-sm focus:outline-none placeholder-gray-400 font-sans"
/>
          <div className="absolute right-4 text-gray-400 font-bold text-[14px] cursor-pointer hover:text-black">
            ➔
          </div>
        </div>

        {/* Right: Auth, Language Toggle & Cart */}
        <div className="flex items-center gap-5 text-[13px] font-bold text-black shrink-0 font-sans">
          {/* Language Toggle */}
          <div className="cursor-pointer hover:opacity-80 text-[14px] font-extrabold pr-2 text-gray-900 hidden sm:block">
            العربية
          </div>
          
          <div className="w-[1px] h-[20px] bg-yellow-600 hidden sm:block"></div>

          {/* Login Area */}
          <div className="cursor-pointer flex items-center gap-1 hover:opacity-80">
            <span>Sign In</span>
            <span className="text-[12px] text-gray-800">▼</span>
          </div>

          <div className="w-[1px] h-[20px] bg-yellow-600"></div>

          {/* Clean Cart Badge Setup */}
          <div className="cursor-pointer flex items-center gap-2 hover:opacity-80 relative">
            <span className="font-extrabold">Cart</span>
            <div className="w-[24px] h-[20px] border-2 border-black rounded-sm relative flex items-center justify-center">
              <span className="text-[10px] font-black">0</span>
              <div className="absolute -top-[5px] w-[12px] h-[4px] border-t-2 border-x-2 border-black rounded-t-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;