import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
  { label: "Certificates", to: "/certificates" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="nav">
        {/* Logo + Name */}
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            className="logo"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14 }}
          >
            MS
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: 15, fontFamily: "'Syne', sans-serif", color: "#dde4f0" }}>
              Monish Shekh
            </h1>
            <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.4px" }}>
              MERN · React · Laravel
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2px",
            alignItems: "center",
            flexGrow: 1,
            flexWrap: "wrap",
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ position: "relative", fontSize: "0.88rem", textDecoration: "none" }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    padding: "6px 10px", borderRadius: 8,
                  }}
                >
                  <motion.span
                    animate={{ color: isActive ? "#fff" : "var(--muted)" }}
                    transition={{ duration: 0.2 }}
                    style={{ fontWeight: 600 }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        width: "60%", height: "2px", marginTop: 3,
                        borderRadius: 1,
                        background: "linear-gradient(90deg, #7b6fe8, #4f8ef7)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button — visible on mobile */}
        <motion.button
          onClick={() => setMenuOpen((o) => !o)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "rgba(123,111,232,0.1)",
            border: "1px solid rgba(123,111,232,0.25)",
            borderRadius: 10,
            padding: "8px 10px",
            cursor: "pointer",
            color: "#dde4f0",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="hamburger-btn"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 40,
                background: "rgba(7,8,14,0.65)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "72vw", maxWidth: 300,
                zIndex: 50,
                background: "rgba(12,14,22,0.97)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(123,111,232,0.18)",
                display: "flex", flexDirection: "column",
                padding: "1.5rem",
                overflowY: "auto",
              }}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#dde4f0", fontSize: "1.1rem" }}>
                  Menu
                </div>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: "rgba(123,111,232,0.1)", border: "1px solid rgba(123,111,232,0.2)",
                    borderRadius: 8, padding: "6px 8px", cursor: "pointer", color: "#dde4f0",
                  }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={{ textDecoration: "none" }}
                    >
                      {({ isActive }) => (
                        <div style={{
                          padding: "12px 16px", borderRadius: 12,
                          background: isActive ? "linear-gradient(135deg, #5A4485, #38458B)" : "rgba(255,255,255,0.02)",
                          border: `1px solid ${isActive ? "rgba(123,111,232,0.4)" : "rgba(255,255,255,0.04)"}`,
                          color: isActive ? "#fff" : "var(--muted)",
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "0.95rem",
                          fontFamily: "'Syne', sans-serif",
                          transition: "all 0.2s",
                          display: "flex", alignItems: "center",
                          boxShadow: isActive ? "0 4px 20px rgba(91,68,133,0.3)" : "none",
                        }}>
                          {l.label}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: "0.75rem", color: "#444d5c", textAlign: "center", fontFamily: "'Syne', sans-serif" }}>
                  Monish Shekh · v3
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
