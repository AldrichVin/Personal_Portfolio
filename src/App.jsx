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
        {/* Fixed width container that accounts for scrollbar */}
        <div className="max-w-5xl mx-auto px-6 w-full">
          <header className="flex items-center justify-between py-6 border-b border-slate-100">
            <div>
              <div className="text-lg font-bold">Personal Portfolio</div>
            </div>
            <Nav />
          </header>

          <main className="py-8 min-h-[calc(100vh-180px)]">
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
