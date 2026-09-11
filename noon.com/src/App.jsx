import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import HeroSlider from './components/HeroSlider';
import QuickLinks from './components/QuickLinks';
import DealSection from './components/DealSection';
import PromoStrip from './components/PromoStrip';
import BrandBanners from './components/BrandBanners';
import TrendingSlider from './components/TrendingSlider';
import MassiveProductGrid from './components/MassiveProductGrid'; // Naya Grid Block
import BottomScroller from './components/BottomScroller'; // Naya Bottom Slide Bar
import MegaGrid from './components/MegaGrid';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="w-full bg-[#F7F7FA] min-h-screen text-[#404553] font-sans antialiased">
      <div className="w-full bg-[#FECE00] text-black text-center py-1.5 text-[11px] font-black tracking-wider border-b border-yellow-400 uppercase">
        ⚡ MEGA DEALS ARE LIVE - USE CODE: NOON20 FOR EXTRA 20% OFF ON ELECTRONICS & FASHION! ⚡
      </div>

     <Navbar setSearchTerm={setSearchTerm} />
      <CategoryBar />
      
      <main className="w-full max-w-[1440px] mx-auto px-1 md:px-2 space-y-2">
        <HeroSlider />
        <QuickLinks />
        <PromoStrip />
        <DealSection />
        <BrandBanners />
       <TrendingSlider searchTerm={searchTerm} />
        <MassiveProductGrid /> {/* Extra long section injection */}
        <BottomScroller />     {/* Niche wala slide bar */}
        <MegaGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;