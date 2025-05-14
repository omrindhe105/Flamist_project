import React from 'react';

function Mediapriview({ imageUrl }) {
  if (!imageUrl || imageUrl.length === 0) return null;

  const getProxiedUrl = (url) =>
    `http://localhost:3000/proxy?url=${encodeURIComponent(url)}`;



  const handleDownload = async (url) => {



    try {
      const response = await fetch(getProxiedUrl(url)); // Use proxy to bypass CORS

      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob(); // Convert to binary
      const downloadUrl = window.URL.createObjectURL(blob); // Create temporary download URL

      const link = document.createElement('a');
      link.href = downloadUrl;
      const ext = url.includes('.mp4') ? '.mp4' : '.jpg';
      link.download = `instagram-media${ext}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl); // Clean up

      alert('✅ Download started');
    } catch (err) {
      console.error('❌ Download error:', err.message);
      alert('Download failed');
    }




  };


  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 bg-[#F3F4F6]">
    <div
      className={`flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2 ${
        imageUrl.length > 1
          ? 'snap-x snap-mandatory'
          : 'justify-center flex-wrap'
      }`}
    >
      {imageUrl.map((url, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 snap-center border border-gray-300 rounded shadow-md w-[85%] sm:w-[300px] md:w-[280px] lg:w-[320px] bg-white"
        >
          {url.includes('.mp4') ? (
            <video
              controls
              className="w-full aspect-video object-contain rounded"
            >
              <source src={getProxiedUrl(url)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={getProxiedUrl(url)}
              alt={`Instagram media ${idx + 1}`}
              className="w-full h-auto max-h-[320px] object-contain rounded"
            />
          )}
          <button
            className="bg-blue-700 mt-2 text-base md:text-lg font-semibold px-4 py-2 text-white rounded hover:bg-blue-800 w-full"
            onClick={() => handleDownload(url)}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
  

  );
}

export default Mediapriview;
