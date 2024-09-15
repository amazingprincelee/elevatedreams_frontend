'use client'

import { truncateString } from '@/lib/utils'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../button/button'

type Props = { course: CourseProps }
const CourseCard: FC<Props> = ({ course }) => {
  const {
    imgUrl,
    metaTitle,
    metaDescription,
    duration,
    amount,
    category,
    slug,
  } = course
  return (
    <div className="shadow-sm flex flex-col h-[560px] w-fit rounded-xl gap-3 pb-5 bg-white">
      <Image
        src={imgUrl}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-[40%] object-cover rounded-t-xl"
      />
      <div className="flex flex-col justify-between mt-2 px-4 h-full">
        <div className="flex flex-col h-full">
          <div className="h-[70px]">
            <Link href={`/courses/${slug}`}>
              <h2 className="font-medium text-lg cursor-pointer hover:text-gray-600 hover:underline">
                {truncateString(metaTitle, 60)}
              </h2>
            </Link>
            <span className="text-xs font-medium text-primary mt-1">
              {category}
            </span>
          </div>
          <span className="text-sm font-light text-slate-500 leading-relaxed mt-5">
            {truncateString(metaDescription, 200)}
          </span>
        </div>
        <div className="flex-center gap-3 mt-10 ">
          <div className="flex-center gap-1 bg-base rounded-lg px-4 py-2 w-full  justify-center ">
            <Image
              src={'/icons/timer.svg'}
              alt="timer"
              width={48}
              height={48}
              className="w-4 h-4"
            />
            <span className="font-light text-xs leading-tight">
              {duration}weeks
            </span>
          </div>
          <span className="font-semibold text-center text-xs px-4 w-full py-2 bg-base rounded-lg p-2 leading-tight">
            ₦{Number(amount).toLocaleString()}
          </span>
          <Button size={'sm'} className="flex-center gap-1 font-xs w-full ">
            Buy Now
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CourseCard
