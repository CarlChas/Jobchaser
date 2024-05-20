import React from 'react'
import { Job, JobListingProps } from '../types'

const JobListing: React.FC<JobListingProps> = ({ job, onFilter }) => {
  const categoryClick = (category: any) => {
    onFilter(category)
  }

  return (
    <article className='jobListing'>
      <img id='jobLogo' src={job.logo} alt={`${job.company} logo`} />
      <div className='jobTags'>
        <span className='myTags' onClick={() => categoryClick(job.position)}>{job.position}</span>
        <span className='myTags' onClick={() => categoryClick(job.level)}>{job.level}</span>
        {job.languages.length > 0 && job.languages.map((language, index) => (
          <span key={index} className='myTags' onClick={() => categoryClick(language)}>{language}</span>
        ))}
        {job.tools.length > 0 && job.tools.map((tool, index) => (
          <span key={index} className='myTags' onClick={() => categoryClick(tool)}>{tool}</span>
        ))}
      </div>
      <article className='myFavorite'>Star</article>
    </article>
  )
}

export default JobListing