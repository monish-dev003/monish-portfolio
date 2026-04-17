import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, ChevronDown, ChevronUp } from "lucide-react";

const defaultPosts = [
  {
    id: 1,
    title: "Why I Love Building Full Stack Apps",
    text: "Working on both frontend and backend has given me a complete picture of how software works. From designing clean React UIs to writing efficient Node.js APIs — each layer teaches you something new. Understanding the full stack means you can debug faster, design better APIs, and build products that actually hold together under pressure. It's a superpower that pays off every day.",
  },
  {
    id: 2,
    title: "My Experience at Hackathons",
    text: "Winning 2nd place twice at national level hackathons was a game-changer for me. The pressure, the teamwork, and rapid prototyping taught me to ship under constraints. You learn that perfect is the enemy of done — what matters is having something working, presentable, and valuable at the end of 24 hours. The friendships and mentors you gain are priceless too.",
  },
  {
    id: 3,
    title: "React vs Laravel — My Honest Take",
    text: "Both are powerful in different domains. React gives you full control over the UI with a component-based architecture that scales beautifully. Laravel, on the other hand, gives you a beautiful opinionated backend with Eloquent ORM, built-in auth scaffolding, and an elegant routing system. Ideally, use both — React on the frontend and Laravel as a REST API backend — for the best developer experience.",
  },
  {
    id: 4,
    title: "The Power of Clean Components",
    text: "Building 15+ reusable React components saved my team 30% development time. Good components are like LEGO bricks — once built, they snap into anything perfectly. The key is thinking about props carefully, keeping components focused on one responsibility, and writing them as if someone else will use them tomorrow. Consistent patterns, good naming, and small component files make a huge difference at scale.",
  },
];

// ✅ L-01: Read More toggle (truncate at ~130 chars)
function PostBody({ text }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 130;
  const isLong = text.length > LIMIT;
  const shown = expanded || !isLong ? text : text.slice(0, LIMIT) + "…";

  return (
    <div>
      <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7", fontSize: "0.95rem", margin: 0 }}>
        {shown}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#7b6fe8", fontSize: "0.85rem", fontWeight: 700,
            padding: "6px 0 0", display: "flex", alignItems: "center", gap: 4,
          }}
        >
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Read more</>}
        </button>
      )}
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);

  // ✅ H-01: Violet theme — no more pink
  const theme = {
    accent:  "#7b6fe8",
    accent2: "#4f8ef7",
    bg:      "#060608",
    card:    "rgba(255,255,255,0.02)",
    border:  "rgba(255,255,255,0.06)",
  };

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("ms_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("ms_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree:    savedVotes[p.id]?.agree    || 0,
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
    const votes = Object.fromEntries(next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }]));
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
        <motion.p
          style={{ fontSize: "0.8rem", color: theme.accent2, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 700 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Thoughts & Opinions
        </motion.p>
        <motion.h2
          style={{
            fontSize: "3rem", marginBottom: "0.5rem",
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          📝 My Blog
        </motion.h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "4rem", fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}>
          Personal thoughts, dev experiences, and honest opinions.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "2rem" }}>
          {posts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px rgba(123,111,232,0.1)`,
                borderColor: theme.accent,
              }}
              style={{
                background: theme.card, borderRadius: "24px", padding: "2rem",
                textAlign: "left", border: `1px solid ${theme.border}`,
                backdropFilter: "blur(10px)",
                display: "flex", flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div>
                {/* ✅ M-05: title color violet instead of pink */}
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: theme.accent, fontFamily: "'Syne', sans-serif" }}>
                  {p.title}
                </h3>
                {/* ✅ L-01: Read More toggle */}
                <PostBody text={p.text} />
              </div>

              {/* Vote Container */}
              <div style={{
                marginTop: "2rem", display: "flex", gap: "1.5rem",
                paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)",
              }}>
                {/* Agree */}
                <motion.button
                  onClick={() => vote(p.id, "agree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    background: p.userVote === "agree" ? theme.accent2 : "transparent",
                    border: `1px solid ${p.userVote === "agree" ? theme.accent2 : "rgba(79,142,247,0.3)"}`,
                    color: p.userVote === "agree" ? "#000" : theme.accent2,
                    padding: "8px 16px", borderRadius: "100px", cursor: p.userVote ? "not-allowed" : "pointer",
                    fontSize: "0.9rem", fontWeight: "bold",
                    opacity: p.userVote && p.userVote !== "agree" ? 0.4 : 1,
                    transition: "all 0.2s",
                  }}
                >
                  <ThumbsUp size={16} /> {p.agree}
                </motion.button>

                {/* Disagree — ✅ M-05: violet instead of pink */}
                <motion.button
                  onClick={() => vote(p.id, "disagree")}
                  disabled={!!p.userVote}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    background: p.userVote === "disagree" ? theme.accent : "transparent",
                    border: `1px solid ${p.userVote === "disagree" ? theme.accent : "rgba(123,111,232,0.3)"}`,
                    color: p.userVote === "disagree" ? "#fff" : theme.accent,
                    padding: "8px 16px", borderRadius: "100px", cursor: p.userVote ? "not-allowed" : "pointer",
                    fontSize: "0.9rem", fontWeight: "bold",
                    opacity: p.userVote && p.userVote !== "disagree" ? 0.4 : 1,
                    transition: "all 0.2s",
                  }}
                >
                  <ThumbsDown size={16} /> {p.disagree}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
