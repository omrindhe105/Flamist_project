import React from 'react';

function Feature() {
    return (
        <div className="container text-center flex flex-col items-center py-10 bg-gray-100 m-auto">
            <div className="w-11/12 md:w-4/6 lg:w-3/6">
                <h1 className="text-3xl md:text-4xl text-black font-bold mb-6">
                    Flamist - Online Instagram Downloader
                </h1>
                <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] my-3 rounded-md">
                    <div className="w-full bg-white"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-11/12 md:w-4/6 lg:w-3/6 py-8 flex gap-6 flex-col ">
                <div className="flex  rounded-2xl flex-wrap shadow-xl/30">
                    <div className="w-full lg:w-2/5">
                        <img
                            src="video_downloader.webp"
                            alt="video-image"
                            className="w-full h-full object-cover rounded-l-2xl lg:rounded-l-2xl lg:rounded-none"
                        />
                    </div>
                    <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left">
                        <p className="text-[#2d4284] text-2xl font-bold">Instagram Video Download</p>
                        <p className="text-[#616161]">
                            We have made it easy to download videos from Instagram. All you have to do is insert the link and click the "Download" button. Our Video Downloader for Instagram is a revolutionary service that will save your favorite IG videos in the best quality.
                        </p>
                    </div>
                </div>


                 {/* ****************************** */}
                <div className="flex  rounded-2xl flex-wrap shadow-xl/30">
                    <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left order-2 lg:order-1">
                        <p className="text-[#2d4284] text-2xl font-bold">Instagram Photos Download</p>
                        <p className="text-[#616161]">
                            We have made it easy to download videos from Instagram. All you have to do is insert the link and click the "Download" button. Our Video Downloader for Instagram is a revolutionary service that will save your favorite IG videos in the best quality.
                        </p>
                    </div>
                    <div className="w-full lg:w-2/5 order-1 lg:order-2">
                        <img
                            src="photos_downloader.webp"
                            alt="photo-image"
                            className="w-full h-full object-cover rounded-l-2xl lg:rounded-l-none lg:rounded-r-2xl"
                        />
                    </div>
                </div>

                {/* ******************************** */}
                <div className="flex  rounded-2xl flex-wrap shadow-xl/30   ">
                    <div className="w-full lg:w-2/5">
                        <img
                            src="reels_downloader.webp"
                            alt="reels-image"
                            className="w-full h-full object-cover rounded-l-2xl lg:rounded-l-2xl lg:rounded-none"
                        />
                    </div>
                    <div className="w-full lg:w-3/5 p-3 lg:py-5 lg:pl-5 text-left">
                        <p className="text-[#2d4284] text-2xl font-bold">Instagram IGTV Download</p>
                        <p className="text-[#616161]">
                            We have made it easy to download videos from Instagram. All you have to do is insert the link and click the "Download" button. Our Video Downloader for Instagram is a revolutionary service that will save your favorite IG videos in the best quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;