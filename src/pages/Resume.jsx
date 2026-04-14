import React from "react";
import { motion } from "framer-motion";

/* REPLACE: Drop your resume.pdf in /public/ */

export default function Resume() {
  const skills = [
    "JavaScript", "HTML5", "CSS3", "SQL",
    "React.js", "Redux Toolkit", "Next.js", "Bootstrap", "Tailwind CSS",
    "Node.js", "Express.js", "Laravel", "JWT", "RESTful APIs",
    "MongoDB", "MySQL",
    "Git & GitHub", "Postman", "Docker", "VS Code",
    "Quick Learner", "Team Collaboration", "Problem Solving", "Adaptability",
  ];

  return (
    <section 
      className="container" 
      style={{ 
        padding: "50px 0",
        // 👈 NEW PINK-BLUE THEME VARIABLES
        '--accent': '#7b6fe8',    // Rose Pink
        '--accent-2': '#4f8ef7',  // Cerulean Blue
      }}
    >
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ 
          background: "#08080a", 
          borderRadius: 18, 
          padding: "40px 32px", 
          color: "#e5e5e5", 
          // 👈 NEW Blue Glow Shadow
          boxShadow: "0 0 40px rgba(79,142,247,0.06)",
          border: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        {/* Title */}
        <p style={{ fontSize: "0.8rem", color: "var(--accent-2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
          My Resume
        </p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 30, color: "var(--accent)", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}
        >
          📄 Resume
        </motion.h2>
        <p style={{ color: "#8892a4", marginBottom: 28 }}>A snapshot of my journey as a developer.</p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            flexWrap: "wrap", gap: 20,
            // 👈 NEW Blue-ish Background
            background: "rgba(79,142,247,0.03)", padding: "24px 22px",
            borderRadius: 14, border: "1px solid rgba(79,142,247,0.1)",
          }}
        >
          <div>
            <h3 style={{ fontSize: 26, color: "var(--accent-2)", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>
              👨‍💻 MONISH I. SHEKH
            </h3>
            <p style={{ fontSize: 15, color: "#ccc", margin: "0 0 4px" }}>
              Full Stack Developer · MERN Stack · Laravel
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#9aa0a6" }}>📍 Anand, Gujarat</p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#9aa0a6" }}>
              ✉️ monishshekh03@gmail.com &nbsp;|&nbsp; 📞 +91 8401627033
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
            style={{
              background: "rgba(123,111,232,0.04)",
              borderRadius: 12, padding: "16px 20px",
              border: "1px solid rgba(123,111,232,0.12)",
              maxWidth: 380, fontSize: 14, lineHeight: 1.65,
              transition: "border 0.3s ease"
            }}
          >
            <strong style={{ color: "var(--accent)" }}>Professional Summary</strong>
            <p style={{ marginTop: 8, color: "#ccc" }}>
              Aspiring Full Stack Developer with hands-on experience in MERN stack,
              backend development (Node.js, Express.js, Laravel), and database management
              (MongoDB, MySQL). Adept at building reusable components, integrating APIs,
              and delivering responsive, performant user interfaces.
            </p>
          </motion.div>
        </motion.div>

        {/* Education - Blue Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 36, border: "1px solid rgba(79,142,247,0.1)", borderRadius: 14, padding: "22px 26px", background: "rgba(255,255,255,0.01)" }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🎓 Education</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>
              <strong>B.Voc in Software Development</strong> — C P Patel & F H Shah Commerce Autonomous College, Anand
              (Sardar Patel University), 2022–2026 <br />
              <span style={{ color: "#9aa0a6" }}>CGPA: 7.10 (Expected Graduation: 2026)</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience - Pink Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: 36, border: "1px solid rgba(123,111,232,0.1)", borderRadius: 14, padding: "22px 26px", background: "rgba(255,255,255,0.01)" }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 16, fontFamily: "'Syne', sans-serif" }}>💼 Experience</h4>

          <div style={{ marginBottom: 18 }}>
            <h5 style={{ color: "#e0e0e0", fontSize: 16, margin: "0 0 4px", fontFamily: "'Syne', sans-serif" }}>
              Full Stack Developer — Vinixinfotech Pvt. Ltd., Anand
            </h5>
            <ul style={{ color: "#9aa0a6", fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Built 15+ reusable React components, reducing dev time by 30% using Redux Toolkit & Vite</li>
              <li>Integrated RESTful APIs for multiple projects, ensuring seamless state management</li>
              <li>Optimized component performance using React.memo, useMemo, and lazy loading (20% load time reduction)</li>
              <li>Designed responsive UIs with HTML5, CSS3, Bootstrap, and Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h5 style={{ color: "#e0e0e0", fontSize: 16, margin: "0 0 4px", fontFamily: "'Syne', sans-serif" }}>
              Web Developer — Tecno Guide Pvt. Ltd., Anand
            </h5>
            <ul style={{ color: "#9aa0a6", fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Developed CRUD modules for product & customer management using Laravel (25% efficiency gain)</li>
              <li>Optimized DB queries with Eloquent ORM, reducing query time by 15%</li>
              <li>Integrated REST APIs and enhanced UI/UX with HTML5, CSS3, and Bootstrap</li>
            </ul>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 36 }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li>1️⃣ <strong style={{color: '#fff'}}>Expensely</strong> — Money Management App (MERN Stack · JWT Auth)</li>
            <li>2️⃣ <strong style={{color: '#fff'}}>Word Analyzer</strong> — Real-time text statistics app (React.js)</li>
            <li>3️⃣ <strong style={{color: '#fff'}}>Blog App</strong> — Full CRUD blog with Laravel & REST APIs</li>
            <li>4️⃣ <strong style={{color: '#fff'}}>Portfolio Website</strong> — Modern personal portfolio (React + Framer Motion)</li>
          </ul>
        </motion.div>

        {/* Skills - Blue/Pink Hybrid tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: 36 }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.08, background: "rgba(79,142,247,0.15)", color: "var(--accent-2)" }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "5px 12px", borderRadius: 8,
                  fontSize: 13, color: "#ccc", fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 36 }}
        >
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🏆 Achievements</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16, marginTop: 4 }}>
            {[
              { badge: '🥇', label: '1st Rank', event: 'Aikyam 3.0 — IT Quiz', date: 'Feb 2026', img: '/certs/aikyam3.jpeg', color: '#f59e0b' },
              { badge: '🥈', label: '2nd Rank', event: 'Brain Tech 2024 — IT Quiz', date: 'Jan 2024', img: '/certs/braintech2024.jpeg', color: '#94a3b8' },
              { badge: '🥈', label: '2nd Rank', event: 'Oriana 2025 — Hackathon', date: '2025', img: '/certs/cert3.svg', color: '#94a3b8' },
            ].map((a, i) => (
              <div key={i} style={{ background: 'rgba(123,111,232,0.06)', border: '1px solid rgba(123,111,232,0.15)', borderRadius: 14, overflow: 'hidden' }}>
                <img src={a.img} alt={a.event} style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{a.badge}</div>
                  <div style={{ color: a.color, fontWeight: 700, fontSize: 13, fontFamily: "'Syne', sans-serif" }}>{a.label}</div>
                  <div style={{ color: '#dde4f0', fontSize: 12, marginTop: 2 }}>{a.event}</div>
                  <div style={{ color: '#4a5568', fontSize: 11, marginTop: 2 }}>{a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 36, flexWrap: "wrap" }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/monish-dev003" },
            { name: "💼 LinkedIn", link: "https://linkedin.com/in/monish-dev003" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              style={{ color: "#9aa0a6", textDecoration: "none", fontSize: 15, fontWeight: 600, transition: '0.3s' }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer - Blue Frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ marginTop: 48, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(79,142,247,0.15)" }}
        >
          <iframe
            src="/resume.pdf"
            title="Monish Shekh Resume"
            style={{ width: "100%", height: "650px", border: "none", background: "#111" }}
          />
        </motion.div>

        {/* Download Button - Pink to Blue Gradient */}
        <motion.a
          href="/resume.pdf" download
          whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(123,111,232,0.3)" }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: "inline-block", marginTop: 20,
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            color: "#fff", padding: "12px 26px",
            borderRadius: 10, textDecoration: "none",
            fontWeight: 700, letterSpacing: 0.3, fontSize: 15,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}