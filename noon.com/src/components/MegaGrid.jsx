import React from 'react';

const MegaGrid = () => {
  const items = [
    { title: "Home Appliances Mega Sale", desc: "Up to 60% Off", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", tag: "Appliances" },
    { title: "Top Eyewear & Sunglasses", desc: "Buy 1 Get 1 Free", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80", tag: "Eyewear" },
    { title: "Premium Gym & Fitness Equipment", desc: "Min 30% Off", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80", tag: "Fitness" },
    { title: "Luxury Cosmetics & Beauty Kits", desc: "From AED 49", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80", tag: "Beauty" }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-4 font-sans select-none">
      <div className="mb-3">
        <h2 className="text-[16px] font-black text-black uppercase tracking-tight">RECOMMENDED FOR YOU</h2>
        <div className="w-[40px] h-[3px] bg-[#FECE00] mt-0.5"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-sm border border-[#EBEBEB] overflow-hidden cursor-pointer hover:shadow-sm transition-shadow group">
            <div className="p-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-[13px] text-black line-clamp-1">{item.title}</h3>
                <p className="text-[11px] text-[#3866DF] font-bold">{item.desc}</p>
              </div>
              <span className="text-[9px] bg-yellow-100 text-yellow-800 font-bold px-1.5 py-0.5 rounded-sm uppercase">{item.tag}</span>
            </div>
            <div className="w-full h-[160px] bg-white p-1">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover rounded-sm transition-transform duration-200 group-hover:scale-[1.01]" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaGrid;