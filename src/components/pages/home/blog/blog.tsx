'use client'

import { Header } from '@/components/shared/header'
import { useWindowSize } from '@/lib/hooks/useResize'
import { FC, useState } from 'react'
import BlogCard from './blog-card'
import BlogLoader from './loader'

type Props = { row?: number; showPagination?: boolean }
const Blog: FC<Props> = ({ row = 1, showPagination }) => {
  const [blogs, setBlogs] = useState(['', '', '', ''])

  const {
    windowSize: { width },
  } = useWindowSize()

  const count =
    typeof width === 'number'
      ? width > 1024 && width < 1660
        ? 3
        : width > 300 && width < 1024
          ? 2
          : 4
      : 0

  const totalRow = row * count

  const blogList = blogs.slice(0, totalRow)

  return (
    <div className="def-contain flex flex-col gap-5 md:gap-10 margining">
      <Header text={' Latest from our Blogs'} />
      <div className="responsive-grid">
        {blogList.length < 1
          ? Array.from({ length: totalRow }, (_, i) => <BlogLoader key={i} />)
          : blogList.map((el: any, index: number) => <BlogCard key={index} />)}
      </div>
    </div>
  )
}
export default Blog
