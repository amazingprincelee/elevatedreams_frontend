'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { get } from '../../../../../backend_services/api_services'
import CoursesList from './courses-list'

type Props = { courses: CourseProps[] }
const CourseFilter: FC<Props> = ({ courses }) => {
  const [selected, setSelected] = useState<string>('featured')

  const filters = [
    'Featured',
    'Software Development',
    'Data Science',
    'Networking and Security',
    'Cinematography',
    'Office Productivity',
    'Video Editing',
    'Animation',
  ]

  return (
    <div className="w-full bg-base pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <Tabs
          onValueChange={(value: string) => setSelected(value)}
          defaultValue="featured"
          className="w-full grid gap-5"
        >
          <TabsList className="w-full gap-5 overflow-scroll def-contain">
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
          <TabsContent value="featured">
            <CoursesList courses={courses} row={2} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
export default CourseFilter
