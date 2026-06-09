"use client";

import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: FaDatabase },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PerformanceStats() {
  return (
    <section id="stats" className="relative py-32 bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-f1-red/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-f1-red" />
            <h2 className="text-f1-red font-sans font-bold tracking-widest uppercase text-sm">
              Capabilities
            </h2>
            <div className="h-px w-12 bg-f1-red" />
          </div>
          <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight text-white">
            Technical Arsenal
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-f1-red/0 group-hover:bg-f1-red/50 rounded-xl blur transition duration-500" />
              <div className="relative h-full glass rounded-xl p-8 flex flex-col items-center justify-center gap-6 overflow-hidden border border-white/5 bg-[#0a0a0a]/80 group-hover:border-f1-red/30 transition-colors duration-500">
                {/* Tech Icon */}
                <div className="text-5xl md:text-6xl text-f1-silver group-hover:text-f1-red transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(225,6,0,0.8)]">
                  <skill.icon />
                </div>

                {/* Skill Name */}
                <h4 className="font-heading font-bold uppercase tracking-wider text-xl text-white">
                  {skill.name}
                </h4>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <div className="h-full bg-f1-red w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
