export type ExperienceItem = {
  company: string
  role: string
  period: string
  summary: string
  details: string[]
}

const experience: ExperienceItem[] = [
  {
    company: 'Sente S.A.',
    role: '.NET Developer',
    period: 'Dec 2022 — Mar 2025',
    summary: 'Developed and maintained ERP modules and APIs for a finance-sector client.',
    details: [
      'Architected RESTful APIs and ERP microservices using .NET and DDD principles.',
      'Owned CI/CD pipeline management, improving deployment speed and reliability.',
      'Implemented automation reducing manual processing time by 75%.',
      'Worked closely with stakeholders to align technical solutions with business goals.'
    ]
  },
  {
    company: 'Onex Group',
    role: '.NET Developer (Intern)',
    period: 'Jul 2022 — Sep 2022',
    summary: 'Contributed to backend systems for an e-commerce company.',
    details: [
      'Worked with C#, Entity Framework, and SQL Server.',
      'Implemented new features and fixed bugs based on project tickets.',
      'Collaborated with a small dev team in an agile setup.'
    ]
  }
]

export default experience