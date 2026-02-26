import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  borderRadius: '8px',
  textDecoration: 'none',
  color: isActive ? '#ffffff' : '#1e293b',
  backgroundColor: isActive ? '#2563eb' : '#e2e8f0',
  fontWeight: 600,
})

const App = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <nav
        style={{
          display: 'flex',
          gap: '10px',
          padding: '16px',
          borderBottom: '1px solid #cbd5e1',
          background: '#ffffff',
        }}
      >
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </nav>

      <main style={{ padding: '24px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
