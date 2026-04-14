import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Laravel",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Redux",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Git",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "SQL",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["JavaScript", "SQL", "HTML5", "CSS3"] },
    { title: "Frontend Frameworks", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"] },
    { title: "Backend & APIs", items: ["Node.js", "Express.js", "Laravel", "JWT", "RESTful APIs"] },
    { title: "Databases & Tools", items: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "Docker", "VS Code"] },
  ],
  [
    {
      title: "Core Concepts",
      items: ["Component Architecture", "State Management", "API Integration", "Performance Optimization", "Responsive Design"],
    },
    {
      title: "Soft Skills",
      items: ["Quick Learner", "Team Collaboration", "Adaptability", "Problem Solving", "Communication"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 38;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 90;
      const dy = (Math.random() - 0.5) * 90;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 3000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ fontSize: "0.85rem", color: "#38bdf8", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: "bold" }}>
          What I work with
        </p>
        <h2 style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: "2.8rem", 
          background: "linear-gradient(to right, #38bdf8, #ec4899)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent",
          fontWeight: 800,
          margin: 0 
        }}>
          My Skills
        </h2>
        <div style={{ width: 80, height: 3, background: "linear-gradient(to right, #38bdf8, #ec4899)", margin: "12px auto", borderRadius: 2 }} />
        <p style={{ color: "#94a3b8", fontSize: "1rem", margin: "10px 0" }}>
          ✨ Frontend, Backend, Databases & DevTools — my full stack toolkit.
        </p>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          width: "100%", height: "550px",
          borderRadius: "30px",
          background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.08), #0a0a0c)",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.25,
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.3)",
              background: "rgba(56, 189, 248, 0.15)",
              borderColor: "#38bdf8"
            }}
            style={{
              width: "100px", height: "100px", borderRadius: "50%",
              position: "absolute",
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              transition: "border-color 0.3s ease"
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              style={{
                width: "42px", height: "42px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 10px rgba(56,189,248,0.2)) brightness(1.1)",
                marginBottom: 6,
              }}
            />
            <span style={{ color: "#e2e8f0", fontSize: "10px", fontWeight: 700, letterSpacing: "0.5px" }}>
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table (Orange Fixed to Pink/Blue) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "#ec4899", // Pink border on hover
                  boxShadow: "0 10px 30px rgba(236, 72, 153, 0.1)" 
                }}
                transition={{ duration: 0.5, delay: (rowIndex + colIndex) * 0.1 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "20px",
                  padding: "25px",
                  backdropFilter: "blur(5px)"
                }}
              >
                <h3 style={{ color: "#fff", marginBottom: "15px", fontFamily: "'Syne', sans-serif" }}>{col.title}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {col.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 8, color: "#38bdf8" }} // Blue color on hover
                      style={{ color: "#94a3b8", marginBottom: "8px", fontSize: "0.9rem" }}
                    >
                      {/* Fixed: Orange arrow (▹) changed to Pink (#ec4899) */}
                      <span style={{ color: "#ec4899", marginRight: "8px" }}>▹</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}