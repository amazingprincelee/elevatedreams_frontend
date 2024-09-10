import BlogCard from '@/components/shared/blog/blog-card'
import LinkButton from '@/components/shared/button/link-button'
import LearningJourney from '@/components/shared/cards/LearningJourney'
import OfferingCourseCard from '@/components/shared/cards/OfferingCourseCard'
import CourseCard from '@/components/shared/course/course-card'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 m-auto min-h-screen bg-base">
      <h1 className="text-5xl font-bold">
        Welcome to Appnovia Starter Template
      </h1>
      <LinkButton url={'#'} label={'Get Started'} />
      <CourseCard />
      <LearningJourney />
    </section>
  )
}
