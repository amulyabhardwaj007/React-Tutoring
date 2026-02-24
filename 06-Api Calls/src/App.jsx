import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setData(response.data.slice(0, 20))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      <h1>API Calls in React</h1>
      <button onClick={getData}>Fetch Data</button>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.thumbnailUrl} alt={item.title} width='200' />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
