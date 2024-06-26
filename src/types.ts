export interface Job {
    id: number
    company: string
    logo: string
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]
}

export interface JobListingProps {
    job: Job
    onFilter: (category: string) => void
}