import React from 'react'
import profileImg from '../assets/profilowe.jpg'
import { Github, Linkedin, Instagram } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="eyebrow">Hi, my name is</p>
          <h1>Dawid Dziuk</h1>
          <h2>I build reliable .NET applications and modern web experiences.</h2>
          <p className="lead">
            I’m a passionate .NET Developer with over two years of experience creating scalable, 
            maintainable software systems. I focus on clean architecture, performance, 
            and delivering business value through thoughtful engineering.
          </p>
          <a className="btn" href="#projects">View my work</a>

          {/* --- SOCIAL ICONS --- */}
          <div className="hero__socials">
            <a
              href="https://linkedin.com/in/dawid-dziuk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/dziuq"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://instagram.com/dziuukk"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={profileImg} alt="Portrait of Dawid Dziuk" />
        </div>
      </div>
    </section>
  )
}

export default Hero
