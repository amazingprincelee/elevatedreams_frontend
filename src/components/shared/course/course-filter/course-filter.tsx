'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab'
import { FC, useEffect, useState } from 'react'
import { get } from '../../../../../backend_services/api_services'
import CoursesList from './courses-list'

type Props = {}
const CourseFilter: FC<Props> = ({}) => {
  const [courses, setCourses] = useState<any[]>([])
  const [selected, setSelected] = useState<string>('featured')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiData: any = await get('/course')
        if (apiData && apiData.data) setCourses(apiData.data)
      } catch (error) {
        //    toast.error("Please check your internet connectivity");
      } finally {
        setLoading(false)
      }
    }

    fetchApiData()
  }, [])

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
    <div className="w-full  bg-base pt-10 ">
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
          <CoursesList courses={[]} row={2} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default CourseFilter
