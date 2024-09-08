import { FC, useEffect, useState } from 'react'
import { get } from '../../../../../backend_services/api_services'

type Props = {}
const CourseFilter: FC<Props> = ({}) => {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiData = await get('/course')
        console.log(apiData)
        //    setCourses(apiData);
      } catch (error) {
        //    toast.error("Please check your internet connectivity");
      } finally {
        setLoading(false)
      }
    }

    fetchApiData()
  }, [])
  return <></>
}
export default CourseFilter
