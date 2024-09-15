import { motion } from 'framer-motion'
import { FC } from 'react'
import LinkButton from '../button/link-button'
import CourseCard from '../course/course-card'
import CardLoader from '../course/loader'
import { Header, SubHeader } from '../header'

type Props = { courses: CourseProps[] }
const TopCourses: FC<Props> = ({ courses }) => {
  const courseList = courses.slice(0, 2)
  return (
    <div className="bg-base padding">
      <div className="def-contain">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: [0, 1], translateX: [-100, 0] }}
            animate={{ opacity: [0, 1], translateX: [-100, 0] }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="flex flex-col gap-3  2xl:w-[80%]"
          >
            <Header text={'Top Courses'} />
            <SubHeader
              text={
                'Dive into 20+ courses encompassing Data Science, Software Engineering, Cloud Computing, and more, all available.'
              }
            />
            <LinkButton url={'#'} label={'VIEW ALL COURSES'} isIcon={true} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: [0, 1], translateX: [100, 0] }}
            animate={{ opacity: [0, 1], translateX: [100, 0] }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="md:flex-row flex flex-col gap-2 col-span-2 2xl:col-span-1"
          >
            {courseList.length < 1
              ? Array.from({ length: 2 }, (_, i) => <CardLoader key={i} />)
              : courseList.map((course, i) => (
                  <CourseCard key={i} course={course} />
                ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default TopCourses
