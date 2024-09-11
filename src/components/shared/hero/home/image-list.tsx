'use client'

import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const ImageList: FC<Props> = ({}) => {
  return (
    <div className="flex relative w-[120px] ">
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full border-1 border-white"
      />
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover absolute left-5 rounded-full  border-1 border-white"
      />
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full absolute left-10  border-1 border-white"
      />
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full  border-1 absolute left-[60px] border-white"
      />
      <Image
        src={'/images/oil.jpg'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full  border-1 absolute left-[80px] border-white"
      />
    </div>
  )
}
export default ImageList
