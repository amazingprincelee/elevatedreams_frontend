'use client'

import Blog from '@/components/shared/blog/blog'
import BlogCard from '@/components/shared/blog/blog-card'
import LinkButton from '@/components/shared/button/link-button'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import HomeHero from '@/components/shared/hero/home/home'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import OfferingCourseCard from '@/components/shared/offering-course-card/offering-course-card'
import ReliedUpon from '@/components/shared/relied-upon/relied-upon'

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />

      <section className="flex flex-col items-center justify-center gap-8 m-auto min-h-screen">
        <OfferingCourseCard />
        <CourseFilter />
        <ReliedUpon />
        <Blog />
        <LearningJourney />
      </section>
    </div>
  )
}
