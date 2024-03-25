import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing.jsx'

function App() {

  const [jobs, setJobs] = useState([])
  const [searchJob, thisSearchJob] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myResponse = await fetch('thisData.json')
        if (!myResponse.ok) {
          throw new Error(`HTTP error! Status: ${myResponse.status}`)
        }
        const myData = await myResponse.json()
        setJobs(myData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const filterJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(searchJob.toLowerCase())
  )
  return (
    <React.Fragment>
      <section className='searchBar'>
        <input
          type="text"
          placeholder='Search for a job...'
          value={searchJob}
          onChange={(e) => thisSearchJob(e.target.value)}
        />
      </section>

      <section className='jobSection'>
        {filterJobs.length > 0 ? (
          filterJobs.map((job) => <JobListing key={job.id} job={job} />)
        ) : (
          <p>Inga jobb tillgängliga</p>
        )}
      </section>
    </React.Fragment>
  )
}

export default App