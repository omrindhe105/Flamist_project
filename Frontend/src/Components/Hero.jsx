import React, { useState } from 'react';
import { Video, Image, Eye, Film, Radar } from 'lucide-react';

import Mediapriview from './Mediapriview';
import Loader from './Loader';


function Hero() {
  const [inputLink, setInputLink] = useState("");
  const [mediaUrl, setMediaUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkSubmit = async (e) => {
    e.preventDefault();

    if (!inputLink) {
      alert("Please enter a URL.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/searchMedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputLink }),
      });

      const result = await response.json();
      

      setMediaUrl(result.media);
      setInputLink("");
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download media.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const pastedText = await navigator.clipboard.readText();
      setInputLink(pastedText);
    } catch (error) {
      console.error("Failed to paste: ", error);
    }
  };

  return (
    <div>
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-7 text-center text-white">
      <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto">
        {/* Icon Section */}
        <div className="flex flex-wrap justify-center bg-white/30 md:backdrop-blur-lg rounded-lg mt-5 text-white ">
          {[{ icon: Video, label: "Video" },
          { icon: Image, label: "Photos" },
          { icon: Film, label: "Reels" },
          { icon: Eye, label: "Stories" },
          { icon: Radar, label: "Highlights" }
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className={`flex items-center px-4 py-2 ${i !== 4 && 'border-r'} border-white`}>
              <Icon /> <span className="px-1 font-mono">{label}</span>
            </div>
          ))}
        </div>
  
        {/* Heading Section */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-5xl font-bold">Instagram Content Downloader</h1>
          <h2 className="mt-3 text-base md:text-lg">
            The fastest way to save your favorite Instagram content directly to your device.
          </h2>
        </div>
  
        {/* Form Section */}
        <form onSubmit={handleLinkSubmit} className="mt-6">
          <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-2xl gap-4">
            <input
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              className="w-full md:w-[350px] flex-1 px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black text-lg"
              type="text"
              placeholder="Enter Instagram URL Here"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <button
              type="button"
              onClick={handlePaste}
              className="w-full md:w-auto py-2 px-4 rounded-md border-2 border-gray-300 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Paste
            </button>
            <button
              type="submit"
              className="w-full md:w-auto py-2 px-4 rounded-md border-2 border-gray-300 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Search
            </button>
          </div>
        </form>
  
        {/* Features Section */}
       
        <div className="flex flex-wrap justify-center items-center gap-4 text-white/80 mt-5">
          {[
            { color: "green", text: "100% Safe & Secure" },
            { color: "blue", text: "No Login Required" },
            { color: "yellow", text: "High Quality Download" }
          ].map(({ color, text }, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-3 h-3 bg-${color}-400 rounded-full mr-2`} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    {/* Media Preview Section */}
    <div className="w-11/12 md:w-4/6 lg:w-3/6 mx-auto mt-8 flex justify-center bg-[#F3F4F6]">
      {isLoading ? (
        <Loader/>
      ) : (
        mediaUrl && <Mediapriview imageUrl={mediaUrl} />
      )}
    </div>
  </div>
  
  );
}

export default Hero;
