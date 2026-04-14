import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <nav className="nav">
      {/* Logo + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <motion.div
          className="logo"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          style={{
            fontWeight: 900,
            fontSize: "1.15rem",
            color: "#000",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          MS
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ margin: 0, fontSize: 15, fontFamily: "'Syne', sans-serif" }}>
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
            end
            className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
            style={{ position: "relative", fontSize: "0.88rem", textDecoration: "none", color: "white", fontWeight: 600 }}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{ scale: 1.08, color: "var(--accent)" }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 10px", borderRadius: 8 }}
              >
                <motion.span animate={{ color: isActive ? "#000" : "var(--muted)" }} transition={{ duration: 0.2 }}>
                  {l.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      width: "60%", height: "2px", marginTop: 3,
                      borderRadius: 1, backgroundColor: "#000",
                    }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
