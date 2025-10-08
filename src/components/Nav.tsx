import React from 'react'

const Nav: React.FC = () => {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__logo" href="#hero" aria-label="Przejdź do sekcji startowej">DAWID DZIUK</a>
        <nav className="nav__links" aria-label="Główna nawigacja">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills" >Skills</a>
          <a href="#contact" className="btn">Contact</a>          
        </nav>
      </div>
    </header>
  )
}

export default Nav