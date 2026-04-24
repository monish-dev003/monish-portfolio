import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '💰 Expensely — Money Manager',
    desc: 'Full-stack money management app with JWT authentication, transaction tracking, budgeting, and real-time spending insights. Interactive charts for spending pattern analysis.',
    ss: '/expensly.jpg',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT'],
    live: 'https://expensly-1.onrender.com',
    code: 'https://github.com/monish-dev003/expensely',
  },
  {
    title: '📝 Word Analyzer',
    desc: 'React-based word analysis app featuring character count, word count, and detailed text statistics. Uses React hooks for real-time text processing and instant feedback.',
    ss: '/wordanalyzer.jpg',
    tech: ['React.js', 'CSS3', 'JavaScript'],
    live: 'https://deluxe-lebkuchen-efc5ef.netlify.app/',
    code: 'https://github.com/monish-dev003/word-analyzer',
  },
  {
    title: '📰  Bloagapp',
    desc: 'CRUD application built with Laravel for managing blog posts. Features creating, editing, and deleting posts with REST API integration for smooth data flow.',
    ss: '/blogapp.jpg',
    tech: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'Eloquent ORM'],
    live: 'https://inkwell-one-phi.vercel.app',
    code: 'https://github.com/monish-dev003/blog-app',
  },
  {
    title: '🌐 Portfolio Website',
    desc: 'A modern, responsive developer portfolio built with React and Framer Motion. Features smooth animations, interactive skill visualization, and a clean deep-space aesthetic.',
    ss: '/portfolio.jpg',
    tech: ['React.js', 'Framer Motion', 'Vite', 'CSS3'],
    live: 'https://monish-dev003.netlify.app',
    code: 'https://github.com/monish-dev003/monish-portfolio',
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '100px 20px', minHeight: '100vh',
        background: 'radial-gradient(ellipse 1000px 800px at 85% 85%, rgba(79,142,247,0.05), #0a0a0c 80%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            style={{ color: '#4f8ef7', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '10px' }}
          >What I've built</motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#fff', margin: 0 }}
          >
            🚀 <span style={{ background: 'linear-gradient(90deg, #4f8ef7, #7b6fe8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PROJECTS</span>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, borderColor: '#7b6fe8', boxShadow: '0 20px 40px rgba(123,111,232,0.12)' }}
              style={{
                background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(123,111,232,0.1)', borderRadius: '24px',
                padding: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease',
              }}
            >
              {/* Screenshot */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', height: '200px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img
                  src={p.ss} alt={p.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><span style="font-size:3rem;opacity:0.4">🖼️</span></div>';
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '10px', fontFamily: "'Syne', sans-serif" }}>{p.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', lineHeight: '1.6', flexGrow: 1 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ background: 'rgba(123,111,232,0.07)', border: '1px solid rgba(123,111,232,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: '#7b6fe8', fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <motion.a
                  href={p.code} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.05, background: 'rgba(79,142,247,0.1)' }}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '0.85rem', border: '1px solid rgba(79,142,247,0.2)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <Github size={16} color="#4f8ef7" /> Code
                </motion.a>
                <motion.a
                  href={p.live} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #4f8ef7, #7b6fe8)', color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 700 }}
                >
                  <ExternalLink size={16} /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />
    </motion.section>
  )
}
