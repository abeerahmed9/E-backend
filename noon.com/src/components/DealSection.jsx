import React from 'react';

const DealSection = () => {
  const products = [
    { title: "Apple iPhone 15 Pro Max 256GB Natural Titanium", price: "4199", oldPrice: "4699", rating: "4.8", reviews: "512", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=300&q=80" },
    { title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "1149", oldPrice: "1499", rating: "4.7", reviews: "289", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
    { title: "Rolex Submariner Automatic Men's Luxury Watch", price: "24500", oldPrice: "28000", rating: "4.9", reviews: "42", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80" },
    { title: "Nike Air Max Alpha Performance Training Sneakers", price: "329", oldPrice: "499", rating: "4.5", reviews: "194", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80" },
    { title: "Philips Digital Air Fryer 4.1L Essential XL Panel", price: "249", oldPrice: "549", rating: "4.6", reviews: "630", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 my-4 font-sans select-none">
      <div className="bg-white border border-[#EBEBEB] rounded-sm p-4 shadow-none">
        
        {/* Header Block Section */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
          <div>
            <h2 className="text-[16px] font-black text-[#1F2937] uppercase tracking-tight">
              Deals of the Day
            </h2>
            <p className="text-[11px] text-gray-400 font-normal mt-0.5">Top picks at lowest prices</p>
          </div>
          <button className="text-[#3866DF] border border-[#3866DF] font-bold text-[11px] px-3 py-1 rounded-sm hover:bg-[#3866DF]/5 transition-all uppercase tracking-wider">
            View All
          </button>
        </div>

        {/* Product Responsive Grid Engine */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {products.map((prod, i) => (
            <div key={i} className="bg-white p-2.5 border border-transparent hover:border-gray-200 rounded-sm flex flex-col justify-between cursor-pointer transition-all duration-150 group">
              
              {/* Product Frame Asset */}
              <div className="w-full h-[150px] flex items-center justify-center bg-transparent mb-2 p-1 overflow-hidden">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
                />
              </div>

              {/* Title & Core Meta Details */}
              <div className="space-y-1">
                <h3 className="text-[12px] text-[#404553] font-normal line-clamp-2 min-h-[32px] leading-tight group-hover:text-[#3866DF] transition-colors">
                  {prod.title}
                </h3>
                
                {/* Rating Frame */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold bg-[#388E3C] text-white px-1 py-0.5 rounded-sm flex items-center gap-0.5 leading-none">
                    {prod.rating} <span className="text-[8px]">★</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">({prod.reviews})</span>
                </div>

                {/* Price Label Container */}
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="text-[10px] font-bold text-gray-500">AED</span>
                    <span className="text-[15px] font-black text-black tracking-tight">{prod.price}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 line-through font-medium mt-0.5">
                    AED {prod.oldPrice}
                  </div>
                </div>
              </div>

              {/* Express Tag Row */}
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

export default DealSection;