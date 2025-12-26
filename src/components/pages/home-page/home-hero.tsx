"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomeHero() {
  return (
    <section className="w-full relative">
      <div className="grid grid-cols-5 grid-rows-2 w-full">
        {/* ROW 1 */}
        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2025/02/Tiffany_Zeigler_0317-default-home-marquee-square-home-marquee-s8-c1-image-18466.jpg",
            "/professional-woman-in-business-attire-smiling.jpg",
          ]}
        />

        <RedTextTile />

        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2025/04/Dan_Flanigan_0031-002-default-home-marquee-square-home-marquee-s11-c3-image-18466.jpg",
            "/professional-man-in-suit-and-tie.jpg",
          ]}
        />

        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2025/03/Kymberly_Kester_1142-default-home-marquee-square-home-marquee-s9-c3b-image-18466.jpg",
            "/professional-woman-with-long-hair-in-office.jpg",
          ]}
        />

        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2022/03/HOME-NARROW_SHELLY-default-home-marquee-square-home-marquee-s10-c5-image-18466.jpg",
            "/professional-woman-in-navy-blazer.jpg",
          ]}
        />

        {/* ROW 2 */}
        <WhiteHeadlineTile />

        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2025/02/Cullin_Hughes_4267-default-home-marquee-square-home-marquee-s12-c9-image-18466.jpg",
            "/professional-man-smiling-in-office-setting.jpg",
          ]}
        />

        <AnimatedImageTile
          images={[
            "https://polsinelli.gjassets.com/content/uploads/2025/02/Shivani_Bailey_0785-default-home-marquee-square-home-marquee-s2-c10-image-18466.jpg",
            "/professional-woman-with-long-hair-in-office.jpg",
          ]}
        />
      </div>
    </section>
  );
}

/* ---------- Tiles ---------- */

function AnimatedImageTile({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full aspect-square overflow-hidden">
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt=""
          fill
          priority
          className={`object-cover transition-opacity duration-600 ${
            idx === currentIndex && !isAnimating ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function RedTextTile() {
  return (
    <div className="bg-[#A3202A] flex items-start">
      <div className="px-[56px] pt-[64px]">
        <p
          className="text-white font-medium whitespace-pre-line"
          style={{
            fontSize: "44px",
            lineHeight: "52px",
          }}
        >
          {`Where great
work and
great people
come
together`}
        </p>
      </div>
    </div>
  );
}

function WhiteHeadlineTile() {
  return (
    <div className="col-span-3 bg-white flex items-end">
      <div className="px-[72px] pb-[72px]">
        <p
          className="text-[#3E4349] font-normal"
          style={{
            fontSize: "64px",
            lineHeight: "72px",
            letterSpacing: "-0.6px",
          }}
        >
          What a law firm should be.
        </p>
      </div>
    </div>
  );
}
