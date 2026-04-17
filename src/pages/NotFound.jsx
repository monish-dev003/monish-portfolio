import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [count, setCount] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    if (count <= 0) {
      navigate('/')
      return
    }
    const timer = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, navigate])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse 800px 600px at 50% 30%, rgba(123,111,232,0.1), #0b0d14)',
      color: '#fff', padding: '2rem', textAlign: 'center',
    }}>
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        style={{
          fontSize: 'clamp(6rem, 20vw, 14rem)', fontWeight: 900,
          fontFamily: "'Syne', sans-serif", lineHeight: 1,
          background: 'linear-gradient(135deg, #7b6fe8, #4f8ef7)',
          WebkitBackgroundClip: 'text', color: 'transparent', userSelect: 'none',
        }}
      >
        404
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', marginBottom: '0.8rem', color: '#dde4f0' }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        style={{ color: '#8892a4', fontSize: '1rem', maxWidth: 420, marginBottom: '1.5rem', lineHeight: 1.7 }}
      >
        Looks like this page took a wrong turn. Don't worry — let's get you back on track.
      </motion.p>

      {/* Countdown */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ color: 'rgba(123,111,232,0.7)', fontSize: '0.92rem', marginBottom: '2rem' }}
      >
        Redirecting to Home in{' '}
        <motion.span
          key={count}
          initial={{ scale: 1.4, color: '#7b6fe8' }}
          animate={{ scale: 1, color: '#4f8ef7' }}
          style={{ fontWeight: 800, fontSize: '1.1rem', display: 'inline-block' }}
        >
          {count}s
        </motion.span>
      </motion.p>

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div key={i}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
          style={{ position: 'absolute', width: 8 + i * 4, height: 8 + i * 4, borderRadius: '50%', background: i % 2 === 0 ? '#7b6fe8' : '#4f8ef7', left: `${15 + i * 20}%`, top: `${20 + (i % 2) * 45}%`, pointerEvents: 'none' }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Link to="/">
          <motion.div whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(123,111,232,0.4)' }} whileTap={{ scale: 0.97 }}
            style={{ background: 'linear-gradient(135deg,#7b6fe8,#4f8ef7)', color: '#fff', padding: '13px 32px', borderRadius: 12, fontWeight: 700, fontSize: '1rem', fontFamily: "'Syne',sans-serif", cursor: 'pointer', display: 'inline-block' }}>
            🏠 Back to Home
          </motion.div>
        </Link>
        <Link to="/projects">
          <motion.div whileHover={{ scale: 1.05 }}
            style={{ background: 'rgba(123,111,232,0.08)', border: '1px solid rgba(123,111,232,0.3)', color: '#dde4f0', padding: '13px 32px', borderRadius: 12, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'inline-block' }}>
            🚀 See Projects
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
