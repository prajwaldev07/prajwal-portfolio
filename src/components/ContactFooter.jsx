"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "prajwalkponarkar@gmail.com",
    href: "mailto:prajwalkponarkar@gmail.com",
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/prajwalponarkar",
    href: "https://www.linkedin.com/in/prajwalponarkar",
    icon: FaLinkedin,
  },
];

export default function ContactFooter() {
  const [copiedId, setCopiedId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleCopy = (e, id, value) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    
    setStatus("sending");

    try {
      await emailjs.send(
        "service_ympff9p",
        "template_zrtcuxo",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "xW1iZy7c2x7jm7-yO"
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans focus:outline-none focus:border-f1-red/50 focus:bg-white/10 transition-colors placeholder:text-white/30";

  return (
    <footer id="contact" className="relative pt-32 pb-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          
          {/* Left Side: Text & Contact Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-f1-red" />
                <h2 className="text-f1-red font-sans font-bold tracking-widest uppercase text-sm">
                  Pit Stop
                </h2>
              </div>
              <h3 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-6">
                Let's <br /> Connect
              </h3>
              <p className="text-f1-silver text-xl font-sans max-w-md mb-6">
                Ready to accelerate your next digital project? Let's build something exceptional together.
              </p>
              <p className="text-f1-red text-sm font-sans font-medium uppercase tracking-wider">
                Available for internships, freelance projects, and collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex items-center justify-between p-6 glass rounded-xl border border-white/5 hover:border-f1-red/50 transition-colors bg-[#0a0a0a]/80"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-f1-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-f1-red group-hover:text-white transition-colors duration-500">
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-f1-silver mb-1">
                        {contact.label}
                      </div>
                      <div className="text-white font-sans text-lg lg:text-xl font-medium tracking-wide">
                        {contact.value}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCopy(e, contact.id, contact.value)}
                    className="relative z-10 p-3 rounded-full hover:bg-white/10 transition-colors text-f1-silver hover:text-white"
                    title="Copy to clipboard"
                  >
                    {copiedId === contact.id ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: EmailJS Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 lg:p-10 glass rounded-2xl border border-white/5 bg-[#0a0a0a]/80 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Red Glow for the form */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.15)_0%,transparent_70%)] pointer-events-none" />

              <h4 className="font-heading font-bold text-3xl text-white uppercase tracking-wider mb-2">
                Send a Message
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  disabled={status === "sending"}
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  disabled={status === "sending"}
                  className={inputClasses}
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
                disabled={status === "sending"}
                className={inputClasses}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                rows={5}
                disabled={status === "sending"}
                className={`${inputClasses} resize-none`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 mt-2 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300 hover:text-white rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <Send size={14} className="group-hover:translate-x-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-f1-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm font-sans font-medium mt-2 flex items-center gap-2"
                >
                  ✅ Message sent successfully. I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm font-sans font-medium mt-2 flex items-center gap-2"
                >
                  ❌ Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>

        {/* Minimal Luxury Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-f1-silver text-sm font-sans uppercase tracking-wider font-medium">
            &copy; 2027 Prajwal Ponarkar
          </div>
          <div className="text-white/40 text-xs font-sans uppercase tracking-widest text-center md:text-right flex flex-wrap justify-center gap-x-2">
            Built with
            <span className="text-white/60">Next.js</span> &bull;
            <span className="text-white/60">React</span> &bull;
            <span className="text-white/60">Three.js</span> &bull;
            <span className="text-white/60">Node.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
