import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PROFESSIONS = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React.js Specialist',
  'Laravel Developer',
  'UI/UX Enthusiast',
]

const QUICK_LINKS = [
  { src: '/github.png',   title: 'GitHub',    link: 'https://github.com/monish-dev003' },
  { src: '/linkedin.png', title: 'LinkedIn',  link: 'https://linkedin.com/in/monish-dev003' },
  { src: '/gmail.png',    title: 'Email',     link: 'mailto:monishshekh03@gmail.com' },
  { src: '/whatsapp.png', title: 'WhatsApp',  link: 'https://wa.me/918401627033' },
  { src: '/insta.png',    title: 'Instagram', link: 'https://instagram.com/monish_.03' },
]

export default function Home() {
  const [idx, setIdx]           = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping]       = useState(true)

  useEffect(() => {
    const target = PROFESSIONS[idx]
    let t
    if (typing) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 58)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
      } else {
        setIdx(p => (p + 1) % PROFESSIONS.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, idx])

  return (
    <section style={{
      minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      gap: '3rem', alignItems: 'center',
      padding: '8rem 2rem 2rem',
      background: 'radial-gradient(ellipse 1000px 800px at 15% 15%, rgba(79,142,247,0.07), #0b0d14 80%)',
      color: '#fff', position: 'relative', overflow: 'hidden',
    }}>

      {/* Grid bg */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

      <style>{`
        .social-pill:hover .sbox { border-color: rgba(123,111,232,0.5) !important; box-shadow: 0 0 20px rgba(123,111,232,0.2) !important; background: rgba(123,111,232,0.08) !important; }
        .cursor-blink { border-right: 2px solid #7b6fe8; animation: blink 0.75s step-end infinite; }
        @keyframes blink { 50% { border-color: transparent; } }
        .pill-link:hover { background: linear-gradient(135deg,#4f8ef7,#7b6fe8) !important; color: #fff !important; border-color: transparent !important; }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', maxWidth: '1240px', flexWrap: 'wrap', gap: '2.5rem', position: 'relative', zIndex: 1 }}>

        {/* Photo */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
          style={{ position: 'relative', flex: '0 0 450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', width: 430, height: 430, borderRadius: '50%', border: '2px dashed #7b6fe8', opacity: 0.25 }} />
          <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3.5, repeat: Infinity }}
            style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,111,232,0.12), rgba(79,142,247,0.08) 50%, transparent 70%)' }} />
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', borderRadius: '50%', overflow: 'hidden', width: 350, height: 350, boxShadow: '0 0 60px rgba(123,111,232,0.22), 0 0 110px rgba(79,142,247,0.06)', border: '4px solid rgba(123,111,232,0.6)', zIndex: 1 }}>
            <img src="/photo.jpg" alt="Monish Shekh" style={{ width: '100%', height: '100%', objectFit: 'covr', objectPosition: 'center', borderRadius: '50%', transform:'scale(1.0)', }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: 'spring' }}
            style={{ position: 'absolute', bottom: 20, right: 45, background: '#060608', border: '1px solid #7b6fe8', borderRadius: 20, padding: '5px 12px', fontSize: 11, fontWeight: 700, color: '#4ade80', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: 5, zIndex: 2 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            OPEN TO WORK
          </motion.div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
          style={{ flex: 1, minWidth: 340, maxWidth: 680, display: 'flex', flexDirection: 'column' }}>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontSize: '0.95rem', color: '#4f8ef7', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            👋 Hey there, I'm
          </motion.p>

          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.4rem', fontFamily: "'Syne',sans-serif" }}>
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ background: 'linear-gradient(90deg,#4f8ef7,#7b6fe8,#dde4f0,#4f8ef7)', WebkitBackgroundClip: 'text', color: 'transparent', backgroundSize: '300%' }}>
              Monish Shekh
            </motion.span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.3rem', minHeight: '1.8em' }}>
            <span className="cursor-blink">{displayed}</span>
          </p>

          {/* Profession Pills → link to /skills */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1.4rem' }}>
            {PROFESSIONS.map((role, i) => (
              <Link key={i} to="/skills" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.06 }} className="pill-link"
                  style={{ border: '1px solid rgba(123,111,232,0.25)', padding: '7px 15px', borderRadius: 30, fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', background: 'rgba(123,111,232,0.05)', fontWeight: 500, cursor: 'pointer', transition: 'all 0.25s' }}>
                  {role}
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Info chips */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            {[
              { label: '📍 Location', value: 'Anand, Gujarat, India' },
              { label: '💼 Expertise', value: 'MERN · Laravel · React' },
              { label: '📧 Email', value: 'monishshekh03@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(123,111,232,0.12)' }}
                style={{ background: 'rgba(123,111,232,0.04)', border: '1px solid rgba(123,111,232,0.12)', borderRadius: 14, padding: '12px 18px', minWidth: 170, textAlign: 'center' }}>
                <strong style={{ fontSize: '0.85rem', color: '#4f8ef7' }}>{info.label}</strong>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', margin: '4px 0 0' }}>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
            <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(123,111,232,0.35)' }}
              style={{ background: 'linear-gradient(135deg,#7b6fe8,#4f8ef7)', color: '#fff', padding: '11px 24px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              ⬇️ Download CV
            </motion.a>
            <motion.a href="/projects" whileHover={{ scale: 1.05, background: 'rgba(123,111,232,0.1)' }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(123,111,232,0.3)', color: '#fff', padding: '11px 24px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              🚀 See Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Find me on</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
          {QUICK_LINKS.map((item, i) => (
            <motion.a key={i} href={item.link} title={item.title} target="_blank" rel="noopener noreferrer"
              className="social-pill" whileHover={{ scale: 1.18, y: -4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
              <div className="sbox" style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(123,111,232,0.04)', border: '1px solid rgba(123,111,232,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8, transition: 'all 0.3s' }}>
                <img src={item.src} alt={item.title} style={{ width: 30, height: 30, objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{item.title}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
