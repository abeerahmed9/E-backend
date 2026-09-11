import React from 'react';

const QuickLinks = () => {
  // Website ko lamba aur 50+ items se pack karne ke liye realistic product grid
  const links = [
    { name: "Laptops", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "MacBooks", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80" },
    { name: "Gaming PCs", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=150&q=80" },
    { name: "Mobiles", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80" },
    { name: "Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80" },
    { name: "Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80" },
    { name: "Sneakers", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80" },
    { name: "Perfumes", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=150&q=80" },
    { name: "Monitors", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=150&q=80" },
    { name: "Keyboards", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=150&q=80" },
    { name: "Intel Core i7", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "Asus ROG", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=150&q=80" },
    { name: "HP Pavilion", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80" },
    { name: "Dell XPS", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "Lenovo Think", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80" },
    { name: "iPad Pro", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=150&q=80" },
    { name: "Smart Tabs", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80" },
    { name: "Speakers", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80" },
    { name: "Fitness Bands", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80" },
    { name: "Air Fryers", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=150&q=80" },
    // Data multi-duplication system to easily reach 50 packed items
    { name: "Acer Nitro", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "MSI Katana", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=150&q=80" },
    { name: "Razer Blade", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80" },
    { name: "Surface Pro", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "Chromebooks", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80" },
    { name: "SSD Drives", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80" },
    { name: "Graphics Cards", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=150&q=80" },
    { name: "Gaming Chairs", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=150&q=80" },
    { name: "Mice Wireless", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=150&q=80" },
    { name: "Webcams 4K", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80" }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-3 font-sans select-none">
      {/* Outer row scroll engine */}
      <div className="bg-white rounded-sm p-3 border border-[#EBEBEB] flex items-center gap-3 overflow-x-auto shadow-none scrollbar-none snap-x">
        {links.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center cursor-pointer min-w-[85px] shrink-0 snap-start group">
            <div className="w-[56px] h-[56px] rounded-full bg-[#F7F7FA] overflow-hidden mb-1.5 border border-gray-100 p-0.5 group-hover:scale-105 transition-transform duration-150">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover rounded-full" 
                loading="lazy"
              />
            </div>
            <span className="text-[11px] font-bold text-[#404553] tracking-tight group-hover:text-[#3866DF] truncate w-full px-1">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;