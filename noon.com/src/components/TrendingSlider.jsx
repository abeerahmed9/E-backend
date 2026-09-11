import React, { useState, useEffect } from 'react';

const TrendingSlider = ({ searchTerm }) => {
 const [trendProducts, setTrendProducts] = useState([]);

useEffect(() => {
  // 500ms ka delay taake har ek letter par API call na jaye (Server crash na ho)
  const delaySearch = setTimeout(() => {
    fetch(`http://localhost:5000/api/products?q=${searchTerm || ''}`)
      .then(res => res.json())
      .then(data => setTrendProducts(data))
      .catch(err => console.error("Fetch Error:", err));
  }, 500);

  // Cleanup function purane timer ko clear karne ke liye
  return () => clearTimeout(delaySearch);
}, [searchTerm]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-4 font-sans select-none">
      <div className="bg-white border border-[#EBEBEB] rounded-sm p-4 shadow-none">
        
        {/* Section Heading Label */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
          <h2 className="text-[16px] font-black text-black uppercase tracking-tight">Trending in Electronics</h2>
          <span className="text-[11px] font-bold text-[#3866DF] cursor-pointer hover:underline uppercase tracking-wider">
            View All
          </span>
        </div>

        {/* 5 Column Standard Desktop Sizing Engine */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {Array.isArray(trendProducts) && trendProducts.map((p, i) => (
            <div key={i} className="bg-white rounded-sm p-2.5 border border-transparent hover:border-gray-200 flex flex-col justify-between cursor-pointer transition-all duration-150 group">
              
              {/* Box Image Frame Asset */}
              <div className="w-full h-[140px] flex items-center justify-center bg-transparent mb-2 p-1 overflow-hidden">
                <img 
                  src={p.image}
                  alt={p.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
                />
              </div>

              {/* Text Meta Fields */}
              <div className="space-y-1">
                <h3 className="text-[12px] text-[#404553] font-normal line-clamp-2 min-h-[32px] leading-tight group-hover:text-[#3866DF] transition-colors">
                  {p.title}
                </h3>
                
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="text-[10px] font-bold text-gray-500">AED</span>
                    <span className="text-[15px] font-black text-black tracking-tight">{p.price}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag Badge */}
              <div className="mt-2.5 pt-1.5 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[9px] font-black bg-[#FECE00] text-black px-1.5 py-0.5 rounded-sm italic tracking-tighter">
                  express
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrendingSlider;