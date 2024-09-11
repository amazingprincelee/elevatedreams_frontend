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
      tchecext:
        'Immerse yourself in our expert-led, interactive classes for a hands-on learning experience that goes beyond traditional methods.',
    },
    {
      imageSrc: '/images/oil.jpg',
      title: 'Online Learning',
      text: 'Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources.',
    },
  ]

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <p className="p-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Offerings
        </p>
        <div className="grid grid-cols-1  md:grid-cols-2  gap-6">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="bg-base rounded-[24px] shadow-md overflow-hidden"
            >
              <div className="p-8 object-cover mx-auto">
                <div className="h-[430px] md:h-[300px] lg:h-[410px]">
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
                <div className="flex mt-6 md:mt-16 lg:mt-14">
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <LinkButton
                      url={'#'}
                      label={'EXPLORE OUR COURSES'}
                      isIcon={true}
                      className={`${
                        index === 1
                          ? 'bg-darkIndigo hover:bg-blue-600'
                          : 'bg-primary'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OfferingCourseCard
