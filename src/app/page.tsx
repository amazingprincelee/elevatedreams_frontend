'use client'

import BlogCard from '@/components/shared/blog/blog-card'
import LinkButton from '@/components/shared/button/link-button'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import Footer from '@/components/shared/footer/footer'
import OfferingCard from '@/components/shared/offering-course-card/offering-course-card'
export default function Home() {
  return (
    <div>
      {/* <HomeHero /> */}
      <CourseFilter />
      <section className="flex flex-col items-center justify-center gap-8 m-auto min-h-screen bg-base">
        <h1 className="text-5xl font-bold">
          Welcome to Appnovia Starter Template
        </h1>
        <OfferingCard />
        <LinkButton url={'#'} label={'Get Started'} />

        <BlogCard />
        <Footer />
      </section>
    </div>
  )
}
