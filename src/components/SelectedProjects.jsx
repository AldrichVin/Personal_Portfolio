import React from 'react'
import { motion } from 'framer-motion'

function Thumb({ title, desc, color }) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      className="group block rounded-xl overflow-hidden shadow-soft"
      style={{ background: color }}
      href="#"
    >
      <div className="h-40 sm:h-48 flex items-end p-4 bg-gradient-to-t from-black/30 to-transparent">
        <div className="text-white font-semibold text-lg">{title}</div>
      </div>
      <div className="p-4 bg-white">
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </motion.a>
  )
}

export default function SelectedProjects() {
  const items = [
    { title: 'Monash Mates', desc: 'Peer mentoring app — Android + Firebase', color: 'linear-gradient(135deg,#0ea5e9,#6366f1)' },
    { title: 'NBA Ranking', desc: 'Data dashboard & custom ranking algorithms', color: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
    { title: 'Portfolio UI', desc: 'Design-driven front-end and infra', color: 'linear-gradient(135deg,#10b981,#06b6d4)' }
  ]

  return (
    <section className="mt-8">
      <h3 className="text-sm font-semibold text-slate-600 mb-4">Selected projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <Thumb key={it.title} {...it} />
        ))}
      </div>
    </section>
  )
}
