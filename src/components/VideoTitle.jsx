import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-full aspect-video pt-[9%] px-6 md:px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div className='my-4 md:m-0'>
        <button className=" bg-white text-black py-2 md:py-4 px-4 md:px-12 text-xl  rounded-lg hover:opacity-80 cursor-pointer">
          Play
        </button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-75 rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle