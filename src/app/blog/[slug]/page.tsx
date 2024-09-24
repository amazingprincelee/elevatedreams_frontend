import HeroComp from '@/components/pages/blog/hero'
import { FC } from 'react'

type Props = {}
const page: FC<Props> = ({}) => {
  return (
    <div>
      <HeroComp />
      <div className="mt-12"></div>
    </div>
  )
}
export default page
