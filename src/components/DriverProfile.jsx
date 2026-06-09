"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tags = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Interactive Experience Builder",
  "Modern Web Developer",
];

export default function DriverProfile() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="profile" ref={containerRef} className="relative py-32 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title Background */}
        <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.025] pointer-events-none select-none flex justify-center">
          <h2 className="text-[15vw] font-heading font-bold whitespace-nowrap text-white">
            PROFILE
          </h2>
        </div>

        <motion.div style={{ opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Side: Premium Driver Card */}
          <div className="relative flex justify-center perspective-[2000px] order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              style={{ y: y1 }}
              className="relative w-[320px] h-[460px] sm:w-[380px] sm:h-[540px] group"
            >
              {/* Background ambient red glow */}
              <div className="absolute inset-0 bg-f1-red/20 blur-[80px] rounded-full pointer-events-none z-0" />

              <motion.div
                className="w-full h-full relative z-10 transition-all duration-700 ease-out"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180, scale: 1.05 }}
              >
                {/* ==================== FRONT SIDE ==================== */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_0_40px_rgba(225,6,0,0.2)] flex flex-col justify-end"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Subtle top reflection */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none z-20" />

                  <img
                    src="/driver.jpg"
                    alt="Prajwal Ponarkar - F1 Driver"
                    className="absolute inset-0 w-full h-full object-cover object-top z-0 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />

                  {/* Vignette & Fade to blend the image naturally into the dark card */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

                  {/* Red bottom accent with glow */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-f1-red z-30 shadow-[0_0_15px_#e10600]" />
                </div>

                {/* ==================== BACK SIDE ==================== */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-f1-red/30 shadow-[0_0_40px_rgba(225,6,0,0.15)] flex flex-col items-center justify-center text-center p-8"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {/* Abstract background styling */}
                  <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <h1 className="font-heading font-black text-7xl text-transparent italic tracking-wider mb-2 drop-shadow-2xl" style={{ WebkitTextStroke: '2px #e10600' }}>
                      #17
                    </h1>
                    
                    <h2 className="font-heading font-black text-4xl text-white uppercase tracking-widest mt-6">
                      Prajwal
                    </h2>
                    
                    <div className="w-16 h-[2px] bg-f1-red my-6 shadow-[0_0_10px_#e10600]" />

                    <h3 className="font-sans font-medium text-[10px] sm:text-xs tracking-[0.4em] uppercase text-zinc-400">
                      Full Stack Developer
                    </h3>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-f1-red" />
                <h2 className="text-f1-red font-sans font-bold tracking-widest uppercase text-sm">
                  Driver Profile
                </h2>
              </div>
              <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Who I Am
              </h3>
            </div>

            <p className="text-f1-silver text-lg leading-relaxed font-sans max-w-xl">
              I am Prajwal Ponarkar, an MCA student at BMS Institute of Technology & Management, graduating in 2027. I specialize in full-stack web development and enjoy building modern, interactive digital experiences that combine performance with clean design.
            </p>
            
            <p className="text-f1-silver text-lg leading-relaxed font-sans max-w-xl">
              My primary technologies include Java, JavaScript, React, Node.js, MongoDB, and SQL. With a strong interest in UI/UX design and user-focused development, I strive to build applications that are both functional and engaging.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium tracking-wide uppercase border border-white/10 rounded-full text-white/80 hover:border-f1-red hover:text-f1-red transition-colors duration-300 bg-white/5 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
