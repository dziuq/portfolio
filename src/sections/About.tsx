import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About me</h2>
         <p>
          I'm a software developer from Katowice, Poland — passionate about building elegant, 
          reliable, and scalable web applications. I love exploring how good code design and 
          architecture can make software not only work, but *feel right*.
        </p>

        <p>
          My background is in <strong>.NET development</strong>, where I worked on enterprise 
          systems and internal tools. Over time, I became fascinated with the frontend world — 
          especially with how <strong>React</strong> bridges design, logic, and performance.
        </p>

        <p>
          I'm currently focused on deepening my knowledge of <strong>React</strong>, 
          modern web architecture patterns, and how <strong>AI</strong> can enhance user 
          experience and development workflows.
        </p>

        <p>
        Outside of work, I’m passionate about <em>self-development, new technologies</em>, and  
          <em> exploring new programming paradigms</em>.
        </p>
    </section>
  )
}

export default About