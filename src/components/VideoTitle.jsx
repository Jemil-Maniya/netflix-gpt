import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="pl-13 bg-white text-black p-4 px-12 text-xl  rounded-lg hover:opacity-80 cursor-pointer">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-75 rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle