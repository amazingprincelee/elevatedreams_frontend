'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import LinkButton from '../../button/link-button'
import ImageList from './image-list'

type Props = {}
const LeftComp: FC<Props> = ({}) => {
  return (
    <div className="absolute top-0 left-0 h-full bg-gradient-to-r md:from-50% lg:from-30% from-slate-950 lg:w-[70%]">
      <div className="mt-20 def-contain grid gap-5">
        <p className=" text-white font-bold lg:text-6xl text-4xl md:w-[50%] lg:w-[80%]">
          <div className="flex-center gap-1 w-full">
            Learn
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative border-l-primary border-l-1 border-r-1  h-[50px] lg:h-[70px] flex-center border-r-primary "
            >
              <div className="absolute top-1 bg-primary -left-1 w-2 h-[1px]"></div>
              <div className="absolute bottom-1 bg-primary -left-1 w-2 h-[1px]"></div>
              <motion.p className="whitespace-nowrap bg-primary/20 ">
                Tech Skills
              </motion.p>
              <div className="absolute top-1 bg-primary -right-1 w-2 h-[1px]"></div>
              <div className="absolute bottom-1 bg-primary -right-1 w-2 h-[1px]"></div>
            </motion.div>
          </div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Now and Shape Your Future
          </motion.span>
        </p>
        <div className=" md:w-[50%] lg:w-[60%] w-full">
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm font-normal text-white text-wrap"
          >
            From foundational principles to advanced techniques, we provide
            hands-on learning experiences designed to empower you to achieve
            your career goals.
          </motion.span>
        </div>
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <LinkButton url={'#'} label={'Explore Our Courses'} isIcon={true} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex-center "
        >
          <ImageList />
          <div className="2xl:w-[20%] md:w-[30%] lg:w-[40%] w-[60%] text-white ">
            <p className="text-xs font-normal ">
              Become one of our 2000+ students from around the world
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default LeftComp
