import React from 'react'
import { FaPlay } from 'react-icons/fa' // Import the play icon

function Video() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative w-full max-w-4xl h-96 rounded-2xl bg-fixed bg-center bg-cover border-4 border-orange-500"
        style={{
          backgroundImage: "url('/images/video-placeholder.jpg')",
        }}
      >
        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-secondary text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600">
            <FaPlay className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Video
