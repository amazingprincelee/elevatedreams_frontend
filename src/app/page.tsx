'use client'

import Blog from '@/components/pages/home/blog/blog'
import Faq from '@/components/pages/home/faq/faq'
import HomeHero from '@/components/pages/home/hero/home'
import ReliedUpon from '@/components/pages/home/relied-upon/relied-upon'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import OfferingCourseCard from '@/components/shared/offering-course-card/offering-course-card'
import TopCourses from '@/components/shared/top-courses/top-courses'

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />
      <OfferingCourseCard />
      <TopCourses />
      <CourseFilter />
      <ReliedUpon />
      <Blog />
      <Faq />
      <LearningJourney />
    </div>
  )
}
