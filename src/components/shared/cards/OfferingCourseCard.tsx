import React from 'react'
import LinkButton from '../button/link-button'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
}

const OfferingCourseCard = () => {
  const cardDetails: OfferingCard[] = [
    {
      imageSrc: '/images/oil.jpg',
      title: 'Classroom Learning',
      text: 'Immerse yourself in our expert-led, interactive classes for a hands-on learning experience that goes beyond traditional methods.',
    },
    {
      imageSrc: '/images/oil.jpg',
      title: 'Online Learning',
      text: 'Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources.',
    },
  ]

  return (
    <div className="flex justify-center items-center min-h-[643px] min-w-[1240px]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <p className="p-4 text-[48px] font-bold">Our Offerings</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="bg-[#F1F2F4] rounded-[24px] shadow-md overflow-hidden"
            >
              <div className="p-8 object-cover mx-auto">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-auto rounded-[24px]"
                />
                <div className="pt-4 font-jakarta">
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              </div>
              <div className="flex items-end mt-8">
                <LinkButton
                  url={'#'}
                  label={'EXPLORE OUR COURSES'}
                  isIcon={true}
                  className={`${index === 1 ? 'bg-[#12005F]' : 'bg-[#DA2721]'}  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OfferingCourseCard
