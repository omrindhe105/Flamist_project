import React from 'react';

function Feature() {
    return (
        <div className="container mx-auto text-center py-10 bg-gray-100">
        <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
          <h1 className="text-3xl md:text-4xl text-black font-bold mb-6">
            Flamist - Online Instagram Downloader
          </h1>
          <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] my-3 rounded-md">
            <div className="w-full bg-white"></div>
          </div>
        </div>
      
        {/* Features Section */}
        <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto py-8 flex gap-6 flex-col">
          {/* Feature 1: Instagram Video Download */}
          <div className="flex flex-col lg:flex-row rounded-2xl shadow-xl/30 overflow-hidden">
            <div className="w-full lg:w-2/5">
              <img
                src="video_downloader.webp"
                alt="video-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left">
              <p className="text-[#2d4284] text-2xl font-bold">Instagram Video Download</p>
              <p className="text-[#616161]">
                We have made it easy to download videos from Instagram. All you have to do is insert the link and click the "Download" button. Our Video Downloader for Instagram is a revolutionary service that will save your favorite IG videos in the best quality.
              </p>
            </div>
          </div>
      
          {/* Feature 2: Instagram Photos Download */}
          <div className="flex flex-col lg:flex-row-reverse rounded-2xl shadow-xl/30 overflow-hidden mt-8">
            <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left">
              <p className="text-[#2d4284] text-2xl font-bold">Instagram Photos Download</p>
              <p className="text-[#616161]">
                We have made it easy to download photos from Instagram. All you have to do is insert the link and click the "Download" button. Our Photo Downloader for Instagram is a revolutionary service that will save your favorite IG photos in the best quality.
              </p>
            </div>
            <div className="w-full lg:w-2/5">
              <img
                src="photos_downloader.webp"
                alt="photo-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      
          {/* Feature 3: Instagram IGTV Download */}
          <div className="flex flex-col lg:flex-row rounded-2xl shadow-xl/30 overflow-hidden mt-8">
            <div className="w-full lg:w-2/5">
              <img
                src="reels_downloader.webp"
                alt="reels-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left">
              <p className="text-[#2d4284] text-2xl font-bold">Instagram IGTV Download</p>
              <p className="text-[#616161]">
                We have made it easy to download IGTV videos from Instagram. All you have to do is insert the link and click the "Download" button. Our IGTV Downloader for Instagram is a revolutionary service that will save your favorite IGTV videos in the best quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Feature;