import { useState } from 'react'
import { UserContext } from './context/UserContext'
import Toolbar from './components/Toolbar'
import Page from './components/Page'

const App = () => {
  const [username, setUsername] = useState('Guest')

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="app">
        <h1>Simple useContext Example</h1>
        <p>Change the name in one component and read it in another.</p>

        <Toolbar />
        <Page />
      </div>
    </UserContext.Provider>
  )
}

export default App
