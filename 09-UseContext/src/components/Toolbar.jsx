import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Toolbar = () => {
  const { username, setUsername } = useContext(UserContext)

  return (
    <div className="box">
      <p>Toolbar Component</p>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Type your name"
      />
    </div>
  )
}

export default Toolbar
