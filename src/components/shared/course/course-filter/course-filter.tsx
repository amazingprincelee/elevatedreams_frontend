'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab'
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
    </div>
  )
}
export default CourseFilter
