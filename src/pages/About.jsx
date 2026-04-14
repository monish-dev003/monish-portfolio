import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const AboutMe = () => {
  const achievements = [
    { icon: "🥇", title: "1st Rank — IT Quiz at National Techno Biz Fest Aikyam 3.0 (2026)" },
    { icon: "🥈", title: "2nd Rank — National Level Hackathon Brain Tech 2024 (Quiz)" },
    { icon: "🥈", title: "2nd Rank — National Level Hackathon Oriana 2025" },
    { icon: "🎤", title: "Hosted Department's National Level Hackathon" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", width: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d14, #060608)",
        color: "white", padding: "3rem 1.5rem",
        // 👈 THEME VARIABLES
        '--accent': '#7b6fe8',    // Rose Pink
        '--accent-2': '#4f8ef7',  // Cerulean Blue
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          width: "100%", maxWidth: "1100px",
          background: "rgba(255,255,255,0.015)",
          padding: "3rem 3.5rem",
          borderRadius: "20px",
          // 👈 BLUE GLOW SHADOW
          boxShadow: "0 0 60px rgba(56,189,248,0.04)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Section label */}
        <p style={{ fontSize: "0.8rem", color: "var(--accent-2)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Get to know me
        </p>

        <h2 style={{
          fontSize: "2.5rem", marginBottom: "1.4rem", fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text", color: "transparent",
        }}>
          About Me
        </h2>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", marginBottom: "1.2rem", lineHeight: 1.85 }}>
          Hi, I'm <strong style={{ color: "var(--accent)" }}>Monish Ilyashbhai Shekh</strong> — an aspiring{" "}
          <strong style={{ color: "#fff" }}>Full Stack Developer</strong> with hands-on experience in the{" "}
          <strong style={{ color: "var(--accent-2)" }}>MERN stack</strong>, backend development with{" "}
          <strong>Node.js, Express.js & Laravel</strong>, and database management with{" "}
          <strong>MongoDB & MySQL</strong>.
        </p>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.75)", marginBottom: "1.2rem", lineHeight: 1.85 }}>
          During my internships, I've built over 15 reusable React components, integrated
          RESTful APIs, and optimized performance to ensure smooth user experiences. I love building things that
          are not just functional — but also feel great to use.
        </p>

        <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.85 }}>
          Currently pursuing a <strong style={{ color: "var(--accent-2)" }}>B.Voc in Software Development</strong> at{" "}
          C P Patel & F H Shah Commerce College Anand, Autonomous (CGPA: 7.10), I'm passionate about
          hackathons, clean code, and continuous learning.
        </p>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h3 style={{
            fontSize: "1.6rem", marginBottom: "1.5rem", fontFamily: "'Syne', sans-serif",
            color: "var(--accent-2)"
          }}>
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {[
              {
                Icon: FaUniversity,
                degree: "B.Voc in Software Development",
                institution: "C P Patel & F H Shah Commerce College Anand, Autonomous",
                sub: "Sardar Patel University",
                detail: "2023 – Present (Expected 2026) | CGPA: 7.10",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01, borderColor: "var(--accent-2)" }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(56,189,248,0.03)",
                  borderRadius: "14px",
                  padding: "1.5rem 2rem",
                  border: "1px solid rgba(56,189,248,0.12)",
                  display: "flex", alignItems: "center", gap: "1.5rem",
                }}
              >
                <edu.Icon size={36} color="var(--accent-2)" />
                <div>
                  <h4 style={{ color: "var(--accent)", marginBottom: "0.3rem", fontSize: "1.25rem", fontFamily: "'Syne', sans-serif" }}>
                    {edu.degree}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.2rem" }}>
                    <strong>{edu.institution}</strong>
                  </p>
                  {edu.sub && <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>{edu.sub}</p>}
                  <p style={{ color: "var(--accent-2)", fontSize: "0.9rem", marginTop: "4px", fontWeight: "500" }}>{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ marginTop: "3.5rem" }}
        >
          <h3 style={{
            fontSize: "1.6rem", marginBottom: "1.5rem", fontFamily: "'Syne', sans-serif",
            color: "var(--accent)"
          }}>
            Achievements
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8, background: "rgba(232,121,249,0.05)" }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1.1rem 1.4rem", borderRadius: "12px",
                  border: "1px solid rgba(232,121,249,0.1)",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{a.icon}</span>
                <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "1rem" }}>{a.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests - Pink Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3 style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem", textTransform: 'uppercase', letterSpacing: '1px' }}>
            Interests
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
            {["💻 Coding", "🏆 Hackathons", "🎮 Gaming", "⚙️ Technology"].map((interest, i) => (
              <span key={i} style={{
                padding: "7px 16px", borderRadius: "20px", fontSize: "0.88rem",
                background: "rgba(232,121,249,0.06)", border: "1px solid rgba(232,121,249,0.2)",
                color: "#e5e5e5",
                fontWeight: "500"
              }}>
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;