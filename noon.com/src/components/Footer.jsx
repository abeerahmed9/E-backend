import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7F7FA] border-t border-[#EBEBEB] mt-8 font-sans text-[#404553] select-none">
      
      {/* Upper Premium Value Strip */}
      <div className="bg-white border-b border-[#EBEBEB] py-6">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-[20px] text-gray-700 mt-0.5">🛡️</span>
            <div>
              <h4 className="font-bold text-[13px] text-black uppercase tracking-tight">Trustworthy Shopping</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">We ensure secure payment gateways and genuine items every time.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-y md:border-y-0 md:border-x border-[#EBEBEB] py-4 md:py-0 md:px-6">
            <span className="text-[20px] text-gray-700 mt-0.5">🚚</span>
            <div>
              <h4 className="font-bold text-[13px] text-black uppercase tracking-tight">Free Express Delivery</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">Fast shipping right to your doorstep across UAE with premium fulfillment.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[20px] text-gray-700 mt-0.5">🔄</span>
            <div>
              <h4 className="font-bold text-[13px] text-black uppercase tracking-tight">Easy Free Returns</h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">Hassle-free 15-day return policy for a completely stress-free shopping.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links Area */}
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-[12px]">
        
        {/* Col 1 */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">ELECTRONICS</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer">Mobiles & Tablets</li>
            <li className="hover:underline cursor-pointer">Laptops & Desktops</li>
            <li className="hover:underline cursor-pointer">Television & Video</li>
            <li className="hover:underline cursor-pointer">Audio & Headphones</li>
            <li className="hover:underline cursor-pointer">Video Games & Consoles</li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">FASHION</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer">Women's Fashion</li>
            <li className="hover:underline cursor-pointer">Men's Fashion</li>
            <li className="hover:underline cursor-pointer">Girls' Clothing</li>
            <li className="hover:underline cursor-pointer">Boys' Clothing</li>
            <li className="hover:underline cursor-pointer">Watches & Jewelry</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">HOME & KITCHEN</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer">Kitchen & Dining</li>
            <li className="hover:underline cursor-pointer">Bedding & Bath</li>
            <li className="hover:underline cursor-pointer">Home Decor & Furniture</li>
            <li className="hover:underline cursor-pointer">Home Appliances</li>
            <li className="hover:underline cursor-pointer">Tools & Home Improvement</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">BEAUTY & BABY</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer">Fragrance & Perfumes</li>
            <li className="hover:underline cursor-pointer">Makeup & Cosmetics</li>
            <li className="hover:underline cursor-pointer">Personal Care</li>
            <li className="hover:underline cursor-pointer">Baby Diapering</li>
            <li className="hover:underline cursor-pointer">Baby Strollers & Gear</li>
          </ul>
        </div>

        {/* Col 5 */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">TOP BRANDS</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer">Apple Store</li>
            <li className="hover:underline cursor-pointer">Samsung Shop</li>
            <li className="hover:underline cursor-pointer">Nike Online</li>
            <li className="hover:underline cursor-pointer">Adidas Outlet</li>
            <li className="hover:underline cursor-pointer">L'Oreal Paris</li>
          </ul>
        </div>

        {/* Col 6: Support Area */}
        <div>
          <h4 className="font-bold text-black mb-3 uppercase tracking-wider text-[11px]">SUPPORT</h4>
          <ul className="space-y-2 text-gray-500 font-medium">
            <li className="hover:underline cursor-pointer font-bold text-black">Help Center</li>
            <li className="hover:underline cursor-pointer">Track Order Status</li>
            <li className="hover:underline cursor-pointer">Returns & Refunds</li>
            <li className="hover:underline cursor-pointer">Corporate Orders</li>
            <li className="hover:underline cursor-pointer text-[#3866DF] font-bold">Contact Support</li>
          </ul>
        </div>

      </div>

      {/* Region Country Selection Row */}
      <div className="bg-white border-y border-[#EBEBEB] py-4">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-4 text-gray-500 font-semibold">
            <span className="text-black font-bold">Noon Regions:</span>
            <span className="hover:text-black cursor-pointer flex items-center gap-1">🇦🇪 UAE</span>
            <span className="hover:text-black cursor-pointer flex items-center gap-1">🇸🇦 KSA</span>
            <span className="hover:text-black cursor-pointer flex items-center gap-1">🇪🇬 Egypt</span>
          </div>
          <div className="text-gray-400 font-medium text-[11px]">
            Designed with love for pixel-perfect submission guidelines.
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright & Payment Strip */}
      <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-500 font-medium bg-[#F7F7FA]">
        <div>
          © 2026 noon. All Rights Reserved. Clean Layout Framework.
        </div>
        <div className="flex items-center gap-4 font-bold text-gray-400 select-none text-[11px] tracking-wider">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>APPLE PAY</span>
          <span>AMERICAN EXPRESS</span>
          <span>CASH ON DELIVERY</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;