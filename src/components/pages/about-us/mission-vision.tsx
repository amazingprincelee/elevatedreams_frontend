import Image from 'next/image'
import React from 'react'

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8 lg:p-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/3">
        <Image
          src="/images/aboutpicture.png"
          alt="A person sitting on stairs"
          className="rounded-lg shadow-lg w-full"
          width={500}
          height={500}
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome To Elevate Dreams
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          Welcome to Elevate Dreams, where we empower individuals,
          entrepreneurs, and visionaries to reach their fullest potential. Our
          goal is to simplify the path to U.S. immigration and business success,
          helping exceptional individuals, skilled professionals, and investors
          achieve their goals. Through personalized support and comprehensive
          services, we elevate our clients’ dreams and deliver outstanding
          results.
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission at Elevate Dreams is to provide clear, personalized
            pathways for individuals, entrepreneurs, and investors to achieve
            success in the U.S. Through thorough guidance, tailored strategies,
            and comprehensive services, we empower our clients to overcome
            obstacles and reach their goals with confidence. We are dedicated to
            transforming dreams into tangible results, fostering growth, and
            creating lasting impact for those we serve.
          </p>
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            We envision a world where crossing borders to pursue a better future
            or grow a business is a seamless process, filled with trust,
            opportunity, and hope. At Elevate Dreams, we open doors for
            individuals and businesses alike, turning aspirations into reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
