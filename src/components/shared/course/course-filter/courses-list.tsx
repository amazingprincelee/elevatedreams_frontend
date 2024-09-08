import { FC } from 'react'
import CourseCard from '../course-card'

type Props = { courses: any[] }
const CoursesList: FC<Props> = ({ courses }) => {
  return (
    <div className=" container mx-auto ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10  ">
        {courses.map((el: any, index: number) => (
          <div key={index} className="grid self-center">
            <CourseCard />
          </div>
        ))}
      </div>
    </div>
  )
}
export default CoursesList
