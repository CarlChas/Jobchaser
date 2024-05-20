import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import { Job } from '../types'

const HomePage: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [searchJob, setSearchJob] = useState<string>('')
    const [filter, setFilter] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const myResponse = await fetch('thisData.json')
                if (!myResponse.ok) {
                    throw new Error(`HTTP error! Status: ${myResponse.status}`)
                }
                const myData: Job[] = await myResponse.json()
                setJobs(myData)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    const handleFilter = (category: string) => {
        setFilter((prevFilter) =>
            prevFilter.includes(category) ? prevFilter : [...prevFilter, category]
        )
    }

    const filterJobs = jobs.filter((job) => {
        const categories = [job.position, job.level, ...job.languages, ...job.tools];
        return (
            job.company.toLowerCase().includes(searchJob.toLowerCase()) &&
            filter.every(category => categories.includes(category))
        )
    }
    )
    return (
        <React.Fragment>
            <section className='searchBar'>
                <input
                    type="text"
                    placeholder='Search for a job...'
                    value={searchJob}
                    onChange={(e) => setSearchJob(e.target.value)}
                />
            </section>

            <section className='filterTags'>
                {filter.length > 0 && filter.map((category, index) => (
                    <span key={index} className='filterTag' onClick={() => setFilter(filter.filter(f => f !== category))}>
                        {category} &times;
                    </span>
                ))}
            </section>

            <section className='jobSection'>
                {filterJobs.length > 0 ? (
                    filterJobs.map((job) => <JobListing key={job.id} job={job} onFilter={handleFilter} />)
                ) : (
                    <p>Inga jobb tillgängliga</p>
                )}
            </section>
        </React.Fragment>
    )
}

export default HomePage