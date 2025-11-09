import React from 'react'

import ProfileSVG from '../assets/profile.svg'

function SkillPill({ name, color }) {
  return (
    <div className="skill-pill" style={{ background: color }}>
      {name}
    </div>
  )
}

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <img src={ProfileSVG} alt="Profile" className="profile-img" />
        <div>
          <h2>Hello — I'm Aldrich</h2>
          <p className="lead">
            I'm a software developer focused on building simple, delightful web
            experiences. I enjoy clean design, performant front-ends, and
            learning new tools. This site is a minimal showcase of my projects
            and background.
          </p>
        </div>
      </section>

      <section className="diagrams">
        <h3>Key strengths</h3>
        <div className="skills-row">
          <SkillPill name="React" color="#61dafb" />
          <SkillPill name="TypeScript" color="#2f74c0" />
          <SkillPill name="CSS" color="#ff7b7b" />
          <SkillPill name="Performance" color="#7dd3fc" />
        </div>

        <h3 style={{ marginTop: 18 }}>Quick overview</h3>
        <div className="overview-cards">
          <div className="card">
            <strong>Small & focused</strong>
            <div className="card-body">Minimal, fast portfolio websites and prototypes.</div>
          </div>
          <div className="card">
            <strong>Accessible</strong>
            <div className="card-body">Keyboard-first interactions and clear contrast.</div>
          </div>
          <div className="card">
            <strong>Deployable</strong>
            <div className="card-body">Ready for Vercel / Netlify / GitHub Pages.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
