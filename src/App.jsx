import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

// ✅ H-06: Lazy-loaded pages for better performance
const Home         = lazy(() => import('./pages/Home'))
const Projects     = lazy(() => import('./pages/Projects'))
const Gallery      = lazy(() => import('./pages/Gallery'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Blog         = lazy(() => import('./pages/Blog'))
const Resume       = lazy(() => import('./pages/Resume'))
const About        = lazy(() => import('./pages/About'))
const Contact      = lazy(() => import('./pages/Contact'))
const NotFound     = lazy(() => import('./pages/NotFound'))
const SkillNetwork = lazy(() => import('./pages/Skills'))

// ✅ H-06: ScrollToTop — resets scroll on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// ✅ L-05: Page loading spinner
function PageLoader() {
  return (
    <div style={{
      minHeight: '80vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1rem',
      color: '#8892a4',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        border: '3px solid rgba(123,111,232,0.15)',
        borderTopColor: '#7b6fe8',
        animation: 'spin 0.75s linear infinite',
      }} />
      <span style={{ fontSize: '0.85rem', letterSpacing: '1px', fontFamily: "'Syne', sans-serif" }}>
        Loading...
      </span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/projects"     element={<Projects />} />
            <Route path="/gallery"      element={<Gallery />} />
            <Route path="/skills"       element={<SkillNetwork />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/blog"         element={<Blog />} />
            <Route path="/resume"       element={<Resume />} />
            <Route path="/about"        element={<About />} />
            <Route path="/contact"      element={<Contact />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Monish Shekh — Built with React &amp; Framer Motion
      </footer>
    </div>
  )
}
