import { useState, useEffect } from 'react'
import { GET } from '@/request'

const [categories, setCategories] = useState([])

const fetchData = async () => {
  try {
    // const data = await GET(`/xxx/xxx`)
    setCategories(data)
  } catch (err) {
    console.log(err)
  }
}
fetchData()
