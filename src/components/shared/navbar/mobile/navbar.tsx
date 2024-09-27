'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useRef } from 'react'
import { linksData } from '..'
import LinkButton from '../../button/link-button'

type Props = {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
  path: string
}
const MobileNavbar: FC<Props> = ({ isOpen, setIsOpen, path }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className={` z-30 grid grid-cols-[70%_30%] md:grid-cols-[50%_50%] fixed transition duration-[2000ms] delay-150 ease-in-out h-full ${
        isOpen
          ? 'translate-x-[0] lg:-translate-x-[100%]'
          : '-translate-x-[100%]'
      } w-full  block lg:hidden`}
    >
      <motion.div
        initial={false}
        transition={{
          ease: 'easeInOut',
          duration: 0.4,
          delay: 0.5,
        }}
        animate={{
          opacity: [0, 1],
          translateX: [-100, 0],
        }}
        // style={{ overflow: "hidden" }}
        className={`bg-white  h-full px-6 pt-5`}
      >
        {linksData.map((item, index) => {
          return (
            <Link href={item.url} onClick={() => setIsOpen(false)} key={index}>
              <motion.div
                transition={{
                  ease: 'easeInOut',
                  duration: 0.4,
                  delay: 0.2 + 0.2 * index,
                }}
                animate={{
                  opacity: [0, 1],
                  translateX: [-100, 0],
                }}
                key={index}
                className="flex-gap gap-3 py-4"
              >
                <p
                  className={`${
                    path !== item.url ? 'text-gray-600' : 'text-primary'
                  }`}
                >
                  {item.name}
                </p>
              </motion.div>
            </Link>
          )
        })}
        <motion.div
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
            delay: 1.4,
          }}
          animate={{
            opacity: [0, 1],
            translateX: [-100, 0],
          }}
        >
          <div className="grid gap-2 mt-10">
            <LinkButton
              url={'/login'}
              label={'Log in'}
              className="border w-full border-primary bg-transparent text-primary hover:text-white py-3"
            ></LinkButton>
            <LinkButton
              url={'/register'}
              label={'Get Started'}
              className=" w-full border py-3"
            ></LinkButton>
          </div>
        </motion.div>
      </motion.div>
      {isOpen && (
        <div
          className="bg-gray-500/70 h-full"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}
export default MobileNavbar
