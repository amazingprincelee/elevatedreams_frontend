import SvgEffect from '@/svg-background-effect'
import React from 'react'
import { BsStars } from 'react-icons/bs'
import LinkButton from '../button/link-button'

const LearningJourney = () => {
  return (
    <div className="container mb-8 relative bg-darkIndigo text-white min-h-[500px] rounded-3xl overflow-hidden flex flex-col items-center justify-center">
      <SvgEffect />

      <div className="relative z-10 flex flex-col items-center justify-center font-jakarta  h-full">
        <div className="flex flex-row p-2">
          <BsStars size={24} />
          <p className="mb-4 text-sm ml-2 ">
            {' '}
            Pioneer in the field of IT Training
          </p>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 mt-4 text-center">
          Start your learning journey for Free!
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 mt-3 text-center">
          Get certified in our industry standard course and smash all your tech
          goals.
        </p>

        <LinkButton
          url={'#'}
          label={'Get Started'}
          isIcon={true}
          className="w-[#177px]"
        />
      </div>
    </div>
  )
}

export default LearningJourney
