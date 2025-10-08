import React from 'react'
import projects from '@data/projects'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article key={p.slug} className="project">
            <div className="project__header">
              <h3>{p.title}</h3>
              <ul className="project__stack">
                {p.stack.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <p>{p.summary}</p>
            <div className="project__links">
              {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects