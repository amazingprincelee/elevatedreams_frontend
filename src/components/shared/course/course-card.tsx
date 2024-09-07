'use client'

import { truncateString } from '@/lib/util'
import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const CourseCard: FC<Props> = ({}) => {
  return (
    <div className="shadow-sm grid md:max-w-md rounded-xl gap-3 pb-5 bg-white">
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-full w-full object-cover rounded-t-xl"
      />
      <div className="grid px-4">
        <h2 className="font-semibold text-lg">Data Science and Python</h2>
        <span className="text-sm font-500 text-primary">Data Science</span>
        <span className="text-sm font-light text-slate-600 leading-relaxed mt-5">
          {truncateString(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi aut, corporis dolorum saepe earum id nobis voluptate rem neque
        nemo distinctio odit eveniet corrupti, qui, tempore tempora ab ea?`)}
        </span>
      </div>
    </div>
  )
}
export default CourseCard
