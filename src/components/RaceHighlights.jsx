"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "WEBITECT",
    description:
      "A browser-based web compiler supporting HTML, CSS, and JavaScript with real-time code execution and live preview capabilities.",
    tech: ["React", "Node.js", "Tailwind CSS", "CodeMirror"],
    github: "#",
    live: "#",
    image: "/projects/webitect.png",
  },
  {
    id: "02",
    title: "SKILL MATRIX",
    description:
      "An interactive platform showcasing technical skills, structured learning, and technology exploration.",
    tech: ["Next.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/projects/skillmatrix.png",
  },
];

export default function RaceHighlights() {
  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-f1-red" />
            <h2 className="text-f1-red font-sans font-bold tracking-widest uppercase text-sm">
              Project Showcase
            </h2>
            <div className="h-px w-12 bg-f1-red" />
          </div>
          <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-white mb-2">
            Race Highlights
          </h3>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group relative perspective-[1000px]">
                <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                <motion.div
                  whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative glass rounded-xl overflow-hidden aspect-video border border-white/10 group-hover:border-f1-red/30 transition-colors"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  
                  {/* Floating Number */}
                  <div className="absolute top-4 left-4 font-heading font-bold text-6xl text-white/10 mix-blend-overlay select-none">
                    {project.id}
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div className="font-heading font-bold text-5xl uppercase text-white flex items-center gap-4">
                  <span className="text-f1-red text-2xl">{project.id}.</span>
                  {project.title}
                </div>
                
                <p className="text-f1-silver text-lg font-sans leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-bold tracking-wider uppercase border border-white/20 rounded-full text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm text-white/80 hover:text-f1-red transition-colors group"
                  >
                    <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                    Codebase
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm text-f1-red hover:text-white transition-colors group"
                  >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
