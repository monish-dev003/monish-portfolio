import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const theme = {
    pink: "#e879f9",
    blue: "#38bdf8",
    bg: "#060608",
    inputBg: "rgba(255, 255, 255, 0.03)",
    border: "rgba(255, 255, 255, 0.1)"
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    setStatus("Sending...");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, contact_info: form.contact, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { 
          setStatus("✅ Message sent successfully!"); 
          setForm({ name: "", contact: "", subject: "", message: "" }); 
        },
        (error) => { 
          console.error("FAILED...", error); 
          setStatus("❌ Failed to send. Try again later."); 
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/monish-dev003" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://linkedin.com/in/monish-dev003" },
    { img: gmailLogo, title: "Email", link: "mailto:monishshekh03@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/918401627033" },
    { img: instagramLogo, title: "Instagram", link: "https://instagram.com/" },
  ];

  const inputStyle = {
    padding: "14px 18px",
    borderRadius: "12px",
    border: `1px solid ${theme.border}`,
    background: theme.inputBg,
    color: "#fff",
    outline: "none",
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.3s ease",
  };

  return (
    <section
      style={{
        minHeight: "100vh", width: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        background: `radial-gradient(circle at 50% 10%, rgba(56,189,248,0.08), transparent 50%)`,
        backgroundAttachment: "fixed",
        backgroundColor: theme.bg,
        color: "#fff", padding: "4rem 1.5rem", textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: theme.pink, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Get in touch
      </p>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "2.8rem", marginBottom: "1rem",
          fontFamily: "'Syne', sans-serif",
          background: `linear-gradient(90deg, ${theme.pink}, ${theme.blue})`,
          WebkitBackgroundClip: "text", color: "transparent",
        }}
      >
        Let's Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px", marginBottom: "3rem" }}
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>

      {/* Social Icons - Pink/Blue Glow */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginBottom: "4rem" }}>
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -8 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textDecoration: "none" }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: "18px",
              background: "rgba(255,255,255,0.03)", 
              border: `1px solid rgba(255,255,255,0.1)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
              transition: "0.3s"
            }}>
              <img src={item.img} alt={item.title} style={{ width: 32, height: 32, filter: "brightness(1.2)" }} />
            </div>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{item.title}</span>
          </motion.a>
        ))}
      </div>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ 
          display: "flex", flexDirection: "column", gap: "16px", 
          width: "100%", maxWidth: "550px",
          background: "rgba(255,255,255,0.02)",
          padding: "2.5rem", borderRadius: "24px",
          border: `1px solid ${theme.border}`,
          backdropFilter: "blur(12px)"
        }}
      >
        <input
          type="text" name="name" placeholder="Your Name"
          value={form.name} onChange={handleChange} required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = theme.pink)}
          onBlur={(e) => (e.target.style.borderColor = theme.border)}
        />
        <input
          type="text" name="contact" placeholder="Email or Phone Number"
          value={form.contact} onChange={handleChange} required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = theme.blue)}
          onBlur={(e) => (e.target.style.borderColor = theme.border)}
        />
        <input
          type="text" name="subject" placeholder="Subject"
          value={form.subject} onChange={handleChange} required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = theme.pink)}
          onBlur={(e) => (e.target.style.borderColor = theme.border)}
        />
        <textarea
          name="message" placeholder="How can I help you?"
          value={form.message} onChange={handleChange} required rows="5"
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => (e.target.style.borderColor = theme.blue)}
          onBlur={(e) => (e.target.style.borderColor = theme.border)}
        />

        <motion.button
          type="submit"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: `0 0 25px rgba(232, 121, 249, 0.3)` 
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            padding: "16px",
            background: `linear-gradient(135deg, ${theme.pink}, ${theme.blue})`,
            border: "none", borderRadius: "12px", color: "#000",
            fontWeight: "800", cursor: "pointer", fontSize: "1rem",
            fontFamily: "'Syne', sans-serif", marginTop: "10px"
          }}
        >
          🚀 Send Message
        </motion.button>

        {status && (
          <p style={{ marginTop: "1rem", color: status.includes("✅") ? theme.blue : theme.pink, fontWeight: 600 }}>
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
}