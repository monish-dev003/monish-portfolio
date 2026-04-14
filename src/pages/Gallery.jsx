import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import "./Gallery.css";

const BANGALORE_PHOTOS = [
  { src: "/gallery/indiaskills2.jpeg", caption: "IndiaSkills 2025 — Track 2 Competition" },
  { src: "/gallery/indiaskills3.jpeg", caption: "IndiaSkills 2025 — Assessment Round" },
  { src: "/gallery/indiaskills4.jpeg", caption: "IndiaSkills 2025 — Technical Sessions" },
  { src: "/gallery/indiaskills5.jpeg", caption: "IndiaSkills 2025 — Bangalore Venue" },
  { src: "/gallery/indiaskills1.jpeg", caption: "IndiaSkills 2025 — With Team & Mentors" },
];

export default function Gallery() {
  const [zoom, setZoom] = useState({ open: false, index: 0 });

  const openZoom = (index) => setZoom({ open: true, index });
  const closeZoom = () => setZoom({ open: false, index: 0 });

  const next = () => setZoom((z) => ({ ...z, index: (z.index + 1) % BANGALORE_PHOTOS.length }));
  const prev = () => setZoom((z) => ({ ...z, index: (z.index - 1 + BANGALORE_PHOTOS.length) % BANGALORE_PHOTOS.length }));

  return (
    <div className="gallery-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#4f8ef7", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "0.3rem", fontWeight: 600 }}>
          National Competition
        </p>
        <h2 className="gallery-title">IndiaSkills 2025 — Bangalore 🏆</h2>
        <p style={{ textAlign: "center", color: "#8892a4", marginBottom: "2.5rem", fontSize: "0.95rem", maxWidth: 600, margin: "0 auto 2.5rem" }}>
          Competed at national level — IndiaSkills 2025 Track 2, organized by NASSCOM IT-ITeS SSC, NSDC & Ministry of Skill Development & Entrepreneurship.
        </p>

        {/* Masonry Photo Grid */}
        <div className="bangalore-grid">
          {BANGALORE_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className="bangalore-item"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => openZoom(i)}
            >
              <img src={photo.src} alt={photo.caption} />
              <div className="overlay">
                <span>🔍 {photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Click hint */}
        <p style={{ textAlign: "center", color: "#444d5c", fontSize: "0.82rem", marginTop: "1.5rem" }}>
          Click any photo to view full size
        </p>
      </motion.div>

      {/* Zoom Lightbox */}
      <AnimatePresence>
        {zoom.open && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <motion.img
              key={zoom.index}
              src={BANGALORE_PHOTOS[zoom.index].src}
              className="zoom-img"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
                background: "rgba(11,13,20,0.85)", backdropFilter: "blur(8px)",
                borderRadius: 10, padding: "8px 20px",
                color: "#dde4f0", fontSize: 14, fontWeight: 600,
                border: "1px solid rgba(123,111,232,0.2)",
                whiteSpace: "nowrap",
              }}
            >
              {BANGALORE_PHOTOS[zoom.index].caption}
            </motion.div>

            {/* Counter */}
            <div style={{
              position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)",
              background: "rgba(11,13,20,0.7)", borderRadius: 20, padding: "4px 14px",
              color: "#8892a4", fontSize: 13, fontFamily: "'Syne', sans-serif",
            }}>
              {zoom.index + 1} / {BANGALORE_PHOTOS.length}
            </div>

            <button className="close-btn" onClick={closeZoom}><X size={20} /></button>
            <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={26} /></button>
            <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={26} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
