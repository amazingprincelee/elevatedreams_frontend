import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

interface Testimonial {
  id: number
  imageSrc: string
  text: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    imageSrc: '/images/testimonial-slide/olawumi.png',
    text: 'Very conducive learning institute. I achieved my goal as a web developer with ease. Thank you Loctech.',
    name: 'Olawumi Innocent',
    title: 'Full-stack Web Developer',
  },
  {
    id: 2,
    imageSrc: '/images/testimonial-slide/olawumi.png',
    text: 'Another testimonial goes here. I achieved my goal as a web developer with ease. Thank you Loctech.',
    name: 'Another Person',
    title: 'Frontend Developer',
  },
]

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="container mx-auto m-8">
      <div className="md:flex md:flex-col lg:flex-row relative  bg-black text-white rounded-xl shadow-lg items-center space-x-0 md:space-x-8 md:px-10 md:py-20 lg:px-80 lg:py-32 rounded-br-[100px]">
        {/* Image container */}
        <div className="lg:w-1/3 md:w-full w-full p-12 flex justify-center">
          <Image
            src={testimonials[currentIndex].imageSrc}
            alt={testimonials[currentIndex].name}
            width={438}
            height={437}
            className="rounded-lg object-cover w-full h-auto max-w-[438px] max-h-[437px]"
          />
        </div>

        {/* Text area */}
        <div className="md:w-[550px] md:h-[300px] py-10">
          <p className="md:text-2xl font-thin font-jakarta">
            {testimonials[currentIndex].text}
          </p>

          <div className="mt-16 font-jakarta">
            <h3 className="mt-6 text-2xl font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-lg text-gray-400 font-jakarta">
              {testimonials[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 px-10 md:bg-white p-3 md:w-60 md:absolute md:bottom-0 md:right-0 rounded-tl-lg">
          <button
            onClick={handlePrev}
            className="hover:border-red-700 text-red-500 p-3 rounded-full border-2 border-red-500"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="hover:border-red-700 text-red-500 p-3 rounded-full border-2 border-red-500"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
