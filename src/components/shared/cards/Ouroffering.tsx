import React from 'react'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
}

const Ouroffering = () => {
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ouroffering
