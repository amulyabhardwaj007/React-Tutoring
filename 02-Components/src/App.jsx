import React from 'react'
import Card from './card'
import './index.css'

function App() {
  return (
    <div className='app-shell'>
      <header className='navbar'>My Navbar</header>

      <main className='page-content'>
        <div className='card-stack'>
          <Card  user = {{
            name: 'Amulya Bhardwaj',
            description: 'Idk why I am writing this.',
            image:
              'https://images.unsplash.com/photo-1771514069115-f2d790f9ed0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D',
          }} />   
          <button className='btn'>View my profile</button>
        </div>
      </main>
    </div>
  )
}

export default App
