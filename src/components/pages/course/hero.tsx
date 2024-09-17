import { FC } from 'react'
import SvgEffect from './hero-svg-background-effect'

type Props = { title: string; overview: string; metaDescription: string }
const Hero: FC<Props> = ({ title, overview, metaDescription }) => {
  return (
    <div className="w-full relative bg-darkIndigo text-white md:pt-40 pt-32 lg:pb-[100px] pb-[300px] sm:pb-[400px]">
      <SvgEffect />
      <div className="relative flex flex-col gap-3 z-10 items-start def-contain">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-jakarta font-bold xl:w-[70%] lg:w-[50%]">
          {title}
        </h1>
        <p className="text-base max-w-2xl font-jakarta font-thin">{overview}</p>
        {/* <p className="text-base max-w-2xl mb-8 font-jakarta font-thin">
          {metaDescription}
        </p> */}
      </div>
    </div>
  )
}
export default Hero
