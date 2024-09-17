'use client'

import AboutCourse from '@/components/pages/course/about'
import Hero from '@/components/pages/course/hero'
import KeyLearning from '@/components/pages/course/key-learning'
import Loader from '@/components/pages/course/loader'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import { FC, useEffect, useState } from 'react'
import { get } from '../../../../backend_services/api_services'

type Props = {}
const CoursePage: FC<Props> = ({}) => {
  const slug = localStorage.getItem('courseId')
  const [course, setCourse] = useState<any>(null)
  const {
    title = '',
    overview = '',
    metaTitle = '',
    learning = [],
  } = course || {}

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiData: any = await get(`/course/${slug}`)
        if (apiData && apiData.data) setCourse(apiData.data)
      } catch (error) {
        //    toast.error("Please check your internet connectivity");
      }
    }

    fetchApiData()
  }, [])

  return (
    <>
      {course !== null ? (
        <>
          <Hero title={title} overview={metaTitle} metaDescription={overview} />
          <AboutCourse course={course} />
          <KeyLearning learning={learning} />
          <LearningJourney />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}
export default CoursePage
