import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Why I Love Building Full Stack Apps",
      text: "Working on both frontend and backend has given me a complete picture of how software works. From designing clean React UIs to writing efficient Node.js APIs — each layer teaches you something new.",
    },
    {
      id: 2,
      title: "My Experience at Hackathons",
      text: "Winning 2nd place twice at national level hackathons was a game-changer for me. The pressure, the teamwork, and rapid prototyping taught me to ship under constraints.",
    },
    {
      id: 3,
      title: "React vs Laravel — My Honest Take",
      text: "Both are powerful. React gives you full control over the UI, while Laravel gives you a beautiful, opinionated backend with Eloquent ORM. Ideally, use both for the best DX.",
    },
    {
      id: 4,
      title: "The Power of Clean Components",
      text: "Building 15+ reusable React components saved my team 30% development time. Good components are like LEGO bricks — once built, they snap into anything perfectly.",
    },
  ];

  const [posts, setPosts] = useState([]);

  // Theme Colors
  const theme = {
    pink: "#e879f9",
    blue: "#38bdf8",
    bg: "#060608",
    card: "rgba(255, 255, 255, 0.02)",
    border: "rgba(255, 255, 255, 0.06)"
  };

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("ms_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("ms_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("ms_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("ms_blog_votes", JSON.stringify(votes));
    localStorage.setItem("ms_blog_voted", JSON.stringify({ ...votedByUser, [id]: type }));
  }

  return (
    <motion.section
      style={{
        padding: "5rem 2rem",
        minHeight: "100vh",
        background: theme.bg,
        color: "white",
        fontFamily: "'Syne', sans-serif",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <motion.h2
          style={{
            fontSize: "3rem",
            marginBottom: "0.5rem",
            background: `linear-gradient(90deg, ${theme.pink}, ${theme.blue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          📝 My Blog
        </motion.h2>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "4rem", fontSize: "1.1rem" }}>
          Personal thoughts, dev experiences, and honest opinions.
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "2rem" 
        }}>
          {posts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 20px 40px rgba(56,189,248,0.05)`,
                borderColor: theme.blue
              }}
              style={{
                background: theme.card,
                borderRadius: "24px",
                padding: "2rem",
                textAlign: "left",
                border: `1px solid ${theme.border}`,
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.3s ease"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: theme.pink }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                  {p.text}
                </p>
              </div>

              {/* Vote Container */}
              <div style={{ 
                marginTop: "2rem", 
                display: "flex", 
                gap: "1.5rem", 
                paddingTop: "1.5rem", 
                borderTop: "1px solid rgba(255,255,255,0.05)" 
              }}>
                {/* Agree Button */}
                <motion.button
                  onClick={() => vote(p.id, "agree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    background: p.userVote === "agree" ? theme.blue : "transparent",
                    border: `1px solid ${p.userVote === "agree" ? theme.blue : "rgba(56,189,248,0.3)"}`,
                    color: p.userVote === "agree" ? "#000" : theme.blue,
                    padding: "8px 16px", borderRadius: "100px", cursor: "pointer",
                    fontSize: "0.9rem", fontWeight: "bold", opacity: p.userVote && p.userVote !== "agree" ? 0.5 : 1
                  }}
                >
                  <ThumbsUp size={18} /> {p.agree}
                </motion.button>

                {/* Disagree Button */}
                <motion.button
                  onClick={() => vote(p.id, "disagree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    background: p.userVote === "disagree" ? theme.pink : "transparent",
                    border: `1px solid ${p.userVote === "disagree" ? theme.pink : "rgba(232,121,249,0.3)"}`,
                    color: p.userVote === "disagree" ? "#000" : theme.pink,
                    padding: "8px 16px", borderRadius: "100px", cursor: "pointer",
                    fontSize: "0.9rem", fontWeight: "bold", opacity: p.userVote && p.userVote !== "disagree" ? 0.5 : 1
                  }}
                >
                  <ThumbsDown size={18} /> {p.disagree}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}