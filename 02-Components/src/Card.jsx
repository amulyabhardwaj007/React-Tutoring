import React from 'react'

const Card = (props) => {
  return (
    <section className='card'>
      <img
        src={props.user.image}      
        alt='profile'
        className='card-image'
      />
      <h2>{props.user.name}</h2>
      <p>{props.user.description}</p>
    </section>
  )
}

export default Card
