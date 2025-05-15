import React from 'react';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4 w-11/12 md:w-4/6 lg:w-3/6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Instagram className="h-6 w-6" />
          <span className="font-bold text-xl">InstaDownload</span>
        </div>
        <p className="text-gray-400 mb-4">
          The easiest way to download videos from Instagram.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/om_rindhe105/" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Legal Section */}
      <div className="md:flex md:flex-col">
        <h3 className="font-bold text-lg mb-4">Legal</h3>
        <p className="text-gray-400 mb-4">
          This site is for educational purposes, using information that is freely available. This site does not own the rights to videos or photos downloaded, which belong to the respective users. All copyrights and trademarks belong to their respective owners. Instagram and Instagram logos are trademarks and copyrights of Facebook Inc.
        </p>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center items-center text-sm text-gray-400">
      <p>Made with <Heart size={16} className="inline text-pink-500 mx-1" /> by OM RINDHE</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;