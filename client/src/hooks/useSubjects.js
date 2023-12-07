import { useState, useEffect } from 'react'
import { getSubjects } from '@/utils'

const useSubjects = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectsData = await getSubjects()
        setSubjects(subjectsData)
      } catch (error) {
        console.error('Error fetching subjects:', error)
      }
    }

    // Call the async fetchSubjects function
    fetchSubjects()
  }, []) // Empty dependency array means this effect runs once after initial render

  return subjects
}

export default useSubjects
