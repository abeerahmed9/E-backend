import React from 'react';

const CategoryBar = () => {
  const links = [
    "ELECTRONICS", "FASHION", "HOME", "BEAUTY", "BABY", "GROCERY", "SPORTS"
  ];

  return (
    <div className="w-full bg-white border-b border-[#F2F4F8] hidden lg:block select-none">
      <div className="max-w-[1440px] mx-auto px-4 h-[38px] flex items-center justify-between text-[11px] font-black tracking-wide text-[#404553]">
        <div className="flex items-center gap-5">
          <span className="text-[#3866DF] cursor-pointer flex items-center gap-1 font-extrabold">
            ALL CATEGORIES <span className="text-[8px]">▼</span>
          </span>
          {links.map((link, idx) => (
            <span key={idx} className="cursor-pointer hover:text-[#3866DF] transition-colors">{link}</span>
          ))}
        </div>
        <div className="text-[#F55157] font-extrabold cursor-pointer tracking-wider">
          CLEARANCE SALE
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;