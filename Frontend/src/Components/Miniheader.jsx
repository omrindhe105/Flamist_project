import React from 'react';
// Frontend\public\flamist.png
import flamistLogo from '/flamist.png';


function Miniheader() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-400">
  <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto flex flex-col md:flex-row items-center justify-between py-4">
    
    {/* Logo */}
    <div className="w-28 md:w-40 mb-3 md:mb-0">
      <img className="w-full rounded-full" src={flamistLogo} alt="Flamist Logo" />
    </div>
    
    {/* Nav Links */}
    <div className="text-black flex flex-col md:flex-row font-semibold text-lg gap-2 md:gap-5 cursor-pointer px-3 md:px-5 text-center md:text-left">
      <h3 className="hover:text-[#f76a20] transition-colors">FAQ</h3>
      <h3 className="hover:text-[#f76a20] transition-colors">ABOUT</h3>
    </div>
    
  </div>
</div>

  )
}

export default Miniheader