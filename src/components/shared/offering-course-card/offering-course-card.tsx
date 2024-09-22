import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import LinkButton from '../button/link-button'
import { Header } from '../header'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
  class: string
}

const OfferingCourseCard = () => {
  const cardDetails: OfferingCard[] = [
    {
      imageSrc: '/images/offering/img1.png',
      title: 'Classroom Learning',
      class: 'Classroom',
      text: 'Immerse yourself in our expert-led, interactive classes for a hands-on learning experience that goes beyond traditional methods.',
    },
    {
      imageSrc: '/images/offering/img2.png',
      title: 'Online Learning',
      class: 'Online',
      text: 'Discover the convenience of online learning with our courses, featuring interactive sessions and instant access to valuable resources.',
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
      <div className=" flex flex-col def-contain">
        <Header text="Our Offerings" />
        <div className="grid grid-cols-1  md:grid-cols-2 h-fit mt-5 gap-6">
          {cardDetails.map((card, index) => (
            <div key={index} className="bg-base rounded-[24px]">
              <div className="p-4 2xl:p-6">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={1200}
                  height={900}
                  className="w-full rounded-[24px]"
                />
                <div className="pt-6 font-jakarta lg:h-40 xl:h-36">
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>

                {/* action buttons */}
                <LinkButton
                  url={{
                    pathname: '/courses',
                    query: { mode: `${card.class}` },
                  }}
                  label={'EXPLORE OUR COURSES'}
                  isIcon={true}
                  className={`mt-5 lg:mt-0 w-full lg:w-fit ${
                    index === 1
                      ? 'bg-darkIndigo hover:bg-darkIndigo/90'
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

export default OfferingCourseCard
