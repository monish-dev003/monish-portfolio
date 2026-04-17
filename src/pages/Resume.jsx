import React from "react";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    role: "Node.js Developer Intern",
    company: "Vinix Infotech Pvt. Ltd.",
    location: "Anand, Gujarat",
    period: "Nov – Dec 2025",
    color: "#7b6fe8",
    icon: "⚙️",
    points: [
      "Built production RESTful APIs using Express.js (async/await) with full MVC architecture; integrated MongoDB via Mongoose — awarded Grade A (Excellent).",
      "Implemented complete Express middleware pipeline, dotenv-secured environment configuration & API testing with Thunder Client from scratch.",
    ],
  },
  {
    role: "React.js Developer Intern",
    company: "Vinix Infotech Pvt. Ltd.",
    location: "Anand, Gujarat",
    period: "Jun – Jul 2025",
    color: "#4f8ef7",
    icon: "⚛️",
    points: [
      "Developed 15+ reusable production components using React Hooks, Redux Toolkit & Context API; integrated REST APIs for real-time data rendering.",
      "Achieved 20% load-time reduction via React.memo, lazy loading & code-splitting; shipped fully responsive UIs with Tailwind CSS across all screen sizes.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "TechnoEdix Solution Pvt. Ltd.",
    location: "Gujarat",
    period: "Mar 2025",
    color: "#38bdf8",
    icon: "📱",
    points: [
      "Engineered cross-platform mobile UI components with Flutter/Dart; applied state management patterns and widget composition for smooth, responsive interfaces.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "TechnoGuide Infosoft Pvt. Ltd.",
    location: "Anand, Gujarat",
    period: "May – Jun 2024",
    color: "#34d399",
    icon: "🌐",
    points: [
      "Built a full e-commerce platform using Laravel with CRUD modules, admin panel & payment gateway; reduced data retrieval time by 25% via Eloquent ORM optimization.",
      "Delivered complete MVC Laravel setup — routing, Blade templating, REST API integration — within deadline. Commended by supervisor.",
    ],
  },
];

const skills = [
  "JavaScript (ES6+)", "HTML5", "CSS3", "SQL", "Dart",
  "React.js", "Redux Toolkit", "Next.js", "Bootstrap", "Tailwind CSS", "Vite",
  "Node.js", "Express.js", "Laravel (PHP)", "JWT Auth", "RESTful APIs",
  "Flutter (Android & iOS)",
  "MongoDB", "MySQL", "Mongoose", "Eloquent ORM",
  "Git & GitHub", "Postman", "Docker", "VS Code",
];

export default function Resume() {
  return (
    <section className="container" style={{ padding: "50px 0", '--accent': '#7b6fe8', '--accent-2': '#4f8ef7' }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ background: "#08080a", borderRadius: 18, padding: "40px 32px", color: "#e5e5e5", boxShadow: "0 0 40px rgba(123,111,232,0.08)", border: "1px solid rgba(123,111,232,0.1)" }}
      >
        {/* Title */}
        <p style={{ fontSize: "0.8rem", color: "var(--accent-2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.4rem" }}>My Resume</p>
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 30, color: "var(--accent)", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>
          📄 Resume
        </motion.h2>
        <p style={{ color: "#8892a4", marginBottom: 28 }}>A snapshot of my journey as a developer.</p>

        {/* Profile Header — phone hidden, email only */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, background: "rgba(79,142,247,0.03)", padding: "24px 22px", borderRadius: 14, border: "1px solid rgba(79,142,247,0.1)" }}>
          <div>
            <h3 style={{ fontSize: 26, color: "var(--accent-2)", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>👨‍💻 MONISH I. SHEKH</h3>
            <p style={{ fontSize: 15, color: "#ccc", margin: "0 0 4px" }}>Full Stack Developer · MERN Stack · React.js · Node.js · Laravel · Flutter</p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#9aa0a6" }}>📍 Anand, Gujarat, India</p>
            {/* Phone hidden — email only */}
            <p style={{ margin: "4px 0", fontSize: 14, color: "#9aa0a6" }}>✉️ monishshekh03@gmail.com</p>
          </div>
          <motion.div whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
            style={{ background: "rgba(123,111,232,0.04)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(123,111,232,0.12)", maxWidth: 380, fontSize: 14, lineHeight: 1.65, transition: "border 0.3s ease" }}>
            <strong style={{ color: "var(--accent)" }}>Professional Summary</strong>
            <p style={{ marginTop: 8, color: "#ccc" }}>
              Full Stack Developer with 4 industry internships across React.js, Node.js, Laravel &amp; Flutter, and 3 national hackathon podium finishes. Shipped production-ready features achieving 20% load-time reduction and 25% faster data retrieval. Proficient in building RESTful APIs, scalable backend systems, and responsive UIs. Available immediately for full-stack / frontend roles in Ahmedabad, Vadodara, or Anand.
            </p>
          </motion.div>
        </motion.div>

        {/* ─── EXPERIENCE TIMELINE ─── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 28, fontFamily: "'Syne', sans-serif" }}>
            💼 Experience & Internships
          </h4>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: 20, top: 0, bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #7b6fe8, #4f8ef7, rgba(79,142,247,0))",
              borderRadius: 2,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  style={{ display: "flex", gap: 24 }}
                >
                  {/* Timeline dot */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: `rgba(${item.color === '#7b6fe8' ? '123,111,232' : '79,142,247'},0.12)`,
                      border: `2px solid ${item.color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, boxShadow: `0 0 16px ${item.color}33`,
                    }}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ borderColor: item.color, boxShadow: `0 8px 32px ${item.color}18` }}
                    style={{
                      flex: 1, background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14, padding: "20px 24px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                      <div>
                        <h5 style={{ color: "#fff", fontSize: 17, margin: "0 0 4px", fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                          {item.role}
                        </h5>
                        <p style={{ color: item.color, fontSize: 14, margin: 0, fontWeight: 600 }}>
                          {item.company} &nbsp;·&nbsp; <span style={{ color: "#8892a4", fontWeight: 400 }}>{item.location}</span>
                        </p>
                      </div>
                      <span style={{
                        padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                        background: `${item.color}18`, border: `1px solid ${item.color}40`,
                        color: item.color, whiteSpace: "nowrap", fontFamily: "'Syne', sans-serif",
                      }}>
                        {item.period}
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                      {item.points.map((pt, j) => (
                        <li key={j} style={{ color: "#9aa0a6", fontSize: 14, lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: item.color, marginTop: 2, flexShrink: 0 }}>▹</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education — enrollment 2023, CGPA note */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{ marginTop: 40, border: "1px solid rgba(79,142,247,0.1)", borderRadius: 14, padding: "22px 26px", background: "rgba(255,255,255,0.01)" }}>
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🎓 Education</h4>
          <p style={{ color: "#dde4f0", lineHeight: 1.9, margin: 0 }}>
            <strong>B.Voc in Software Development</strong> — C P Patel & F H Shah Commerce Autonomous College, Anand
            (Sardar Patel University) &nbsp;<strong style={{ color: "#dde4f0" }}>2023–2026</strong>
          </p>
          <p style={{ color: "#9aa0a6", fontSize: 14, marginTop: 6, margin: "6px 0 0" }}>
            CGPA: <strong style={{ color: "#7b6fe8" }}>7.09</strong> / 10
            <span style={{ color: "#666", fontSize: 13 }}> &nbsp;(up to 5th Semester — 6th Semester result awaited)</span>
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ marginTop: 36 }}>
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2 }}>
            {[
              { num: "1️⃣", name: "Expensely – Personal Finance Manager", desc: "MERN Stack · Chart.js · Redux Toolkit · JWT", link: "https://expensly-1.onrender.com" },
              { num: "2️⃣", name: "React.js Practice Projects", desc: "ApiManager, BlogApp, CountApp, FinalBlog, TerminalApp, ThemeContext, WordAnalyzer (React · Redux · React Router · Vite · Context API)", link: "https://deluxe-lebkuchen-efc5ef.netlify.app/" },
              { num: "3️⃣", name: "Node.js Practice Programs", desc: "Express demo, MongoDB connection, OS module utilities, calculator, file/URL demos, REST server (Node.js · Express.js · MongoDB · Mongoose)", link: "https://ephemeral-stroopwafel-17a60a.netlify.app/" },
              { num: "4️⃣", name: "Portfolio Website", desc: "Modern personal portfolio (React + Framer Motion)", link: "https://monish-dev003.netlify.app" },
            ].map((p, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {p.num} <strong style={{ color: "#fff" }}>{p.name}</strong>
                <span style={{ color: "#8892a4", fontSize: 14 }}>— {p.desc}</span>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "#4f8ef7", fontSize: 13, textDecoration: "none", marginLeft: "auto", whiteSpace: "nowrap" }}>↗ Live</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          style={{ marginTop: 36 }}>
          <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((skill) => (
              <motion.span key={skill}
                whileHover={{ scale: 1.08, background: "rgba(123,111,232,0.15)", color: "var(--accent)" }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "5px 12px", borderRadius: 8, fontSize: 13, color: "#ccc", fontWeight: 500, transition: "all 0.2s" }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          style={{ marginTop: 36 }}>
          <h4 style={{ fontSize: 20, color: "var(--accent-2)", marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>🏆 Achievements</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 16 }}>
            {[
              { badge: "🥇", label: "1st Rank", event: "AIKYAM 3.0 — National Hackathon", date: "2025", color: "#38bdf8" },
              { badge: "🥈", label: "2nd Rank", event: "Oriana 2025 — National Hackathon", date: "2025", color: "#94a3b8" },
              { badge: "🥈", label: "2nd Rank", event: "Brain Tech 2024 — National Hackathon", date: "2024", color: "#94a3b8" },
              { badge: "🎤", label: "Event Host", event: "Dept. National Level Hackathon", date: "", color: "#38bdf8" },
            ].map((a, i) => (
              <div key={i} style={{ background: "rgba(123,111,232,0.06)", border: "1px solid rgba(123,111,232,0.15)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{a.badge}</div>
                  <div style={{ color: a.color, fontWeight: 700, fontSize: 13, fontFamily: "'Syne', sans-serif" }}>{a.label}</div>
                  <div style={{ color: "#dde4f0", fontSize: 12, marginTop: 2 }}>{a.event}</div>
                  <div style={{ color: "#4a5568", fontSize: 11, marginTop: 2 }}>{a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 36, flexWrap: "wrap" }}>
          {[
            { name: "💻 GitHub", link: "https://github.com/monish-dev003" },
            { name: "💼 LinkedIn", link: "https://linkedin.com/in/monish-dev003" },
          ].map((site) => (
            <motion.a key={site.name} href={site.link} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              style={{ color: "#9aa0a6", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ marginTop: 48, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(123,111,232,0.15)" }}>
          <iframe src="/resume.pdf" title="Monish Shekh Resume"
            style={{ width: "100%", height: "650px", border: "none", background: "#111" }} />
        </motion.div>

        <motion.a href="/resume.pdf" download
          whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(123,111,232,0.35)" }}
          whileTap={{ scale: 0.96 }}
          style={{ display: "inline-block", marginTop: 20, background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff", padding: "12px 26px", borderRadius: 10, textDecoration: "none", fontWeight: 700, letterSpacing: 0.3, fontSize: 15 }}>
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
