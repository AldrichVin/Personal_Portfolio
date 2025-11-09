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
          <h2>Hi — I'm Aldrich Vincent</h2>
          <p className="lead">
            Software engineer & data enthusiast based in Melbourne, VIC. I build
            data-informed web applications and ML-enabled features — from
            production React front-ends to data pipelines and recommender systems.
            I focus on performance, accessibility, and delivering measurable
            outcomes.
          </p>

          <p style={{ marginTop: 8, fontSize: '0.95rem', color: 'var(--muted)' }}>
            Melbourne, VIC • 0480 607 563 • <a href="mailto:aldrichvin040205@gmail.com">aldrichvin040205@gmail.com</a> • <a href="https://www.linkedin.com/in/aldrich-vin" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </section>

      <section className="diagrams">
        <h3>Core skills</h3>
        <div className="skills-row">
          <SkillPill name="React" color="#61dafb" />
          <SkillPill name="TypeScript" color="#2f74c0" />
          <SkillPill name="Python" color="#ffd43b" />
          <SkillPill name="Data & ML" color="#7dd3fc" />
        </div>

        <h3 style={{ marginTop: 18 }}>What I deliver</h3>
        <div className="overview-cards">
          <div className="card">
            <strong>Product-ready apps</strong>
            <div className="card-body">Built customer-facing apps and dashboards (React, Flask) used in classroom and club projects.</div>
          </div>
          <div className="card">
            <strong>Data & Recommenders</strong>
            <div className="card-body">Experience building ranking algorithms, pipelines (R, Python) and recommender systems using Firebase and custom scoring.</div>
          </div>
          <div className="card">
            <strong>Mobile & Real-time</strong>
            <div className="card-body">Implemented Android real-time features (chat, auth, media upload) and collaborated in Agile teams.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
