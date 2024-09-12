'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { linksData } from '..'
import LinkButton from '../../button/link-button'

type Props = { isOpen: boolean; setIsOpen: (val: boolean) => void }
const MobileNavbar: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`bg-white z-30 fixed transition-transform duration-300 delay-100 ease-in-out over trans-props h-full ${
        isOpen ? ' translate-x-0' : '-translate-x-full'
      } w-[75%] px-6 block lg:hidden pt-8 md:w-1/2`}
    >
      <div className="">
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
                <p className="">{item.name}</p>
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
              url={''}
              label={'Log in'}
              className="border w-full border-primary bg-transparent text-primary hover:text-white py-3"
            ></LinkButton>
            <LinkButton
              url={''}
              label={'Get Started'}
              className=" w-full border py-3"
            ></LinkButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default MobileNavbar
