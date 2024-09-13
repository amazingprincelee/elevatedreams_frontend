'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { dataInfo } from './data'

type Props = {}
const ReliedUpon: FC<Props> = ({}) => {
  return (
    <div className="hidden md:flex min-h-screen pt-10">
      <div className="flex flex-col justify-center items-center def-contain gap-10">
        <h1 className="md:text-4xl text-2xl font-black">
          Relied upon by many students
        </h1>
        <div className="grid md:grid-cols-4 gap-5 ">
          {dataInfo.map((el, index) => (
            <motion.div
              className="relative w-fit"
              key={index}
              initial={{ opacity: 0, translateX: -100 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
                delay: 0.2 + 0.2 * index,
              }}
              viewport={{ once: true }}
              exit="exit"
              animate={{
                opacity: [0, 1],
                translateX: [-100, 0],
              }}
              whileInView={{
                opacity: [0, 1],
                translateX: [-100, 0],
              }}
            >
              <Image
                src={el.img}
                alt={'blog'}
                width={1200}
                height={900}
                className="h-full object-cover rounded-xl"
              />
              <p className="absolute mt-10 top-0 2xl:ml-10 mx-3 text-xs left-0 lg:text-sm 2xl:text-lg font-bold lg:w-[70%] w-full">
                {el.text}
              </p>
              <p className="absolute bottom-0 right-0 left-0 lg:text-7xl text-2xl lg:my-10 my-5 font-black w-full text-center ">
                {el.count}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ReliedUpon
