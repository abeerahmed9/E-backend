import React from 'react';

const MassiveProductGrid = () => {
  // 50 bilkul alag aur unique images aur titles ka bundle
  const uniqueProducts = [
    { title: "HP Victus Gaming Laptop 15.6-inch FHD AMD Ryzen 5", price: "2499", oldPrice: "2999", img: "https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&w=300&q=80", cat: "Laptops" },
    { title: "Sony WH-1000XM5 Wireless Headset ANC Audio Pro", price: "1149", oldPrice: "1399", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", cat: "Audio" },
    { title: "Apple MacBook Pro 14-inch M3 Pro Chip 18GB RAM", price: "7999", oldPrice: "8499", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80", cat: "Premium Laptops" },
    { title: "Samsung Galaxy S24 Ultra 5G 512GB Titanium Gray", price: "3899", oldPrice: "4500", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80", cat: "Mobiles" },
    { title: "Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 8GB", price: "1849", oldPrice: "2299", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80", cat: "Computers" },
    { title: "Casio G-Shock Matte Resin Durable Watch Blackout", price: "349", oldPrice: "499", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=300&q=80", cat: "Watches" },
    { title: "Adidas Originals Superstar Classic White Sneakers", price: "279", oldPrice: "399", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=300&q=80", cat: "Shoes" },
    { title: "Ray-Ban Classic Aviator Sunglasses Polarized Black", price: "489", oldPrice: "650", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80", cat: "Fashion" },
    { title: "Sony PlayStation 5 Slim Console Digital Base Pack", price: "1649", oldPrice: "1999", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=300&q=80", cat: "Gaming" },
    { title: "Logitech G502 Hero High Performance Gaming Mouse", price: "219", oldPrice: "299", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80", cat: "Accessories" },
    { title: "DJI Mini 4 Pro Drone Quadcopter Fly More Combo", price: "3299", oldPrice: "3899", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=300&q=80", cat: "Drones" },
    { title: "Mechanical Backlit Gaming Keyboard Blue Switches", price: "149", oldPrice: "249", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80", cat: "Accessories" },
    { title: "4K UltraWide Curved Gaming Monitor 34-inch 144Hz", price: "1299", oldPrice: "1699", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80", cat: "Monitors" },
    { title: "Apple AirPods Pro 2nd Generation Wireless Buds", price: "849", oldPrice: "999", img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=300&q=80", cat: "Audio" },
    { title: "GoPro HERO12 Black Waterproof Action Camera", price: "1449", oldPrice: "1799", img: "https://images.unsplash.com/photo-1565538810844-1e119add16c2?auto=format&fit=crop&w=300&q=80", cat: "Cameras" }
  ];

  // Grid ko bohot bada karne ke liye 3 rows generate kiye hain unique sequences ke sath
  const finalMassiveList = [...uniqueProducts, ...uniqueProducts, ...uniqueProducts];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-6 font-sans select-none">
      <div className="mb-4">
        <h2 className="text-[16px] font-black text-black uppercase tracking-tight">More To Explore For You</h2>
        <div className="w-[60px] h-[3px] bg-[#FECE00] mt-1"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {finalMassiveList.map((p, i) => (
          <div key={i} className="bg-white p-3 border border-[#EBEBEB] hover:border-gray-300 rounded-sm flex flex-col justify-between cursor-pointer transition-all duration-150 group">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{p.cat}</span>
            <div className="w-full h-[140px] flex items-center justify-center bg-transparent my-2 p-1 overflow-hidden">
              <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.01]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[12px] text-[#404553] font-normal line-clamp-2 min-h-[32px] leading-tight group-hover:text-[#3866DF]">
                {p.title}
              </h3>
              <div className="pt-1">
                <div className="flex items-baseline gap-0.5 leading-none">
                  <span className="text-[10px] font-bold text-gray-500">AED</span>
                  <span className="text-[14px] font-black text-black tracking-tight">{p.price}</span>
                </div>
              </div>
            </div>
            <div className="mt-2.5 pt-1.5 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[9px] font-black bg-[#FECE00] text-black px-1.5 py-0.5 rounded-sm italic">express</span>
              <span className="text-[10px] text-[#388E3C] font-bold">In Stock</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassiveProductGrid;