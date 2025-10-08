import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Dawid Dziuk. Build with React + TS + SCSS.</p>
      </div>
    </footer>
  )
}

export default Footer