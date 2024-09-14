import { useWindowSize } from '@/lib/hooks/useResize'
import { motion } from 'framer-motion'
import { FC } from 'react'
import CourseCard from '../course-card'
import CardLoader from './loader'

type Props = { courses: CourseProps[]; row?: number; showPagination?: boolean }
const CoursesList: FC<Props> = ({ courses, row = 2, showPagination }) => {
  const {
    windowSize: { width },
  } = useWindowSize()

  const count = width !== undefined && width > 1024 && width < 1660 ? 3 : 4
  const totalRow = row * count

  const courseList = courses.slice(0, totalRow)

  return (
    <div className="flex col items-center justify-center def-contain">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-5 gap-10 md:gap-5  ">
        {courseList.length < 1
          ? Array.from({ length: totalRow }, (_, i) => <CardLoader key={i} />)
          : courseList.map((course: any, index: number) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.4,
                  delay: 0.2 + 0.2 * index,
                }}
                viewport={{ once: true }}
                exit="exit"
                animate={{
                  scale: [0.9, 1],
                }}
                whileInView={{
                  scale: [0.9, 1],
                }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
      </div>
    </div>
  )
}
export default CoursesList
