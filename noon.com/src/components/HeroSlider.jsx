import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-2 grid grid-cols-1 lg:grid-cols-3 gap-2 font-sans select-none">
      
      {/* Left Core Automatic Slide Window */}
      <div className="lg:col-span-2 h-[220px] md:h-[280px] rounded-sm overflow-hidden cursor-pointer relative bg-gray-100 border border-gray-200">
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div key={index} className="w-full h-full shrink-0 relative">
              <img src={src} alt={`Noon Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/35 flex flex-col justify-center p-8 text-white">
                <span className="bg-[#FECE00] text-black font-black text-[10px] px-2 py-0.5 rounded-sm self-start uppercase tracking-wider mb-2">
                  Noon Mega Clearance
                </span>
                <h2 className="text-[26px] md:text-[36px] font-black leading-tight max-w-[450px]">
                  UP TO 70% OFF ON GLOBAL BRANDS
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Fixed Banners (Explicitly Perfect Laptop & Gear Image Placements) */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
        
        {/* Top Right Box: Exact Dedicated Laptop & PC Grid Card */}
        <div className="flex-1 h-[105px] md:h-[136px] rounded-sm overflow-hidden cursor-pointer relative border border-gray-200 bg-white group">
          <img 
            src="https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=500&q=80" 
            alt="Laptops Sale Section" 
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.01]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center p-4 text-white">
            <h3 className="font-black text-[14px] uppercase tracking-wide text-[#FECE00]">Laptops & PC</h3>
            <p className="text-[11px] text-gray-200 font-bold mt-0.5">Shop Best PC Deals &gt;</p>
          </div>
        </div>

        {/* Bottom Right Box: Exact Audio & Gaming Accessories Card */}
        <div className="flex-1 h-[105px] md:h-[136px] rounded-sm overflow-hidden cursor-pointer relative border border-gray-200 bg-white group">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" 
            alt="Premium Headphones Sale" 
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.01]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center p-4 text-white">
            <h3 className="font-black text-[14px] uppercase tracking-wide text-white">Audio & Headsets</h3>
            <p className="text-[11px] text-yellow-400 font-bold mt-0.5">Explore Sound Deals &gt;</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSlider;