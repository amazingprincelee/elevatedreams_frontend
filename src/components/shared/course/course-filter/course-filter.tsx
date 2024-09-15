'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { get } from '../../../../../backend_services/api_services'
import CoursesList from './courses-list'

type Props = { courses: CourseProps[] }
const CourseFilter: FC<Props> = ({ courses }) => {
  const [selected, setSelected] = useState<string>('featured')

  const defaultFilters = [
    'Featured',
    'Software Development',
    'Data Science',
    'Networking and Security',
    'Cinematography',
    'Office Productivity',
    'Video Editing',
    'Animation',
  ]

  const uniqueCategories = courses
    .map((e) => e.category)
    .filter((value, index, self) => self.indexOf(value) === index)

  const filters =
    courses.length > 0 ? ['Featured', ...uniqueCategories] : defaultFilters

  const selectedCourses = courses.filter((el) => {
    return el.category.toLowerCase() === selected
      ? el
      : selected === 'featured' && el.featured === true
        ? el
        : null
  })

  console.log(filters)

  return (
    <div className="w-full bg-base pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="def-contain"
      >
        <Tabs
          onValueChange={(value: string) => setSelected(value)}
          defaultValue="featured"
          className="w-full grid grid-cols-1 gap-5 "
        >
          <TabsList className=" overflow-x-scroll gap-5  ">
            {filters.map((el: string, index: number) => (
              <TabsTrigger
                key={index}
                value={el.toLowerCase()}
                className="whitespace-nowrap "
              >
                {el}
              </TabsTrigger>
            ))}
          </TabsList>
          {filters.map((el, index) => (
            <TabsContent key={index} value={el.toLowerCase()}>
              <CoursesList courses={selectedCourses} row={2} />
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  )
}
export default CourseFilter
