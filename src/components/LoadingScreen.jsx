"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import CarModel from "./CarModel";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const carRef = useRef(null);
  const linesRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Exit animation
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // Car accelerates out to the left
      tl.to(carRef.current, {
        x: "-150vw",
        duration: 0.8,
        ease: "power4.in",
        scaleX: 1.1, // Fake motion blur stretch
      }, "+=0.2")
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      }, "-=0.2");
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      {/* Top Text */}
      <div className="absolute top-12 w-full text-center tracking-[0.2em] font-heading font-bold text-sm sm:text-lg md:text-xl text-f1-silver">
        FULL STACK DEVELOPER
      </div>

      {/* Center Content */}
      <div className="relative w-full h-[40vh] flex items-center justify-center mt-20">
        {/* Speed lines */}
        <div ref={linesRef} className="absolute inset-0 overflow-hidden opacity-30">
          {mounted && [...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-white opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                animation: `speedLine ${Math.random() * 0.5 + 0.2}s linear infinite`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>

        {/* Car Image */}
        <div
          ref={carRef}
          className="relative z-10 w-3/4 max-w-2xl translate-x-[20vw] h-[300px]"
          style={{
            transform: `translateX(${20 - (progress / 100) * 40}vw)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Suspense fallback={null}>
              <Float speed={4} rotationIntensity={0.1} floatIntensity={0.1}>
                <CarModel scale={1.5} position={[0, -0.8, 0]} rotation={[0, -Math.PI / 4, 0]} />
              </Float>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Loading Percentage */}
      <div className="absolute bottom-20 flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-heading font-bold mb-4 text-outline">
          {Math.min(progress, 100)}%
        </div>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-f1-red"
            style={{ width: `${progress}%`, transition: "width 0.2s ease-out" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes speedLine {
          0% { transform: translateX(100vw); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100vw); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
