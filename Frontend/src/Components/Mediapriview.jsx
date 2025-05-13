import React from 'react';

function Mediapriview({ imageUrl }) {
  if (!imageUrl || imageUrl.length === 0) return null;

  const getProxiedUrl = (url) =>
    `http://localhost:3000/proxy?url=${encodeURIComponent(url)}`;

  const handleDownload = async (url) => {
    try {
      const response = await fetch("http://localhost:3000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: imageUrl }),
      });

      const result = await response.json();
      console.log("Media URL:", result.media);

      setMediaUrl(result.media);
      setInputLink("");
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download media.");
    }
  };

  return (
    <ul className="flex flex-wrap gap-3 md:flex-row  justify-center max-w-4xl mx-auto my-4 overflow-x-auto bg-blue">
      {imageUrl.map((url, idx) => (
        <li
          key={idx}
          className="flex flex-col items-center border border-gray-300 rounded shadow-md  w-[300px]"
        >
          {url.includes('.mp4') ? (
            <video controls className="h-[320px] w-full object-contain rounded">
              <source src={getProxiedUrl(url)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={getProxiedUrl(url)}
              alt={`Instagram media ${idx + 1}`}
              className="w-full object-contain rounded"
            />
          )}
          <button
            className=" bg-blue-700  text-2xl font-semibold px-4 text-white   rounded hover:bg-blue cursor-pointer w-[300px]"
            onClick={() => handleDownload(url)}
          >
            Download
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Mediapriview;
