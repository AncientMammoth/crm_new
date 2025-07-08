import React from 'react';
import { Link } from 'react-router-dom';

// You would need to create an Image component that handles static assets,
// or simply use the <img> tag and manage the src paths.
const Image = ({ src, alt, width, height, className }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />
);

export default function Footer() {
  return (
    <footer className="text-white p-8 lg:rounded-[48px] rounded-3xl max-w-[1820px] mx-auto lg:px-12 px-6 relative overflow-hidden bg-cover bg-no-repeat bg-center bg-[#1D1D1D]">
      {/* Address Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/5 rounded-[24px] p-4 lg:p-8 flex items-center gap-4">
          <Image
            src="/icons/india-map.svg" // Make sure you have this icon in your public folder
            alt="India Map"
            width={120}
            height={120}
            className="w-15 h-15 lg:w-30 lg:h-30"
          />
          <div>
            <h5 className="text-lg lg:text-[28px] mb-1">India</h5>
            <p className="text-base font-light text-[#A7A7A7]">
              Rikaian Technology Pvt. Ltd. <br />
              Survey number 846, Gokhale Sanchit, First floor, BMCC Rd, Deccan
              Gymkhana, Pune 411004, Maharashtra.
            </p>
          </div>
        </div>
        <div className="bg-white/5 rounded-[24px] p-4 lg:p-8 flex items-center gap-4">
          <Image
            src="/icons/japan-map.svg" // Make sure you have this icon in your public folder
            alt="Japan Map"
            width={120}
            height={120}
            className="w-15 h-15 lg:w-30 lg:h-30"
          />
          <div>
            <h5 className="text-lg lg:text-[28px] mb-1">Japan</h5>
            <p className="text-base font-light text-[#A7A7A7]">
              Rikaian Technology Pvt. Ltd. <br />
              Fabbit Kyobashi 2F, 1-1-5 Central Bldg Chuo-Ku, Tokyo 104-0031
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center text-base text-[#A1A1A1] mb-6">
        <div className="flex gap-3 mb-3 md:mb-0">
          <Link to="/terms-of-use">Terms of use</Link>
          <span>•</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>© 2025 Rikaian Technology Pvt. Ltd.</p>
      </div>
    </footer>
  );
}