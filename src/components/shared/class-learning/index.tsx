'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import LinkButton from '../button/link-button'
import { Header, SubHeader } from '../header'

type Props = {}
const ClassLearning: FC<Props> = ({}) => {
  return (
    <div className="margining def-contain">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex-center flex-col md:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            whileInView={{
              translateX: [-100, 0],
              opacity: [0, 1],
            }}
            className=" relative lg:flex"
          >
            <Image
              src={'/images/class/img2.png'}
              alt={'class-card'}
              width={1200}
              height={900}
              className="h-full object-cover rounded-lg"
            />
            <div className="px-4 absolute w-full bottom-3">
              <div className="py-2 w-full font-semibold flex-center gap-3 rounded-lg bg-white bg-opacity-70">
                <Image
                  src={'/icons/class.svg'}
                  alt={'class-card'}
                  width={1200}
                  height={900}
                  className="w-6"
                />
                <p>Classroom Learning</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            whileInView={{
              translateX: [100, 0],
              opacity: [0, 1],
            }}
            className=" relative lg:-mt-20 "
          >
            <Image
              src={'/images/class/img1.png'}
              alt={'class-card'}
              width={1200}
              height={900}
              className="h-full object-cover rounded-lg"
            />
            <div className="px-4 absolute w-full bottom-3">
              <div className="py-2 w-full font-semibold flex-center gap-3 rounded-lg bg-white bg-opacity-70">
                <Image
                  src={'/icons/online.svg'}
                  alt={'class-card'}
                  width={1200}
                  height={900}
                  className="w-6"
                />
                <p>Online Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
          whileInView={{
            translateY: [50, 0],
            opacity: [0, 1],
          }}
          className="lg:w-[85%] flex-col flex gap-4"
        >
          <Header text={'Classroom and Online Learning'} />
          <SubHeader
            text={
              'Choose the learning experience that suits you best – at Loctech, we offer both traditional classroom settings and the convenience of online learning. Our state-of-the-art facilities provide an immersive in-person experience, while our robust online platform ensures flexibility and accessibility for learners worldwide. Whatever your preference, Loctech is here to cater to your unique educational journey.'
            }
          />
          <div className="mt-6 ">
            <LinkButton url={'/courses'} label={'EXPLORE OUR COURSES'} isIcon />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default ClassLearning
