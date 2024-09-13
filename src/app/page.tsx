'use client'

import Blog from '@/components/shared/blog/blog'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import Faq from '@/components/shared/faq/faq'
import HomeHero from '@/components/shared/hero/home/home'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import OfferingCourseCard from '@/components/shared/offering-course-card/offering-course-card'
import ReliedUpon from '@/components/shared/relied-upon/relied-upon'

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />
      <OfferingCourseCard />
      <CourseFilter />
      <ReliedUpon />
      <Blog />
      <Faq />
      <LearningJourney />
    </div>
  )
}
