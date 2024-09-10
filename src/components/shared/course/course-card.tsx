'use client'

import { truncateString } from '@/lib/util'
import { ShoppingCartIcon, Timer } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../button/button'

type Props = {}
const CourseCard: FC<Props> = ({}) => {
  return (
    <div className="shadow-sm grid max-w-[400px] h-[580px] rounded-xl gap-3 pb-5 bg-white">
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-full w-full object-cover rounded-t-xl"
      />
      <div className="grid px-4">
        <h2 className="font-bold text-lg">Data Science and Python</h2>
        <span className="text-xs font-medium text-primary">Data Science</span>
        <span className="text-xs font-light text-slate-600 leading-relaxed mt-5">
          {truncateString(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi aut, corporis dolorum saepe earum id nobis voluptate rem neque
        nemo distinctio odit eveniet corrupti, qui, tempore tempora ab ea?`)}
        </span>
        <div className="flex-center justify-between gap-4 mt-10">
          <div className="flex-center flex-1 gap-1 bg-base rounded-lg p-3">
            <Image
              src={'/icons/timer.svg'}
              alt="timer"
              width={48}
              height={48}
              className="w-5 h-5"
            />
            <span className="font-light leading-tight">2weeks</span>
          </div>
          <span className="font-semibold text-center flex-1 text-xs bg-base rounded-lg p-3 leading-tight">
            #300,000
          </span>
          <Button className="flex-center gap-2 flex-1 font-normal">
            Add to Cart
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CourseCard
