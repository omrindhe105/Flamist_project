import React from 'react';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:w-full text-white py-12 ">
      <div className="container mx-auto px-4 w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
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
        
          
          <div className='md-full'>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <p className="text-gray-400 mb-4">
            This site is an educational purposes, this site is using information that is freely available. This site has not any right of videos or photos in which you have downloaded the only right of respected users and all the copyright and trademark goes to them. Instagram and Instagram logos are trademark and copyright of Facebook Inc.

            </p>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center items-center text-sm text-gray-400">
          <p>Made with <Heart size={16} className="inline text-pink-500 mx-1" /> by Flamist Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;