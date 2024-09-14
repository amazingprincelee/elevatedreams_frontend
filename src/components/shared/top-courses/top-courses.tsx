import { FC } from 'react'
import LinkButton from '../button/link-button'
import CourseCard from '../course/course-card'
import { Header, SubHeader } from '../header'

type Props = { courses: CourseProps[] }
const TopCourses: FC<Props> = ({ courses }) => {
  return (
    <div className="bg-base padding">
      <div className="def-contain">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3  2xl:w-[80%]">
            <Header text={'Top Courses'} />
            <SubHeader
              text={
                'Dive into 20+ courses encompassing Data Science, Software Engineering, Cloud Computing, and more, all available.'
              }
            />
            <LinkButton url={'#'} label={'VIEW ALL COURSES'} isIcon={true} />
          </div>
          <div className="md:flex-row flex flex-col gap-2 col-span-2 2xl:col-span-1">
            {courses.slice(0, 2).map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopCourses
