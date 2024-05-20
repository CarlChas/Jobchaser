import React from 'react';

/* function JobListing({ job }) {
  return (
    <article className='jobListing'>
      <img id='jobLogo' src={`${job.logo}`} alt={job.company} />
      <article className='myTags'>{job.position}</article>
      <article className='myTags'>{job.level}</article>
      {job.languages.map((language, index) => (
        <article key={index} className='myTags'>{language}</article>
      ))}
      {job.tools.map((tool, index) => (
        <article key={index} className='myTags'>{tool}</article>
      ))}
      <article className='myFavorite'> Star </article>
    </article>
  )
}
*/

function JobListing({ job }) {
  return (
    <article className='jobListing'>
      <img id='jobLogo' src={job.logo} alt={`${job.company} logo`} />
      <div className='jobDetails'>
        <h2 className='jobPosition'>{job.position}</h2>
        <p className='jobLevel'>{job.level}</p>
      </div>
      <div className='jobTags'>
        {job.languages.length > 0 && job.languages.map((language, index) => (
          <span key={index} className='myTags'>{language}</span>
        ))}
        {job.tools.length > 0 && job.tools.map((tool, index) => (
          <span key={index} className='myTags'>{tool}</span>
        ))}
      </div>
      <button className='myFavorite'>Star</button>
    </article>
  )
}

export default JobListing