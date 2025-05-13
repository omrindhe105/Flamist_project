import React from 'react';
// Frontend\public\flamist.png
import flamistLogo from '/flamist.png';


function Miniheader() {
  return (
    <div className='bg-gradient-to-r from-cyan-400 to-blue-400'>
      <div  className='  w-11/12 md:w-4/6 lg:w-3/6 mx-auto    flex  items-center justify-between     '>
        <div className=' w-40 my-2  '>
          <img className='w-full rounded-full' src={flamistLogo} alt='Flamist Logo' />
        </div>

        <div className='text-black  flex font-semibold  text-lg  gap-5 cursor-pointer px-5  '>
          <h3 className='  hover:text-[#f76a20] '>
           FAQ

          </h3>
          <h3 className='hover:text-[#f76a20]'>
          ABOUT

          </h3>
        </div>


    </div>
    </div>
  )
}

export default Miniheader