import React, { useState } from 'react'

const characters = [
  { id: 1, name: 'Askeladd', role: 'Leader' },
  { id: 2, name: 'Thors', role: 'Warrior' },
  { id: 3, name: 'Canute', role: 'Prince' },
]

const App = () => {
  const [a, setA] = useState(0)
  const [index, setIndex] = useState(0)

  const nextCharacter = () => {
    setIndex((prevIndex) => (prevIndex + 1) % characters.length)
  }

  const current = characters[index]

  return (
    <div>
      <h1>Value of a is : {a}</h1>
      <button onClick={() => setA((prev) => prev + 1)}>Click</button>

      <h1>Name is : {current.name}</h1>
      <h2>Role is : {current.role}</h2>
      <button onClick={nextCharacter}>Next Character</button>
    </div>
  )
}

export default App
