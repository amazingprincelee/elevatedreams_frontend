'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ElevateYourDreams = () => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/about-us')
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-12 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
        <Image
          src="/images/video-placeholder.jpg"
          alt="Happy Family"
          width={1200}
          height={900}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v18l15-9L5 3z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-5">
        <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
          We <span className="text-secondary italic">Elevate</span> Your Dreams
        </h1>
        <p className="mt-4 text-gray-700">
          We Elevate Dreams, because we believe that the journey to building a
          life in the United States should be as smooth and inspiring as the
          dreams that drive it. We specialize in EB1, EB2, and EB5 visa
          applications, guiding you every step of the way so that the
          complexities of immigration law don’t get in the way of your future.
          Our approach is simple: we care deeply about your success and go the
          extra mile to make it happen.
        </p>

        {/* Features */}
        <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-8">
          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M9 8h6m4 4h.01M4 4l.01 16M20 4l.01 16"
                />
              </svg>
              <h3 className="text-lg font-semibold ml-2">
                Complete Application Support
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              From preparing documents to liaising with U.S. immigration
              authorities, we handle every step of the process so you can focus
              on what matters most.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75v16.5m-9-16.5v16.5M3 9.75h18m-18 4.5h18"
                />
              </svg>
              <h3 className="text-lg font-semibold ml-2">
                Personalized Consultations
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              We take the time to understand your unique situation and craft the
              best legal strategy for your immigration journey.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-600"
            onClick={handleNavigation}
          >
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  )
}

export default ElevateYourDreams
