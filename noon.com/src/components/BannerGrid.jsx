import React from 'react';

const BannerGrid = () => {
  const categories = [
    { title: "Premium Men & Women Sneakers", desc: "Up to 50% Off", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", tag: "Footwear" },
    { title: "Professional Studio Audio Gear", desc: "From AED 99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", tag: "Audio" },
    { title: "Smart Luxury Premium Watches", desc: "Flat 30% Off", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80", tag: "Timepieces" },
    { title: "Modern High-Tech Appliances", desc: "Best Offers Today", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", tag: "Kitchen" }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-6 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
            <div className="p-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-[13px] text-black line-clamp-1">{item.title}</h3>
                <p className="text-[11px] text-[#3866DF] font-bold">{item.desc}</p>
              </div>
              <span className="text-[9px] bg-yellow-100 text-yellow-800 font-bold px-1.5 py-0.5 rounded uppercase">{item.tag}</span>
            </div>
            <div className="w-full h-[170px] bg-white p-1">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded group-hover:scale-[1.01] transition-transform duration-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;