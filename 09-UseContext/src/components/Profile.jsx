import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const { username } = useContext(UserContext)

  return (
    <div className="box">
      <p>Profile Component</p>
      <h2>Hello, {username}</h2>
    </div>
  )
}

export default Profile
