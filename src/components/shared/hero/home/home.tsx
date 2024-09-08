'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import LinkButton from '../../button/link-button'
import ImageList from './image-list'
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
      {list.map((el, index) => (
        <Image
          key={index}
          src={el}
          alt={'blog'}
          width={1200}
          height={900}
          className={` ${
            index === currentIndex ? 'block' : 'hidden'
          } h-full w-full object-cover`}
        />
      ))}
      <LeftComp />
      <div className="absolute h-fit w-fit md:mt-20 pt-14 top-0 md:right-0 ">
        <div className="md:mx-8 lg:mx-[200px] flex md:flex-col gap-3 items-center pl-4 md:pl-0">
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
