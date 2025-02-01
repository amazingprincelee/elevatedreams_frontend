import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import LinkButton from '../button/link-button'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
  class: string
  route: string // Add a route property
}

const Internations = () => {
  const cardDetails: OfferingCard[] = [
    {
      imageSrc: '/images/offering/img1.png',
      title: 'International Business Formation',
      class: 'Business',
      text: 'If you hold an advanced degree (like a Master’s or higher) or have exceptional talent in your field, the EB2 visa may be your gateway to the U.S.',
      route: '/international-business-formation', // Define specific route
    },
    {
      imageSrc: '/images/offering/img2.png',
      title: 'Intellectual Property Protection',
      class: 'Business',
      text: 'We protect your intellectual property, safeguard your brand identity by registering trade marks and protect your creative works including film, music, Art and literature. ',
      route: '/international-investment', // Define specific route
    },
    {
      imageSrc: '/images/offering/img3.png',
      title: 'EB5 Visa (Employment-Based Fifth Preference)',
      class: 'Blended',
      text: 'This visa is ideal if you’re looking to invest in the U.S. economy. By investing a substantial amount in a U.S.',
      route: '/immigration', // Define specific route
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="margining"
    >
      <div className="flex flex-col def-contain">
        <div className="grid grid-cols-1 md:grid-cols-3 h-fit gap-6">
          {cardDetails.map((card, index) => (
            <div key={index} className="bg-base rounded-[24px]">
              <div className="p-4 2xl:p-6 flex flex-col justify-between h-full">
                <div>
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={1200}
                    height={900}
                    className="w-full rounded-[24px]"
                  />
                  <div className="pt-6 font-jakarta">
                    <h3 className="text-2xl font-semibold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.text}</p>
                  </div>
                </div>

                {/* action buttons */}
                <LinkButton
                  url={card.route} // Use the route property
                  label={'Read more'}
                  isIcon={true}
                  className={`mt-5 w-full lg:w-fit ${
                    index === 1
                      ? 'bg-secondary hover:bg-secondary/90'
                      : 'bg-primary'
                  }`}
                  iconClassName={`${
                    index === 1
                      ? 'text-darkIndigo hover:bg-darkIndigo/90'
                      : 'text-primary'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Internations
