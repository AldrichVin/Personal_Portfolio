import React from 'react'

import ProfileSVG from '../assets/profile.svg'
import SelectedProjects from '../components/SelectedProjects'
import { motion } from 'framer-motion'

function SkillPill({ name, color }) {
  return (
    <div className="skill-pill" style={{ background: color }}>
      {name}
    </div>
  )
}

export default function Home() {
  return (
    <motion.div className="page home-page max-w-5xl mx-auto px-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 py-12">
        <div className="md:flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Aldrich Vincent</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">Software engineer & data-focused builder. I design and ship performant web apps, data-driven features, and production ML prototypes.</p>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-sm hover:translate-y-[-2px] transition-transform" href="/projects">Selected projects</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="/assets/resume.pdf" download>Download resume</a>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">Data & ML</span>
          </div>
        </div>

        <div className="md:w-44 md:shrink-0">
          {/* Prefer a user-supplied JPG at runtime; fall back to the bundled SVG if the JPG is not present. */}
          <motion.img
            src="/src/assets/profile.jpg"
            alt="Aldrich"
            className="w-44 h-44 rounded-xl object-cover border border-slate-100 shadow-soft"
            whileHover={{ scale: 1.02 }}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ProfileSVG }}
          />
        </div>
      </section>

      <SelectedProjects />
    </motion.div>
  )
}
