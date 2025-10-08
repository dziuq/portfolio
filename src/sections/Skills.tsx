import React, { useEffect, useState } from 'react'
import {
  Database,
  Server,
  Code,
  GitBranch,
  Cpu,
  Boxes,
  TerminalSquare,
  Wrench,
  Brain,
  BookOpen,
} from 'lucide-react'

import dotnetLogo from '../assets/icons/dotnet.svg'
import sqlLogo from '../assets/icons/sqlserver.svg'
import reactLogo from '../assets/icons/react.svg'
import dockerLogo from '../assets/icons/docker.svg'

const Skills: React.FC = () => {

 const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <section id="skills">
      <div className="container skills">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills__grid">
          <div className="skills__group">
            <h3><Code size={18}/> Languages & Frameworks</h3>
            <ul>
              <li><img src={dotnetLogo} alt=".NET" /> .NET / C# / ASP.NET Core</li>
              <li><img src={reactLogo} alt="React" /> React (TypeScript, SCSS)</li>
              <li><TerminalSquare size={16}/> Entity Framework / LINQ</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3><Cpu size={18}/> Architecture & Patterns</h3>
            <ul>
              <li><Brain size={16}/> Domain-Driven Design (DDD)</li>
              <li><Boxes size={16}/> CQRS / Event Storming</li>
              <li><Server size={16}/> Dependency Injection (DI)</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3><Database size={18}/> Databases & Tools</h3>
            <ul>
              <li><img src={sqlLogo} alt="SQL Server" /> MSSQL / Firebird / PostgreSQL</li>
              <li><img src={dockerLogo} alt="Docker" /> Docker (basics)</li>
              <li><GitBranch size={16}/> Git / GitHub / GitLab</li>
            </ul>
          </div>

          <div className="skills__group">
            <h3><Wrench size={18}/> Software & Environment</h3>
            <ul>
              <li>Visual Studio / VS Code</li>
              <li>Azure DevOps / Postman</li>
              <li>Jira / Confluence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
