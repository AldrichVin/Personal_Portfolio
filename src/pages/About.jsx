import React from 'react'

export default function About() {
  return (
    <div className="page about-page">
      <section className="about">
        <h2>About me</h2>
        <p>
          I'm Aldrich Vin, a software engineer focused on building reliable and
          performant web applications. I specialize in front-end engineering
          with production experience in React and TypeScript and collaborate
          closely with design and product teams to ship customer-facing features.
        </p>

        <h3>Experience highlights</h3>
        <ul>
          <li>
            Monash Macathon 2025 — Built <em>Monash Mates</em>, an Android peer-mentoring
            app (team of 4): recommender matching, real-time chat, auth and media
            upload using Firebase; Kotlin + Jetpack Compose.
          </li>
          <li>
            FIT3163 Data Science Project — NBA Player Ranking Dashboard: full-stack
            app (Flask, Python, R, MongoDB) with custom ranking algorithms, Chart.js visualizations, and automated data pipelines (hoopR, nbastatR).
          </li>
          <li>
            Operations experience managing inventory, procurement and analytics for an SME (Veve Clothing).
          </li>
        </ul>

        <h3>Education</h3>
        <ul>
          <li>Monash University — BCompSc (GPA: 3.75/4.0). Expected graduation: Dec 2025.</li>
          <li>Jakarta International College — Bachelor-level program (GPA: 4.0/4.0). Feb 2024.</li>
          <li>Bina Tunas Bangsa School — IB Diploma (Grade: 37/45). May 2023.</li>
        </ul>

        <h3>Technical skills</h3>
        <p>
          Languages: Python, Java, SQL, JavaScript · Tools/Frameworks: Pandas, NumPy, Firebase (Auth, Firestore, Realtime DB, Storage), Flask, Docker, Git · Interests: Data Science, Machine Learning, Recommender Systems, Data Visualization
        </p>

        <h3>Resume</h3>
        <p>
          View or download my full resume:
          {' '}
          <a href="/assets/resume.pdf" download>
            Download Resume (PDF)
          </a>
        </p>

        <h3>Contact</h3>
        <p>
          Melbourne, VIC • 0480 607 563 • <a href="mailto:aldrichvin040205@gmail.com">aldrichvin040205@gmail.com</a>
          {' '}• <a href="https://www.linkedin.com/in/aldrich-vin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
    </div>
  )
}
