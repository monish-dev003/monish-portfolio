import React, { useState } from 'react'
import { motion } from 'framer-motion'

// 🖼️ Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'

export default function Home() {
  const [activeNav, setActiveNav] = useState('Home')

  const professions = [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'React.js Specialist',
    'Laravel Developer',
    'UI/UX Enthusiast',
  ]

  const navItems = ['Home', 'Projects', 'Skills', 'Resume', 'About', 'Certificates', 'Gallery', 'Blog', 'Contact']

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/monish-dev003' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://linkedin.com/in/monish-dev003' },
    { img: gmailLogo, title: 'Email', link: 'mailto:monishshekh03@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/918401627033' },
    { img: instagramLogo, title: 'Instagram', link: 'https://instagram.com/' },
  ]

  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '3rem',
        alignItems: 'center',
        padding: '8rem 2rem 2rem', 
        background: 'radial-gradient(ellipse 1000px 800px at 15% 15%, rgba(56,189,248,0.06), #0a0a0c 80%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        '--accent': '#7b6fe8',
        '--accent-2': '#4f8ef7',
        '--accent-3': '#fff',
        '--muted': '#a1a1aa'
      }}
    >
      {/* ── Fixed Top Navigation (Keeping Only This One) ──
      <nav style={{
        position: 'absolute', top: '2.5rem', display: 'flex', gap: '2rem', zIndex: 10, flexWrap: 'wrap', justifyContent: 'center'
      }}>
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActiveNav(item)}
            style={{
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: activeNav === item ? '#fff' : 'rgba(255,255,255,0.4)',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              textTransform: 'capitalize'
            }}
          >
            {item}
            {activeNav === item && (
              <motion.div
                layoutId="navUnderline"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent-2)',
                  boxShadow: '0 0 10px var(--accent-2)'
                }}
              />
            )}
          </motion.a>
        ))}
      </nav> */}

      {/* Grid Background Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <style>{`
        @keyframes typing { from { width: 0; } to { width: 100%; } }
        @keyframes blink { 50% { border-color: transparent; } }
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: .15em solid var(--accent);
          width: 0;
          animation: typing 3.5s steps(45, end) forwards, blink .75s infinite;
          font-family: 'DM Sans', sans-serif;
        }
        .social-link { text-decoration: none !important; }
        .social-pill:hover img {
          filter: drop-shadow(0 0 12px var(--accent-2)) brightness(1.3);
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '1240px',
          flexWrap: 'wrap',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Side: Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ position: 'relative', flex: '0 0 450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', width: '430px', height: '430px',
              borderRadius: '50%', 
              border: '2px dashed var(--accent)', 
              opacity: 0.3,
              maskImage: 'linear-gradient(to right, transparent 10%, black, transparent 90%)'
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', width: '380px', height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,121,249,0.1) 0%, rgba(56,189,248,0.08) 50%, transparent 70%)',
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative', borderRadius: '50%', overflow: 'hidden',
              width: '350px', height: '350px', 
              boxShadow: '0 0 60px rgba(232,121,249,0.2), 0 0 110px rgba(56,189,248,0.06)',
              border: '4px solid',
              borderImage: 'linear-gradient(135deg, var(--accent), var(--accent-2)) 1',
              borderImageSlice: 1,
              zIndex: 1,
              display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
          >
            <img
              src={photo}
              alt="Monish Shekh"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(1.02)',
                borderRadius: '50%'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
            style={{
              position: 'absolute', bottom: '20px', right: '45px',
              background: '#060608', border: '1px solid var(--accent)',
              borderRadius: 20, padding: '5px 12px', fontSize: 11, fontWeight: 700,
              color: '#4ade80', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: 5, zIndex: 2
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            OPEN TO WORK
          </motion.div>
        </motion.div>

        {/* Right Side: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ flex: 1, minWidth: '340px', maxWidth: '680px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '0.95rem', color: 'var(--accent-2)', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}
          >
            👋 Hey there, I'm
          </motion.p>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.4rem', fontFamily: "'Syne', sans-serif" }}>
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(90deg, var(--accent-2), var(--accent), var(--accent-3), var(--accent-2))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '300%',
              }}
            >
              Monish Shekh
            </motion.span>
          </h1>

          <p className="typing-effect" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.3rem', maxWidth: '95%' }}>
            Full Stack Developer · MERN Stack · React.js · Laravel
          </p>

          {/* Profession Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1.4rem' }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06, background: 'linear-gradient(135deg,var(--accent-2),var(--accent))', color: '#fff' }}
                style={{
                  border: '1px solid rgba(56,189,248,0.2)',
                  padding: '7px 15px', borderRadius: '30px',
                  fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)',
                  cursor: 'default', background: 'rgba(56,189,248,0.03)',
                  fontWeight: 500, transition: 'all 0.25s',
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.4rem' }}
          >
            {[
              { label: '📍 Location', value: 'Anand, Gujarat, India' },
              { label: '💼 Expertise', value: 'MERN · Laravel · React' },
              { label: '📧 Contact', value: 'monishshekh03@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(56,189,248,0.1)' }}
                style={{
                  background: 'rgba(56,189,248,0.04)',
                  border: '1px solid rgba(56,189,248,0.12)',
                  borderRadius: '14px', padding: '12px 18px', minWidth: '170px', textAlign: 'center',
                }}
              >
                <strong style={{ fontSize: '0.85rem', color: 'var(--accent-2)' }}>{info.label}</strong>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px', margin: '4px 0 0' }}>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '1.6rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="/resume.pdf" download
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(232,121,249,0.35)' }}
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: '#fff', padding: '11px 24px', borderRadius: '10px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
              }}
            >
              ⬇️ Download CV
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(255,255,255,0.04)', 
                border: '1px solid rgba(56,189,248,0.3)',
                color: '#fff', padding: '11px 24px', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem',
              }}
            >
              🚀 See Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{ textAlign: 'center', marginTop: '0.5rem', position: 'relative', zIndex: 1 }}
      >
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Find me on</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '18px' }}>
          {quickLinks.map((item, i) => (
            <motion.a
              key={i} href={item.link} title={item.title} target="_blank" rel="noopener noreferrer" className="social-pill social-link"
              whileHover={{ scale: 1.18, y: -4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: '14px', 
                background: 'rgba(56,189,248,0.05)',
                border: '1px solid rgba(56,189,248,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8,
                transition: 'all 0.3s ease'
              }}>
                <img src={item.img} alt={item.title} style={{ width: 30, height: 30, objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{item.title}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}