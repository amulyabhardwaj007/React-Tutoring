import React from 'react'
import { Bookmark, MapPin, BriefcaseBusiness } from 'lucide-react'

const Card = ({ logo, company, posted, role, team, tags, salary, location }) => {
  return (
    <article className='job-card'>
      <header className='job-card-top'>
        <div className='company-block'>
          <img src={logo} alt='company logo' className='company-logo' />
          <div>
            <h3>{company}</h3>
            <p>{posted}</p>
          </div>
        </div>

        <button className='save-btn'>
          <Bookmark size={16} />
          Save
        </button>
      </header>

      <section className='job-card-center'>
        <h2>{role}</h2>
        <p className='job-subtitle'>{team}</p>

        <div className='job-tags'>
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`}>{tag}</span>
          ))}
        </div>
      </section>

      <footer className='job-card-bottom'>
        <div className='job-meta'>
          <p>
            <BriefcaseBusiness size={16} />
            {salary}
          </p>
          <p>04
            <MapPin size={16} />
            {location}
          </p>
        </div>

        <button className='apply-btn'>Apply Now</button>
      </footer>
    </article>
  )
}

export default Card
