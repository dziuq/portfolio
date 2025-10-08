export type Project = {
  slug: string
  title: string
  summary: string
  stack: string[]
  live?: string
  repo?: string
}

const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'E-Sklep-Microservices',
    summary: 'Project of internet shop backend, developed in microservice architecture.',
    stack: ['.NET', 'C#'],
    repo: 'https://github.com/dziuq/e-sklep-microservices'
  },
  {
    slug: 'dashboard',
    title: 'Road Sign Shop',
    summary: 'Frontend Web Application. Internet shop with road signs. Build to learn React',
    stack: ['React', 'JavaScript', 'Firebase'],
    live: 'https://road-sign-shop.netlify.app',
    repo: 'https://github.com/dziuq/e-sklep'
  }
]

export default projects