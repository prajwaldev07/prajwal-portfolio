"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import CarModel from "./CarModel";

export default function HeroSection() {
  const controlsRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col lg:flex-row items-center font-sans"
    >
      {/* ---------------- BACKGROUNDS (REFERENCE IMAGE GRADIENT ONLY) ---------------- */}
      
      {/* Subtle vignette edges optimized */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)] z-0 pointer-events-none" />
      
      {/* Ambient Red Glow behind the car matching reference */}
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(110,5,5,0.4)_0%,rgba(20,0,0,0.2)_40%,transparent_70%)] z-0 pointer-events-none" />

      {/* ---------------- LEFT SIDE: ORIGINAL TYPOGRAPHY ---------------- */}
      <div className="relative z-20 w-full lg:w-[40%] h-[50vh] lg:h-screen flex flex-col justify-center px-6 lg:px-12 xl:px-16 pointer-events-auto mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h2 className="text-zinc-400 font-sans tracking-[0.4em] uppercase text-xs mb-8">
            MCA Student • 2027
          </h2>
          
          <div className="flex flex-col leading-[0.85] select-none w-full">
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl text-white uppercase tracking-tighter drop-shadow-xl">
              Prajwal
            </h1>
            <h1 
              className="font-heading font-black text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl uppercase tracking-tighter drop-shadow-md mt-4"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)', color: 'transparent' }}
            >
              Ponarkar
            </h1>
          </div>

          <h3 className="text-zinc-300 text-sm md:text-base font-light tracking-[0.4em] uppercase mt-12 border-l-2 border-f1-red pl-4 shadow-sm">
            Full Stack Developer
          </h3>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-6 mt-16 pointer-events-auto"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-colors duration-300 hover:text-white min-w-[200px] rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-f1-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </a>

            <a
              href="/resume/prajwal_resume.pdf.pdf"
              download="Prajwal_Ponarkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-widest text-xs hover:border-white transition-colors duration-300 min-w-[200px] rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <Download size={14} className="group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------------- RIGHT SIDE: REFERENCE CAR PLACEMENT ---------------- */}
      <div className="relative z-10 w-full lg:w-[60%] h-[50vh] lg:h-screen cursor-grab active:cursor-grabbing">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 6], fov: 40 }}>
          <ambientLight intensity={0.4} />
          <spotLight position={[-10, 10, 10]} intensity={4} penumbra={0.8} angle={0.5} color="#ffffff" />
          <spotLight position={[10, 10, -10]} intensity={3} penumbra={1} color="#ffffff" />
          <spotLight position={[0, 5, 5]} intensity={2} penumbra={0.5} />
          
          <pointLight position={[1.2, -1.3, 0]} color="#e10600" intensity={8} distance={5} />
          <pointLight position={[1.2, 0.2, 0]} color="#ff1111" intensity={3} distance={4} />

          <Suspense fallback={null}>
            <OrbitControls
              ref={controlsRef}
              autoRotate={!isInteracting}
              autoRotateSpeed={0.8}
              enableDamping={true}
              dampingFactor={0.05}
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2 - 0.05}
              target={[0, -0.5, 0]}
              makeDefault
            />
            
            <Float speed={1.5} rotationIntensity={0.01} floatIntensity={0.02}>
              {/* Car reduced by ~20% and pushed completely to the right */}
              <CarModel scale={0.85} position={[1.2, -1.3, 0]} rotation={[0, -Math.PI / 6, 0]} />
              
              <ContactShadows 
                position={[1.2, -1.25, 0]} 
                opacity={0.9} 
                scale={15} 
                blur={3} 
                far={4} 
                resolution={256} 
                color="#000000"
              />
            </Float>

            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-f1-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
