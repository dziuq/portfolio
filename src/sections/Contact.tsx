import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:dawid.dziuk@wp.pl?subject=Kontakt z portfolio&body=${encodeURIComponent(message + '\n\n' + email)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      <p>
        I’m currently open to new opportunities and collaborations. 
        Whether you’d like to discuss a project, a role, or just say hi — 
        my inbox is always open.
      </p>
      <form className="contact" onSubmit={onSubmit}>
        <label>
          Email
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Write me a message.." />
        </label>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact