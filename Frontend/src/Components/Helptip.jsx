import React from 'react'

function Helptip() {
  return (
    <div className='w-full md:w-4/6 lg:w-6/6 mx-auto flex flex-wrap gap-5 justify-center items-center'>
    <div className='text-left pr-5 w-full md:w-5/12'>
      <div className='pb-3'>
        <h2 className='text-[#2d4284] text-3xl font-semibold'>1. Copy the URL</h2>
        <p className='text-[#616161] text-2xl'>Open the Instagram application or website, copy the URL of the photo, video, reels, carousel, IGTV.</p>
      </div> 
      <div className='pb-3'>
        <h2 className='text-[#2d4284] text-3xl font-medium'>2. Paste the URL</h2>
        <p className='text-[#616161] text-2xl'>Return to Flamist, paste the copied URL into the input box, and press the "Download" button.</p>
      </div>
      <div className='pb-3'>
        <h2 className='text-[#2d4284] text-2xl font-medium'>3. Download</h2>
        <p className='text-[#616161] text-2xl'>Quickly you will get the results with several quality options. Download what fits your needs.</p>
      </div>
    </div>
    
    <div className='w-full md:w-5/12 order-first md:order-last'>
      <img src="way-to-download.jpg" alt="Download Instructions" className="w-full h-auto object-cover" />
    </div>
  </div>
  
  )
}

export default Helptip