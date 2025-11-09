import React, { useState, useEffect } from 'react'
import { projects } from '../projects'

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
      {children}
    </a>
  )
}

export default function Projects() {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState('')

  const filtered = projects.filter((p) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q))
    )
  })

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(''), 1800)
    return () => clearTimeout(t)
  }, [copied])

  async function handleCopy(url, name) {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(name || 'copied')
    } catch (err) {
      // fallback
      const tmp = document.createElement('input')
      tmp.value = url
      document.body.appendChild(tmp)
      tmp.select()
      document.execCommand('copy')
      document.body.removeChild(tmp)
      setCopied(name || 'copied')
    }
  }

  function handleKeyOpen(e, url) {
    if (e.key === 'Enter') {
      window.open(url, '_blank', 'noopener')
    }
  }

  return (
    <div className="page projects-page">
      <div className="controls">
        <label className="search-label">
          <input
            className="search"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects"
          />
        </label>
      </div>

      <section className="projects">
        {filtered.length === 0 && <div className="no-results">No projects match “{query}”</div>}

        {filtered.map((p) => (
          <article
            key={p.url}
            className="project"
            tabIndex={0}
            onKeyDown={(e) => handleKeyOpen(e, p.url)}
            aria-labelledby={`title-${p.url}`}
          >
            <div className="project-row">
              <h2 className="project-name" id={`title-${p.url}`}>
                <ExternalLink href={p.url}>{p.name}</ExternalLink>
              </h2>

              <div className="project-actions">
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(p.url, p.name)}
                  aria-label={`Copy ${p.name} link`}
                  title="Copy link"
                >
                  Copy
                </button>
              </div>
            </div>

            {p.description && <p className="project-desc">{p.description}</p>}
          </article>
        ))}
      </section>

      {copied && <div className="toast">Copied — {copied}</div>}
    </div>
  )
}
