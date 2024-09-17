import Card from '@/components/pages/about-us/card'
import Diversity from '@/components/pages/about-us/diversity'
import HeroSection from '@/components/pages/about-us/hero'
import ClassLearning from '@/components/shared/class-learning'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import TestimonialSlider from '@/components/shared/testimonial-slider/testimonial-slider'
import { FC } from 'react'

type Props = {}
const AboutUsPage: FC<Props> = ({}) => {
  const data1 = [
    'In-demand Courses',
    'Up-to-date Curriculum',
    'Resources Available',
  ]
  const data2 = [
    'Microsoft Certified',
    'IBM Certified',
    'Oracle Certified & more',
  ]
  return (
    <>
      <HeroSection />
      <ClassLearning />
      <Card
        data={data1}
        header={'20+ Specialized Courses'}
        subHeader={
          'Welcome to Loctech IT Training Institute, where learning knows no bounds. As a leading global marketplace for learning and instruction, we transcend geographical limitations, bringing world-class IT education to eager minds across the globe.'
        }
        img={'/images/relied/img1.png'}
      />
      <Diversity />
      <Card
        data={data2}
        header={'Industry Certified Instructors'}
        subHeader={
          'At the heart of our success are our industry-certified instructors. With a wealth of practical experience and recognized certifications, our instructors bring unparalleled expertise to the classroom. We meticulously select educators who are not only experts in their fields but are also passionate about imparting knowledge. At Loctech, our commitment to quality education starts with our instructors.'
        }
        img={'/images/about-us/img1.png'}
      />
      <LearningJourney />
      <TestimonialSlider />
    </>
  )
}
export default AboutUsPage
