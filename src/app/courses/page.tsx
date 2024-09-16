'use client'

import HeroSection from '@/components/pages/about-us/hero'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import TopCourses from '@/components/shared/top-courses/top-courses'
import { FC, useEffect, useState } from 'react'
import { get } from '../../../backend_services/api_services'

type Props = {}
const CoursesPage: FC<Props> = ({}) => {
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiData: any = await get('/course')
        if (apiData && apiData.data) setCourses(apiData.data)
      } catch (error) {
        //    toast.error("Please check your internet connectivity");
      }
    }

    fetchApiData()
  }, [])
  return (
    <div>
      <HeroSection />
      <TopCourses courses={courses} hideButton />
      <CourseFilter courses={courses} row={3} showPagination />
      <LearningJourney />
    </div>
  )
}
export default CoursesPage
