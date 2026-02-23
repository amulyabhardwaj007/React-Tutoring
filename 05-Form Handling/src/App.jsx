import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', name)
    setName('') // Clear the input field after submission 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Type your name here'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
