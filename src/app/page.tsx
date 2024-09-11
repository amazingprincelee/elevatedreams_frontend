'use client'

import BlogCard from '@/components/shared/blog/blog-card'
import LinkButton from '@/components/shared/button/link-button'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <CourseFilter />
      <section className="flex flex-col items-center justify-center gap-8 m-auto min-h-screen bg-base">
        <h1 className="text-5xl font-bold">
          Welcome to Appnovia Starter Template
        </h1>
        <LinkButton url={'#'} label={'Get Started'} />
        <BlogCard />
        <LearningJourney />
      </section>
    </div>
  )
}
