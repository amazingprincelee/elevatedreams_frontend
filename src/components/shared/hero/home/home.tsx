'use client'

import { FC, useEffect, useState } from 'react'
import LeftComp from './left-comp'

type Props = {}
const HomeHero: FC<Props> = ({}) => {
  const list = ['/images/oil.jpg', '/images/power.jpg', '/images/refinery.jpg']
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length)
  }

  const interval = 5000

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval)

    return () => clearInterval(intervalId)
  }, [currentIndex, interval])

  return (
    <div className="w-full h-[565px] flex lg:h-[750px] relative">
      {list.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <LeftComp />
      <div className="absolute h-fit w-fit md:mt-20 pt-14 top-0 md:right-0 ">
        <div className="md:mx-8 lg:mx-[100px] 2xl:mx-[200px] flex md:flex-col gap-3 items-center pl-4 md:pl-0">
          {list.map((_, i) =>
            currentIndex === i ? (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="bg-white rounded-full h-2 w-2"
              ></div>
            ) : (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="rounded-full w-2 h-2 bg-gray-400"
              ></div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
export default HomeHero
