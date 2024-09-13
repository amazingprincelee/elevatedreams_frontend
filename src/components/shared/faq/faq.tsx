'use client'

import { motion } from 'framer-motion'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { FC, useState } from 'react'
import { dataInfo } from '.'

type Props = {}
const Faq: FC<Props> = ({}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  return (
    <div className=" pt-10 pb-20 bg-base">
      <div className="flex flex-col def-contain lg:items-center gap-10">
        <h1 className="md:text-4xl text-2xl text-center font-black">
          Frequently Asked Questions
        </h1>
        <div className="lg:w-[80%] 2xl:w-[70%]">
          {dataInfo.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 w-full py-4">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-black text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={openIndex === index ? 'open' : 'closed'}
                  variants={{
                    open: {
                      height: 'auto',
                      opacity: 1,
                      transition: { duration: 0.5, ease: 'easeInOut' },
                    },
                    closed: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: 5,
                        ease: 'easeInOut',
                        delay: 5,
                      },
                    },
                  }}
                >
                  <div className="px-4 pt-2 pb-4 text-xs text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
          </motion.ul>
        </div>
      </div>
    </div>
  )
}
export default Faq
