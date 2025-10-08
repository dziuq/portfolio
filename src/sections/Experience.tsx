import React, { useState } from 'react'
import experience from '@data/experience'

const Experience: React.FC = () => {
  // lokalny stan: przechowuje, który element jest rozwinięty
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <ul className="timeline">
        {experience.map((e, index) => (
          <li key={e.company + e.role} className={`timeline__item ${expandedIndex === index ? 'expanded' : ''}`}>
            <button className="timeline__head" onClick={() => toggleExpand(index)}>
              <div>
                <h3>{e.role}</h3>
                <span>{e.company} · {e.period}</span>
              </div>
              <span className="timeline__arrow">{expandedIndex === index ? '−' : '+'}</span>
            </button>

            <div className="timeline__summary">
              <p>{e.summary}</p>

              {expandedIndex === index && e.details && (
                <div className="timeline__details">
                  {Array.isArray(e.details)
                    ? e.details.map((d, i) => <p key={i}>{d}</p>)
                    : <p>{e.details}</p>}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
