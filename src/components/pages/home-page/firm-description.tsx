"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

export default function FirmDescription() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative bg-[#3d4750] py-16 px-8">
      {/* Pause/Play Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 w-12 h-12 border-2 border-white bg-transparent hover:bg-white/10 transition-colors flex items-center justify-center"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? (
          <Play className="w-5 h-5 text-white" fill="white" />
        ) : (
          <Pause className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <p className="text-white text-center text-2xl leading-relaxed">
          At Polsinelli, we are a different kind of firm. One that loves a
          challenge. One that loves to collaborate. One that is strategically
          designed to be your teammate. Every Am Law 100 firm offers skilled
          legal representation. But we are much more than that: we possess a
          sincere desire to offer humanity, compassion and true partnership to
          both our clients and each other. We've created a new type of firm — we
          are what a law firm should be.
        </p>
      </div>
    </section>
  );
}
