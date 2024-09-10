import React from 'react'
import { BsStars } from 'react-icons/bs'
import LinkButton from '../button/link-button'

const LearningJourney = () => {
  return (
    <div className="mb-8 relative bg-[#1a0b61] text-white min-h-[500px] min-w-[1240px] rounded-3xl overflow-hidden flex flex-col items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="2"
          d="M0 80 C 300 120, 600 40, 900 80 S 1440 160 1800 80"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="2"
          d="M0 160 C 300 200, 600 120, 900 160 S 1440 240 1800 160"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="2"
          d="M0 240 C 300 280, 600 200, 900 240 S 1440 320 1800 240"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="2"
          d="M0 320 C 300 360, 600 280, 900 320 S 1440 400 1800 320"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="2"
          d="M0 400 C 300 440, 600 360, 900 400 S 1440 480 1800 400"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center font-jakarta  h-full">
        <div className="flex flex-row p-2">
          <BsStars size={24} />
          <p className="mb-4 text-sm ml-2 ">
            {' '}
            Pioneer in the field of IT Training
          </p>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
          Start your learning journey for Free!
        </h1>
        <p className="mb-12 mt-3 text-lg">
          Get certified in our industry standard course and smash all your tech
          goals.
        </p>

        <LinkButton url={'#'} label={'Get Started'} isIcon={true} />
      </div>
    </div>
  )
}

export default LearningJourney
