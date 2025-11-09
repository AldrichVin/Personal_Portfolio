import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function Nav() {
  return (
    <nav className="flex items-center gap-4">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'text-slate-900 font-semibold' : 'text-slate-500')}>Home</NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-slate-900 font-semibold' : 'text-slate-500')}>Projects</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-slate-900 font-semibold' : 'text-slate-500')}>About</NavLink>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <header className="flex items-center justify-between py-6 border-b border-slate-100">
            <div>
              <div className="text-lg font-bold">Aldrich Vincent</div>
              <div className="text-xs text-slate-500">Software engineer — React · Python · Data</div>
            </div>
            <Nav />
          </header>

          <main className="py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <footer className="py-6 border-t border-slate-100 text-center text-sm text-slate-400">© {new Date().getFullYear()} Aldrich Vincent — Selected projects above</footer>
        </div>
      </div>
    </BrowserRouter>
  )
}
