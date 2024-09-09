import Image from 'next/image'
import React, { useState } from 'react'

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
    imageSrc: '/path-to-image1.jpg',
    text: 'Very conducive learning institute. I achieved my goal as a web developer with ease. Thank you Loctech.',
    name: 'Osarwari Innocent',
    title: 'Full-stack Web Developer',
  },
  {
    id: 2,
    imageSrc: '/path-to-image2.jpg',
    text: 'Another testimonial goes here. It can be longer or shorter depending on the content.',
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
    <div className="max-w-lg mx-auto">
      <div className="relative bg-black text-white p-6 rounded-xl flex items-center space-x-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full flex items-center space-x-6"
            >
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-lg">{testimonial.text}</p>
                <h3 className="mt-4 text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
