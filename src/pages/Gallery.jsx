import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Trophy } from 'lucide-react'

const TABS = [
  { key: 'indiskills', label: '🏆 IndiaSkills 2025', highlight: true },
  { key: 'achievements', label: '🥇 Achievements' },
  { key: 'events', label: '📚 Events & Workshops' },
  { key: 'travel', label: '✈️ Travel & Life' },
]

const GALLERY_DATA = {
  indiskills: [
    {
      id: 'i1',
      featured: true,
      title: 'Bangalore Diaries — IndiaSkills 2025',
      caption: '🏛️ Yashobhoomi, Bangalore · National Competition',
      desc: 'Represented Gujarat at IndiaSkills 2025 — India\'s most prestigious skill competition organised by NASSCOM, NSDC, and the Ministry of Skill Development. Competed in Web Technologies at the national level.',
      photos: ['/gallery/blr-1.jpg', '/gallery/blr-2.jpg', '/gallery/blr-3.jpg', '/gallery/blr-4.jpg', '/gallery/blr-5.jpg', '/gallery/blr-6.jpg'],
    },
    {
      id: 'i2',
      title: 'Competition Day — National Exam',
      caption: '💻 Web Technologies · IndiaSkills Nationals · Bangalore',
      desc: 'On the competition floor at IndiaSkills 2025 Bangalore — building a full working web application under timed exam conditions, judged by national-level industry experts.',
      photos: ['/gallery/blr-exam-1.jpg', '/gallery/blr-exam-2.jpg', '/gallery/blr-exam-3.jpg', '/gallery/compday-4.jpg', '/gallery/compday-5.jpg', '/gallery/compday-6.jpg', '/gallery/compday-7.jpg', '/gallery/compday-8.jpg', '/gallery/compday-trophy.jpg'],
    },
  ],
  achievements: [
    {
      id: 'a1',
      title: 'Aikyam 3.0 — 1st Rank',
      caption: '🥇 National Level IT Quiz · Feb 2026',
      desc: 'Secured 1st place at Aikyam 3.0, a national-level IT quiz competition. A proud moment representing our department at the highest level.',
      photos: ['/gallery/aikyam-1.jpg', '/gallery/aikyam-2.jpg', '/gallery/aikyam-3.jpg'],
    },
    {
      id: 'a2',
      title: 'Brain Tech 2024 — 2nd Rank',
      caption: '🥈 National Level Hackathon · 2024',
      desc: 'Achieved 2nd rank at Brain Tech 2024 — a national-level hackathon challenging participants on technical aptitude and rapid problem solving.',
      photos: ['/gallery/braintech-win.jpg'],
    },
    {
      id: 'a3',
      title: "Teachers' Day — 2nd Rank",
      caption: '🥈 Technical Quiz · Teachers Day Special',
      desc: "Bagged 2nd rank at the Teachers' Day special technical quiz event, competing against participants across multiple departments.",
      photos: ['/gallery/teachersday-1.jpg', '/gallery/teachersday-2.jpg'],
    },
    {
      id: 'a4',
      title: 'Tech Dynasty — Host & Leader',
      caption: '🎤 National Hackathon Host · C P Patel College',
      desc: 'Hosted and managed the national-level hackathon "Tech Dynasty" at C P Patel & F H Shah Commerce College Autonomous, Anand. Led event coordination, judging setup, and participant management end-to-end.',
      photos: ['/gallery/techdynasty-1.jpg', '/gallery/techdynasty-2.jpg', '/gallery/techdynasty-3.jpg'],
    },
    {
      id: 'a5',
      title: 'Farewell Award',
      caption: '🎓 Recognition by Department · 2026',
      desc: 'Honoured with a farewell award recognising contributions to departmental events, hackathons, and overall academic excellence throughout the programme.',
      photos: ['/gallery/farewell-1.jpg', '/gallery/farewell-2.jpg'],
    },
  ],
  events: [
    {
      id: 'e1',
      title: '6-Day National Workshop — Data Analytics',
      caption: '📊 Data Analytics Workshop · National Level',
      desc: 'Completed a 6-day intensive national workshop on Data Analytics — covering data wrangling, visualisation, statistical modelling, and industry-level tools.',
      photos: ['/gallery/workshop-1.jpg', '/gallery/workshop-2.jpg', '/gallery/workshop-3.jpg'],
    },
    {
      id: 'e2',
      title: 'Youth Parliament — Minister of Law & Justice',
      caption: '⚖️ Youth Parliament · Minister of Law & Justice',
      desc: 'Participated as the "Minister of Law & Justice" in a national Youth Parliament simulation — a programme fostering civic awareness, public speaking, and democratic values among students.',
      photos: ['/gallery/youthparl-1.jpg', '/gallery/youthparl-2.jpg', '/gallery/youthparl-3.jpg'],
    },
    {
      id: 'e3',
      title: 'Vidyanagar Campus Events',
      caption: '🏫 Vidyanagar · Academic Events',
      desc: 'Moments from academic and cultural events held at Vidyanagar — representing the college in inter-collegiate programmes.',
      photos: ['/gallery/vidyanagar-1.jpg', '/gallery/vidyanagar-2.jpg'],
    },
  ],
  travel: [
    {
      id: 't1',
      title: 'Anasagar Lake, Ajmer',
      caption: '🌊 Anasagar Lake · Ajmer, Rajasthan',
      desc: "A serene visit to Anasagar Lake — one of India's historic man-made lakes built in the 12th century, offering stunning reflections at sunset and a peaceful retreat from the digital world.",
      photos: ['/gallery/anasagar-1.jpg', '/gallery/anasagar-2.jpg', '/gallery/anasagar-3.jpg'],
    },
    {
      id: 't2',
      title: 'Pavagadh, Gujarat',
      caption: '⛰️ Pavagadh · UNESCO World Heritage Site',
      desc: "Trekking up Pavagadh — a UNESCO World Heritage Site in Gujarat. The hilltop Mahakali temple and panoramic views remind you why sometimes you need to disconnect to reconnect.",
      photos: ['/gallery/pavagadh-1.jpg', '/gallery/pavagadh-2.jpg', '/gallery/pavagadh-3.jpg'],
    },
  ],
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('indiskills')
  const [lightbox, setLightbox] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  const openLightbox = useCallback((photos, idx, title) => {
    setLightbox({ photos, idx, title })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const navLightbox = useCallback((dir) => {
    setLightbox(prev => {
      if (!prev) return null
      const next = (prev.idx + dir + prev.photos.length) % prev.photos.length
      return { ...prev, idx: next }
    })
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'ArrowRight') navLightbox(1)
      if (e.key === 'ArrowLeft') navLightbox(-1)
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, navLightbox, closeLightbox])

  const data = GALLERY_DATA[activeTab]

  return (
    <section style={{ minHeight: '100vh', background: '#0b0d14', color: '#fff', padding: '4rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.82rem', color: '#4f8ef7', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
            A glimpse into my world
          </p>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, fontFamily: "'Syne',sans-serif", background: 'linear-gradient(90deg,#7b6fe8,#4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
            Gallery
          </h2>
          <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg,#7b6fe8,#4f8ef7)', margin: '12px auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {TABS.map(({ key, label, highlight }) => (
            <motion.button key={key} onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                padding: '10px 22px', borderRadius: 12, cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', border: 'none',
                background: activeTab === key
                  ? 'linear-gradient(135deg,#7b6fe8,#4f8ef7)'
                  : highlight
                  ? 'rgba(123,111,232,0.08)'
                  : 'rgba(255,255,255,0.04)',
                color: activeTab === key ? '#fff' : highlight ? '#7b6fe8' : '#8892a4',
                boxShadow: activeTab === key ? '0 4px 20px rgba(123,111,232,0.35)' : highlight ? '0 0 0 1px rgba(123,111,232,0.3)' : 'none',
                outline: (!highlight && activeTab !== key) ? '1px solid rgba(123,111,232,0.15)' : 'none',
                transition: 'all 0.25s ease',
              }}>
              {highlight && activeTab !== key && <Trophy size={12} style={{ marginRight: 5, verticalAlign: 'middle' }} />}
              {label}
            </motion.button>
          ))}
        </div>

        {/* IndiaSkills Banner */}
        {activeTab === 'indiskills' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            style={{
              marginBottom: '2rem', padding: '1rem 1.5rem', borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(123,111,232,0.12), rgba(79,142,247,0.08))',
              border: '1px solid rgba(123,111,232,0.25)',
              display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
            }}>
            <Trophy size={28} color="#7b6fe8" />
            <div>
              <p style={{ color: '#7b6fe8', fontWeight: 800, fontSize: '1rem', margin: 0, fontFamily: "'Syne',sans-serif" }}>
                IndiaSkills 2025 — National Competitor 🇮🇳
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', margin: '4px 0 0' }}>
                Represented Gujarat in Web Technologies · Competed at Yashobhoomi, Bangalore
              </p>
            </div>
          </motion.div>
        )}

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '1.5rem' }}>

            {data.map((item) => (
              <motion.div key={item.id}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, boxShadow: '0 24px 50px rgba(123,111,232,0.15)' }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: item.featured ? '1px solid rgba(123,111,232,0.4)' : '1px solid rgba(123,111,232,0.1)',
                  borderRadius: 18, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', position: 'relative',
                }}>

                {item.featured && (
                  <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 10, background: 'linear-gradient(135deg,#7b6fe8,#4f8ef7)', padding: '4px 12px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: 4, letterSpacing: '0.5px' }}>
                    <Trophy size={10} /> FEATURED
                  </div>
                )}

                {/* Main image */}
                <div style={{ position: 'relative', height: item.featured ? 280 : 220, overflow: 'hidden' }}
                  onClick={() => openLightbox(item.photos, 0, item.title)}>
                  <img src={item.photos[0]} alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.4s ease', transform: hoveredCard === item.id ? 'scale(1.06)' : 'scale(1)' }} />

                  <AnimatePresence>
                    {hoveredCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,20,0.97) 0%, rgba(11,13,20,0.75) 60%, transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.2rem' }}>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                          {item.desc}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, color: '#4f8ef7', fontSize: '0.78rem', fontWeight: 700 }}>
                          <ZoomIn size={13} /> Click to view full size
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {item.photos.length > 1 && (
                    <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', borderRadius: 20, padding: '3px 10px', fontSize: '0.72rem', color: '#fff', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)' }}>
                      {item.photos.length} photos
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div style={{ padding: '1rem 1.2rem 1.2rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', fontFamily: "'Syne',sans-serif", margin: '0 0 4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#4f8ef7', fontWeight: 600, margin: 0 }}>
                    {item.caption}
                  </p>

                  {/* Thumbnail strip */}
                  {item.photos.length > 1 && (
                    <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                      {item.photos.map((p, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.08 }}
                          onClick={(e) => { e.stopPropagation(); openLightbox(item.photos, i, item.title) }}
                          style={{ width: 44, height: 36, borderRadius: 6, overflow: 'hidden', cursor: 'pointer', border: i === 0 ? '1px solid #7b6fe8' : '1px solid rgba(123,111,232,0.2)', flexShrink: 0 }}>
                          <img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{ position: 'fixed', inset: 0, background: 'rgba(3,4,8,0.98)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(16px)' }}>

            <button onClick={closeLightbox}
              style={{ position: 'fixed', top: 18, right: 18, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
              <X size={20} />
            </button>

            <motion.div
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>

              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox.idx}
                  src={lightbox.photos[lightbox.idx]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 12, boxShadow: '0 0 60px rgba(123,111,232,0.2)' }}
                />
              </AnimatePresence>

              {lightbox.photos.length > 1 && (
                <>
                  <button onClick={() => navLightbox(-1)}
                    style={{ position: 'absolute', left: 16, background: 'rgba(123,111,232,0.15)', border: '1px solid rgba(123,111,232,0.3)', borderRadius: '50%', width: 52, height: 52, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronLeft size={26} />
                  </button>
                  <button onClick={() => navLightbox(1)}
                    style={{ position: 'absolute', right: 16, background: 'rgba(123,111,232,0.15)', border: '1px solid rgba(123,111,232,0.3)', borderRadius: '50%', width: 52, height: 52, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronRight size={26} />
                  </button>
                </>
              )}
            </motion.div>

            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(3,4,8,1), transparent)', textAlign: 'center' }}>
              <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, fontFamily: "'Syne',sans-serif" }}>
                {lightbox.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}