import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function Nav() {
  return (
    <nav className="top-nav">
      <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        Projects
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
        About
      </NavLink>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <header className="site-header">
          <div className="site-title-row">
            <h1 className="site-title">Aldrich Vin</h1>
            <p className="site-sub">Minimal portfolio</p>
          </div>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>
            Built with React + Vite. Source: <span className="muted">personal</span>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
