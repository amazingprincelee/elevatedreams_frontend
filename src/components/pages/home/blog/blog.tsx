'use client'

import { Header } from '@/components/shared/header'
import { useWindowSize } from '@/lib/hooks/useResize'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="def-contain flex flex-col gap-5 md:gap-10 margining xl:pb-10"
    >
      <Header text={' Latest from our Blogs'} />
      <div className="responsive-grid">
        {blogList.length < 1
          ? Array.from({ length: totalRow }, (_, i) => <BlogLoader key={i} />)
          : blogList.map((el: any, index: number) => (
              <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.4,
                  delay: 0.2 + 0.2 * index,
                }}
                viewport={{ once: true }}
                animate={{
                  opacity: [0, 1],
                  translateX: [100, 0],
                }}
                whileInView={{
                  opacity: [0, 1],
                  translateX: [100, 0],
                }}
                key={index}
              >
                <BlogCard />
              </motion.div>
            ))}
      </div>
    </motion.div>
  )
}
export default Blog
