import React, { useState, useEffect } from 'react'
import { projects } from '../projects'
import { motion } from 'framer-motion'

export default function Projects() {
  const [q, setQ] = useState('')
  const [copied, setCopied] = useState('')

  const filtered = projects.filter((p) => {
    const t = q.trim().toLowerCase()
    if (!t) return true
    return p.name.toLowerCase().includes(t) || (p.description && p.description.toLowerCase().includes(t))
  })

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(''), 1400)
    return () => clearTimeout(t)
  }, [copied])

  async function handleCopy(url, name) {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(name || 'copied')
    } catch {
      setCopied(name || 'copied')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-6">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects" className="w-full rounded-lg border border-slate-100 p-3" />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {filtered.map((p) => (
          <motion.article key={p.url} whileHover={{ y: -4 }} className="card flex items-start justify-between">
            <div>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900">{p.name}</a>
              {p.description && <div className="text-sm text-slate-600 mt-1">{p.description}</div>}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => handleCopy(p.url, p.name)} className="text-sm text-slate-600 border border-slate-100 rounded-md px-3 py-1">Copy</button>
            </div>
          </motion.article>
        ))}
      </div>

      {copied && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="fixed right-6 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-md shadow-soft">Copied — {copied}</motion.div>
      )}
    </div>
  )
}
