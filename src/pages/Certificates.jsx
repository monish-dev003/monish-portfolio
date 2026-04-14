import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const V = {
  accent:  "#7b6fe8",
  accent2: "#4f8ef7",
  glow:    "rgba(123,111,232,0.18)",
  glow2:   "rgba(79,142,247,0.15)",
  card:    "rgba(255,255,255,0.025)",
  border:  "rgba(123,111,232,0.12)",
  borderH: "rgba(123,111,232,0.3)",
};

const CERTS = {
  numbers: [
    {
      title: "Aikyam 3.0 — 1st Rank",
      org: "Sardar Patel College of Administration & Management",
      date: "February 10–11, 2026",
      desc: "Secured First Rank in IT Quiz at National Techno Biz Fest – Aikyam 3.0, Bakrol.",
      img: "/certs/aikyam3.jpeg",
      badge: "🥇",
      color: "#f59e0b",
    },
    {
      title: "Brain Tech 2024 — 2nd Rank",
      org: "CP Patel & FH Shah Commerce College",
      date: "January 23, 2024",
      desc: "Secured 2nd rank in IT Quiz at One Day National Level Hackathon 'Brain Tech 2024'.",
      img: "/certs/braintech2024.jpeg",
      badge: "🥈",
      color: "#94a3b8",
    },

  ],
  others: [
    {
      title: "17th National Youth Parliament Competition",
      org: "Ministry of Parliamentary Affairs, Govt. of India",
      date: "March 20, 2025",
      desc: "Member of 17th NYPC team at Group Level, 2024–2025.",
      img: "/certs/nypc2025.jpeg",
      badge: "🏛️",
      color: V.accent2,
    },
    {
      title: "Six Days National Workshop — Data Analytics",
      org: "KCG, DDUKK — Dept. of Vocational Studies",
      date: "January 20–27, 2026",
      desc: "KCG-sponsored Six Days National Workshop on 'Data Analytics' (Hybrid Mode).",
      img: "/certs/dataanalytics.jpeg",
      badge: "📊",
      color: V.accent,
    },
    {
      title: "Workshop — Mobile App Development (Android)",
      org: "KCG, CP Patel & FH Shah Commerce College",
      date: "February 6, 2026",
      desc: "One Day State Level Workshop on Mobile Application Development Using Android.",
      img: "/certs/mobileapp.jpeg",
      badge: "📱",
      color: V.accent2,
    },
    {
      title: "Workshop — AI: High Performance Computing & Deep Learning",
      org: "KCG, CP Patel & FH Shah Commerce College",
      date: "February 10, 2026",
      desc: "One Day State Level Workshop on AI: High Performance Computing and Deep Learning.",
      img: "/certs/aiworkshop.jpeg",
      badge: "🤖",
      color: V.accent,
    },

  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("numbers");
  const [selected, setSelected] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div style={{ background: "#0c0e18", borderRadius: 18, padding: 28, border: `1px solid ${V.border}`, boxShadow: `0 0 60px ${V.glow}` }}>

        <p style={{ fontSize: "0.78rem", color: V.accent2, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>
          My Achievements
        </p>
        <h2 style={{ fontSize: "2.2rem", background: `linear-gradient(135deg, ${V.accent}, ${V.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6, fontFamily: "'Syne', sans-serif" }}>
          Certificates 🏅
        </h2>
        <p style={{ color: "#8892a4", marginBottom: 28 }}>Certifications, hackathon wins, and recognition.</p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { key: "numbers", label: "🏆 Rankings & Wins" },
            { key: "others",  label: "📜 Others" },
          ].map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setTab(key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "10px 24px", borderRadius: 10, cursor: "pointer",
                background: tab === key ? `linear-gradient(135deg, ${V.accent}, ${V.accent2})` : "rgba(255,255,255,0.03)",
                color: tab === key ? "#fff" : "#9aa0a6",
                fontWeight: 700, fontSize: "0.9rem",
                fontFamily: "'Syne', sans-serif",
                boxShadow: tab === key ? `0 4px 18px ${V.glow}` : "none",
                border: tab === key ? "none" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 28px ${V.glow}`, borderColor: V.borderH }}
                style={{ background: V.card, borderRadius: 16, padding: 20, color: "#fff", border: `1px solid ${V.border}`, transition: "all 0.3s ease" }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", borderRadius: 12, marginBottom: 14 }}>
                  <img src={c.img} alt={c.title} style={{ width: "100%", height: 175, objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(11,13,20,0.8)", borderRadius: 8, padding: "4px 10px", fontSize: 20, backdropFilter: "blur(6px)" }}>
                    {c.badge}
                  </div>
                </div>

                <strong style={{ fontSize: 14, fontFamily: "'Syne', sans-serif", display: "block", color: "#e8edf5", lineHeight: 1.4 }}>{c.title}</strong>
                <div style={{ fontSize: 12, color: c.color, marginTop: 5, fontWeight: 600 }}>{c.org}</div>
                <div style={{ fontSize: 11, color: "#4a5568", marginTop: 3 }}>{c.date}</div>
                <div style={{ fontSize: 12, color: "#8892a4", marginTop: 8, lineHeight: 1.55 }}>{c.desc}</div>

                <motion.button
                  onClick={() => setSelected(c)}
                  whileHover={{ scale: 1.04, boxShadow: `0 0 16px ${V.glow}` }}
                  style={{
                    marginTop: 16, width: "100%",
                    background: `rgba(123,111,232,0.08)`,
                    border: `1px solid rgba(123,111,232,0.25)`,
                    color: V.accent, borderRadius: 8, padding: "8px 18px",
                    cursor: "pointer", fontWeight: 700, fontSize: 13, transition: "0.3s",
                  }}
                >
                  View Certificate
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.94)", display: "flex",
              justifyContent: "center", alignItems: "center", zIndex: 1000,
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", maxWidth: "90%", maxHeight: "88vh" }}
            >
              <img
                src={selected.img} alt={selected.title}
                style={{ width: "100%", height: "auto", borderRadius: 16, maxHeight: "80vh", objectFit: "contain", boxShadow: `0 0 60px ${V.glow}`, border: `1px solid rgba(123,111,232,0.2)` }}
              />
              <div style={{ position: "absolute", bottom: -48, left: 0, right: 0, textAlign: "center", color: "#dde4f0", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600 }}>
                {selected.badge} {selected.title}
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{ position: "absolute", top: -44, right: 0, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer", borderRadius: 8, padding: "6px 14px", fontSize: 13 }}
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
