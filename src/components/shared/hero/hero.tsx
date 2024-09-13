import { BsStars } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa6'
import LinkButton from '../button/link-button'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative bg-darkIndigo text-white py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-pattern bg-cover bg-center opacity-40"></div>
      </div>

      {/* Overlay content */}
      <div className="flex flex-col justify-center lg:items-center relative z-10 container mx-auto">
        <div className="flex gap-2 px-5 py-5">
          <BsStars size={25} />
          <p className="text-sm mb-2">Powered by the Best of IT Training</p>
        </div>

        <h1 className="text-3xl -4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-center font-jakarta font-bold p-5 mb-4">
          The Leading Global Marketplace For Learning And Instruction
        </h1>

        {/* Text for small screens */}
        <p className="text-base p-7 max-w-2xl mx-auto mb-8 font-jakarta font-thin block md:hidden">
          Get certified in our industry standard course and smash all your tech
          goals.
        </p>

        {/* Text for larger screens */}
        <p className="text-base text-center  max-w-2xl mx-auto mb-8 font-jakarta font-thin hidden md:block">
          Welcome to a beacon of IT training, where learning knows no bounds. As
          a leading global marketplace for learning and instruction, we
          transcend geographical limitations, bringing world-class IT education
          to eager minds across the globe.
        </p>

        {/* Button */}
        <div className="font-bold py-3 px-6 inline-flex items-center">
          <LinkButton url={''} label={'Explore Our Courses'} isIcon />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10">
        <div className="bg-white text-red-600 p-2 rounded-full shadow-lg">
          <FaArrowUp />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
