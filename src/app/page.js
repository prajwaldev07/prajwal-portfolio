"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DriverProfile from "@/components/DriverProfile";
import PerformanceStats from "@/components/PerformanceStats";
import RaceHighlights from "@/components/RaceHighlights";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-f1-red selection:text-white">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <DriverProfile />
          <PerformanceStats />
          <RaceHighlights />
          <ContactFooter />
        </>
      )}
    </main>
  );
}
