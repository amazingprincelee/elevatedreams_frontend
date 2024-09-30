'use client'

import Blog from '@/components/pages/home/blog/blog'
import Faq from '@/components/pages/home/faq/faq'
import HomeHero from '@/components/pages/home/hero/home'
import ReliedUpon from '@/components/pages/home/relied-upon/relied-upon'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import OfferingCourseCard from '@/components/shared/offering-course-card/offering-course-card'
import TestimonialSlider from '@/components/shared/testimonial-slider/testimonial-slider'
import TopCourses from '@/components/shared/top-courses/top-courses'
import { Suspense, useEffect, useState } from 'react'
import { get } from '../../../backend_services/api_services'

export default function Home() {
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
    <Suspense>
      <div className="bg-white overflow-y-scroll">
        <HomeHero />
        <OfferingCourseCard />
        <TopCourses courses={courses} />
        <CourseFilter courses={courses} />
        <TestimonialSlider />
        <ReliedUpon />
        <Blog />
        <Faq />
        <LearningJourney />
      </div>
    </Suspense>
  )
}
