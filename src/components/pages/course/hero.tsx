import { FC } from 'react'
import SvgEffect from './hero-svg-background-effect'

type Props = {}
const Hero: FC<Props> = ({}) => {
  return (
    <div className="w-full relative bg-darkIndigo text-white py-32">
      <SvgEffect />
      <div className="relative flex flex-col gap-5 z-10 items-start def-contain">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-jakarta font-bold w-[70%]">
          The Leading Global Marketplace For Learning And Instruction
        </h1>
        <p className="text-base max-w-2xl font-jakarta font-thin">
          Get certified in our industry standard course and smash all your tech
          goals.
        </p>
        <p className="text-base max-w-2xl mb-8 font-jakarta font-thin">
          Welcome to a beacon of IT training, where learning knows no bounds. As
          a leading global marketplace for learning and instruction, we
          transcend geographical limitations, bringing world-class IT education
          to eager minds across the globe.
        </p>
      </div>
    </div>
  )
}
export default Hero
