import React from 'react';

function JobListing({ job }) {
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

export default JobListing