import React from 'react'

export default function About() {
  return (
    <div className="page about-page">
      <section className="about">
        <h2>About me</h2>
        <p>
          I'm Aldrich — a developer who builds clean, minimal web applications.
          I'm comfortable with front-end stacks and small full-stack projects. I
          prioritize accessibility, performance, and clear UX.
        </p>

        <h3>Resume</h3>
        <p>
          Download my resume:
          {' '}
          <a href="/assets/resume.pdf" download>
            Resume (PDF)
          </a>
        </p>

        <h3>Contact</h3>
        <ul>
          <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
          <li>GitHub: <a href="https://github.com/yourname">github.com/yourname</a></li>
        </ul>
      </section>
    </div>
  )
}
