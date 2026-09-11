import React from 'react';

const PromoStrip = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-4 font-sans">
      <div className="w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between border border-gray-800 shadow-sm gap-4 cursor-pointer">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="text-[28px]">💳</div>
          <div>
            <h3 className="text-white font-black text-[14px] md:text-[16px] uppercase tracking-wide">
              Mashreq Bank Exclusive Discount Offer
            </h3>
            <p className="text-gray-400 text-[11px] font-medium">
              Save an extra 15% on all fashion and electronics components. Use code: MASHREQ15
            </p>
          </div>
        </div>
        <button className="bg-[#FECE00] text-black font-black text-[12px] px-6 py-2 rounded shadow hover:bg-yellow-400 uppercase tracking-wider shrink-0">
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default PromoStrip;