import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Download Your Instagram Videos?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
          Start downloading your favorite Instagram videos in just a few clicks. No registration required!
        </p>
        <a 
          href="#top" 
          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-100 transition-colors"
        >
          Start Downloading Now <ArrowRight size={20} className="inline ml-2" />
        </a>
      </div>
    </section>
  );
};

export default CTA;