import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

export default function AboutMe() {
  const achievements = [
    { icon: "🥇", title: "1st Rank — Aikyam 3.0 IT Quiz (National Level), Feb 2026" },
    { icon: "🥈", title: "2nd Rank — National Level Hackathon Brain Tech 2024 (Quiz)" },
    { icon: "🥈", title: "2nd Rank — National Level Hackathon Oriana 2025" },
    { icon: "🎤", title: "Hosted Department's National Level Hackathon" },
    { icon: "🏆", title: "IndiaSkills 2025 — National Level Competitor, Bangalore" },
  ];

  return (
    <div style={{
      minHeight: "100vh", width: "100%",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      background: "radial-gradient(circle at top, #0d0d14, #060608)",
      color: "white", padding: "3rem 1.5rem",
      '--accent': '#7b6fe8', '--accent-2': '#4f8ef7',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          width: "100%", maxWidth: "1100px",
          background: "rgba(255,255,255,0.015)", padding: "3rem 3.5rem",
          borderRadius: "20px", boxShadow: "0 0 60px rgba(123,111,232,0.06)",
          border: "1px solid rgba(123,111,232,0.1)", backdropFilter: "blur(12px)",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "var(--accent-2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Get to know me
        </p>
        <h2 style={{
          fontSize: "2.5rem", marginBottom: "1.4rem", fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text", color: "transparent",
        }}>About Me</h2>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", marginBottom: "1.2rem", lineHeight: 1.85 }}>
          Hi, I'm <strong style={{ color: "var(--accent)" }}>Monish Ilyashbhai Shekh</strong> — an aspiring{" "}
          <strong style={{ color: "#fff" }}>Full Stack Developer</strong> with hands-on experience in the{" "}
          <strong style={{ color: "var(--accent-2)" }}>MERN stack</strong>, backend development with{" "}
          <strong>Node.js, Express.js & Laravel</strong>, and database management with{" "}
          <strong>MongoDB & MySQL</strong>.
        </p>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.75)", marginBottom: "1.2rem", lineHeight: 1.85 }}>
          During my internships, I've built over 15 reusable React components, integrated RESTful APIs, and optimized
          performance to ensure smooth user experiences. I love building things that are not just functional — but also feel great to use.
        </p>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.85 }}>
          Currently pursuing a <strong style={{ color: "var(--accent-2)" }}>B.Voc in Software Development</strong> at
          C P Patel & F H Shah Commerce College Anand, Autonomous. I'm passionate about hackathons,
          clean code, and continuous learning. I also competed at{" "}
          <strong style={{ color: "var(--accent)" }}>IndiaSkills 2025</strong> — a national-level competition in Bangalore.
        </p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", fontFamily: "'Syne', sans-serif", color: "var(--accent-2)" }}>
            Education
          </h3>
          <motion.div
            whileHover={{ scale: 1.01, borderColor: "var(--accent-2)" }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(79,142,247,0.03)", borderRadius: "14px",
              padding: "1.5rem 2rem", border: "1px solid rgba(79,142,247,0.12)",
              display: "flex", alignItems: "flex-start", gap: "1.5rem",
            }}
          >
            <FaUniversity size={36} color="var(--accent-2)" style={{ flexShrink: 0, marginTop: 4 }} />
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: "0.3rem", fontSize: "1.25rem", fontFamily: "'Syne', sans-serif" }}>
                B.Voc in Software Development
              </h4>
              <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.2rem" }}>
                <strong>C P Patel & F H Shah Commerce College Anand, Autonomous</strong>
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Sardar Patel University</p>
              <p style={{ color: "var(--accent-2)", fontSize: "0.9rem", marginTop: "6px", fontWeight: "600" }}>
                2023 – Present (Expected 2026)
              </p>
              {/* CGPA note — 5th sem result, 6th sem awaiting */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: "8px", padding: "6px 14px", borderRadius: "20px",
                background: "rgba(123,111,232,0.08)", border: "1px solid rgba(123,111,232,0.2)",
              }}>
                <span style={{ fontSize: "0.82rem", color: "#dde4f0", fontWeight: 600 }}>
                  CGPA: <span style={{ color: "var(--accent)" }}>7.09</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}> (up to 5th Semester · 6th Sem result awaited)</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* Internship Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ marginTop: '3.5rem' }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.8rem', fontFamily: "'Syne', sans-serif", color: 'var(--accent)' }}>
            Work Experience
          </h3>
          <div style={{ position: 'relative', paddingLeft: '28px' }}>
            <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 2, background: 'linear-gradient(180deg, #7b6fe8, #4f8ef7, rgba(79,142,247,0.1))', borderRadius: 2 }} />
            {[
              { icon: '⚛️', role: 'React.js Intern', company: 'Vinixinfotech', period: 'Jun - Jul 2025', desc: 'Built 15+ reusable React components, integrated REST APIs, improved app performance. Worked on production codebase with Redux Toolkit and React Router.', color: '#7b6fe8' },
              { icon: '⚙️', role: 'Node.js Intern', company: 'Vinixinfotech', period: 'Nov - Dec 2025', desc: 'Developed backend REST APIs with Node.js & Express.js + JWT auth. Managed MongoDB collections and wrote optimised aggregation pipelines.', color: '#4f8ef7' },
              { icon: '📱', role: 'Flutter Intern', company: 'TechnoEdix', period: 'Mar 2025', desc: 'Built cross-platform mobile UI screens using Flutter & Dart. Integrated Firebase realtime data and implemented Provider state management.', color: '#7b6fe8' },
              { icon: '🌐', role: 'Laravel Intern', company: 'TechnoGuide', period: 'May - Jun 2024', desc: 'Built CRUD web apps using Laravel MVC. Worked with Eloquent ORM, Blade templating, and MySQL for full backend feature delivery.', color: '#4f8ef7' },
            ].map((job, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ x: 6, borderColor: job.color }}
                style={{ position: 'relative', marginBottom: '1.2rem', padding: '1.1rem 1.4rem', borderRadius: 14, border: '1px solid rgba(123,111,232,0.12)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s ease' }}
              >
                <div style={{ position: 'absolute', left: -36, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: job.color, border: '2px solid #0b0d14' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <div>
                    <span style={{ fontSize: '1.1rem', marginRight: 8 }}>{job.icon}</span>
                    <strong style={{ color: '#dde4f0', fontFamily: "'Syne',sans-serif" }}>{job.role}</strong>
                    <span style={{ color: job.color, fontWeight: 700, fontSize: '0.9rem', marginLeft: 8 }}>@ {job.company}</span>
                  </div>
                  <span style={{ background: 'rgba(123,111,232,0.1)', border: '1px solid rgba(123,111,232,0.2)', padding: '3px 10px', borderRadius: 20, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    {job.period}
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", fontFamily: "'Syne', sans-serif", color: "var(--accent)" }}>
            Achievements
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8, background: "rgba(123,111,232,0.07)" }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1.1rem 1.4rem", borderRadius: "12px",
                  border: "1px solid rgba(123,111,232,0.12)",
                  background: "rgba(255,255,255,0.02)", transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{a.icon}</span>
                <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "1rem" }}>{a.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3 style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            Interests
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
            {["💻 Coding", "🏆 Hackathons", "🎮 Gaming", "⚙️ Technology", "🚀 Open Source"].map((interest, i) => (
              <span key={i} style={{
                padding: "7px 16px", borderRadius: "20px", fontSize: "0.88rem",
                background: "rgba(123,111,232,0.06)", border: "1px solid rgba(123,111,232,0.2)",
                color: "#e5e5e5", fontWeight: "500",
              }}>{interest}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
