import React from 'react'
import Card from './card'
import './App.css'

const jobs = [
  {
    id: 1,
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/051/571/251/small_2x/abstract-square-window-flat-business-logo-design-element-vector.jpg',
    company: 'Microsoft',
    posted: 'Posted 5 days ago',
    role: 'Senior Software Engineer',
    team: 'Platform Engineering Team',
    tags: ['Senior Level', 'Full-time', 'Remote Friendly'],
    salary: '$120 per hour',
    location: 'Bangalore, India',
  },
  {
    id: 2,
    logo: 'https://imgs.search.brave.com/bsR0bt4yuxmHDjl4VB52IGtmVEAXIORdFkqcPofeswA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzE3Ni9zbWFs/bC9nb29nbGUtbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw',
    company: 'Google',
    posted: 'Posted 2 days ago',
    role: 'Frontend Engineer',
    team: 'Search Experience',
    tags: ['Mid Level', 'Full-time', 'Hybrid'],
    salary: '$95 per hour',
    location: 'Hyderabad, India',
  },
  {
    id: 3,
    logo: 'https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n',
    company: 'Amazon',
    posted: 'Posted today',
    role: 'Backend Developer',
    team: 'Cloud Infrastructure',
    tags: ['Senior Level', 'Contract', 'On-site'],
    salary: '$110 per hour',
    location: 'Pune, India',
  },
]

const App = () => {
  return (
    <main className='job-page'>
      <section className='cards-grid'>
        {jobs.map((job) => (
          <Card
            key={job.id}
            logo={job.logo}
            company={job.company}
            posted={job.posted}
            role={job.role}
            team={job.team}
            tags={job.tags}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </section>
    </main>
  )
}

export default App
