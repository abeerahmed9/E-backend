import React from 'react';

const BrandBanners = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-4 font-sans select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="h-[120px] bg-[#FEE2E2] rounded-sm overflow-hidden relative cursor-pointer border border-gray-200">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80" alt="Banner Left" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
            <h3 className="font-black text-[18px]">Gaming Tech Station</h3>
            <p className="text-[12px] text-yellow-300 font-bold">Up to 40% OFF on Top Gears &gt;</p>
          </div>
        </div>
        <div className="h-[120px] bg-[#E0F2FE] rounded-sm overflow-hidden relative cursor-pointer border border-gray-200">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80" alt="Banner Right" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
            <h3 className="font-black text-[18px]">Audio Wireless Symphony</h3>
            <p className="text-[12px] text-yellow-300 font-bold">Premium Active Sound Drops &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanners;