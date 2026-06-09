"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
    href: "https://linkedin.com/in/prajwalponarkar",
    icon: FaLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/prajwaldev07",
    href: "https://github.com/prajwaldev07",
    icon: FaGithub,
  },
];

export default function ContactFooter() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, id, value) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <footer id="contact" className="relative pt-32 pb-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-32">
          
          <div className="max-w-2xl">
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

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
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
