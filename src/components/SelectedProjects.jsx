import React from 'react'
import { motion } from 'framer-motion'

function Thumb({ title, desc, color }) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      className="group block rounded-xl overflow-hidden shadow-soft relative"
      style={{ background: color }}
      href="#"
    >
      {/* top visual area */}
      <div className="h-40 sm:h-48 flex items-end p-4 bg-gradient-to-t from-black/30 to-transparent rounded-t-xl">
        <div className="text-white font-semibold text-lg">{title}</div>
      </div>

      {/*
        bottom info bar must fully cover rounded bottom corners.
        We add rounded-b-xl so it matches the parent's radius and
        a higher z-index to ensure it sits above any semi-transparent
        overlays. Keep padding and spacing unchanged.
      */}
      <div className="absolute left-0 right-0 bottom-0 bg-white rounded-b-xl z-10 px-4 h-16 sm:h-20 flex items-center">
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
