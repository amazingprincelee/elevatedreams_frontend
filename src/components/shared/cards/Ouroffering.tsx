import React from 'react'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
}

const OurOffering = () => {
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className=" bg-slate-100 rounded-lg shadow-md overflow-hidden"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurOffering
