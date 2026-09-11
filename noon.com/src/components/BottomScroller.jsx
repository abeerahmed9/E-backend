import React, { useState, useEffect } from 'react';

const BottomScroller = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const brands = [
    { name: "Puma Sports Active Tracksuit", price: "189", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=200&q=80" },
    { name: "Lenovo Legion Pro Gaming Mouse", price: "129", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=200&q=80" },
    { name: "JBL Flip 6 Portable Bluetooth Speaker", price: "399", img: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=200&q=80" },
    { name: "Logitech MX Master 3S Wireless Mouse", price: "349", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=200&q=80" },
    { name: "Premium Leather Bi-Fold Slim Wallet", price: "59", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=200&q=80" },
    { name: "Ergonomic Vertical Wireless Mouse", price: "199", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=200&q=80" }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % (brands.length - 2));
    }, 4000); // Har 4 second baad automatic chalega
    return () => clearInterval(slideTimer);
  }, [brands.length]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-6 font-sans select-none">
      <div className="bg-[#F4F6F9] border border-[#EBEBEB] rounded-sm p-4 overflow-hidden relative">
        <h3 className="text-[14px] font-black text-black uppercase mb-3 tracking-tight">Clearance Slide Hot Picks</h3>
        
        {/* Animated Slide Window Wrapper */}
        <div 
          className="flex gap-2 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${scrollIndex * 200}px)` }}
        >
          {brands.map((b, i) => (
            <div key={i} className="min-w-[190px] max-w-[190px] bg-white p-3 border border-gray-100 rounded-sm flex flex-col justify-between cursor-pointer shadow-sm shrink-0">
              <div className="w-full h-[100px] flex items-center justify-center mb-2">
                <img src={b.img} alt={b.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h4 className="text-[11px] text-gray-700 font-medium line-clamp-1">{b.name}</h4>
                <p className="text-[13px] font-black text-black mt-1">AED {b.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomScroller;