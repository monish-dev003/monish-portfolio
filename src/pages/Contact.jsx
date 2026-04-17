import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";


export default function Contact() {
  const [form, setForm]       = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus]   = useState("");
  const [loading, setLoading] = useState(false);

  const accent  = "#7b6fe8";
  const accent2 = "#4f8ef7";
  const border  = "rgba(255,255,255,0.1)";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    setLoading(true);
    setStatus("");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, contact_info: form.contact, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => { setStatus("✅ Message sent! I'll get back to you soon."); setForm({ name: "", contact: "", subject: "", message: "" }); },
        (err) => { console.error(err); setStatus("❌ Failed to send. Please email me at monishshekh03@gmail.com"); }
      )
      .finally(() => setLoading(false));
  };

  // Instagram monish_.03 added back
  const quickLinks = [
    { src: "/github.png",   title: "GitHub",    link: "https://github.com/monish-dev003" },
    { src: "/linkedin.png", title: "LinkedIn",  link: "https://linkedin.com/in/monish-dev003" },
    { src: "/gmail.png",    title: "Email",     link: "mailto:monishshekh03@gmail.com" },
    { src: "/whatsapp.png", title: "WhatsApp",  link: "https://wa.me/918401627033" },
    { src: "/insta.png",    title: "Instagram", link: "https://instagram.com/monish_.03" },
  ];

  const inputStyle = {
    padding: "14px 18px", borderRadius: "12px", border: `1px solid ${border}`,
    background: "rgba(255,255,255,0.03)", color: "#fff", outline: "none",
    fontSize: "15px", fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s ease",
    width: "100%", boxSizing: "border-box",
  };

  return (
    <section style={{
      minHeight: "100vh", width: "100%",
      display: "flex", flexDirection: "column", alignItems: "center",
      background: `radial-gradient(circle at 50% 10%, rgba(123,111,232,0.07), transparent 50%), #060608`,
      color: "#fff", padding: "4rem 1.5rem", textAlign: "center",
    }}>
      <p style={{ fontSize: "0.85rem", color: accent2, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 700 }}>
        Get in touch
      </p>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "2.8rem", marginBottom: "1rem", fontFamily: "'Syne', sans-serif", background: `linear-gradient(90deg, ${accent}, ${accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
        Let's Connect & Collaborate 🤝
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: "600px", marginBottom: "3rem", fontFamily: "'DM Sans', sans-serif" }}>
        Have a question or want to work together? Drop me a message!
      </motion.p>

      {/* Social Icons */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginBottom: "4rem" }}>
        {quickLinks.map((item, i) => (
          <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -8 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 64, height: 64, borderRadius: "18px", background: "rgba(123,111,232,0.04)", border: "1px solid rgba(123,111,232,0.18)", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.3s" }}>
              <img src={item.src} alt={item.title} style={{ width: 32, height: 32, filter: "brightness(1.2)" }} />
            </div>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{item.title}</span>
          </motion.a>
        ))}
      </div>

      {/* Form */}
      <motion.form onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "550px", background: "rgba(255,255,255,0.02)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(123,111,232,0.15)", backdropFilter: "blur(12px)" }}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = border)} />
        <input type="text" name="contact" placeholder="Your Email" value={form.contact} onChange={handleChange} required style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = accent2)} onBlur={(e) => (e.target.style.borderColor = border)} />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = accent)} onBlur={(e) => (e.target.style.borderColor = border)} />
        <textarea name="message" placeholder="How can I help you?" value={form.message} onChange={handleChange} required rows="5"
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => (e.target.style.borderColor = accent2)} onBlur={(e) => (e.target.style.borderColor = border)} />

        <motion.button type="submit" disabled={loading}
          whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 28px rgba(123,111,232,0.35)" } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          style={{ padding: "16px", background: loading ? "rgba(123,111,232,0.4)" : `linear-gradient(135deg, ${accent}, ${accent2})`, border: "none", borderRadius: "12px", color: "#fff", fontWeight: "800", cursor: loading ? "not-allowed" : "pointer", fontSize: "1rem", fontFamily: "'Syne', sans-serif", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.3s" }}>
          {loading ? <><Loader2 size={18} style={{ animation: "spin 0.7s linear infinite" }} /> Sending...</> : "🚀 Send Message"}
        </motion.button>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

        {status && (
          <p style={{ marginTop: "0.5rem", color: status.includes("✅") ? "#4ade80" : status.includes("⚠️") ? "#fbbf24" : "#f87171", fontWeight: 600, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif" }}>
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
}
