"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";

const teamMembers = [
  { id: 1, image: "/professional-man-with-glasses-beard.jpg" },
  { id: 2, image: "/professional-woman-dark-hair.png" },
  { id: 3, image: "/professional-man-in-suit-blue-shirt.jpg" },
  { id: 4, image: "/professional-woman-in-yellow-blazer.jpg" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function PeoplePageHero() {
  return (
    <section className="w-full ">
      {/* TOP IMAGE STRIP */}
      <div className="flex h-[400px] ">
        {teamMembers.map((m) => (
          <div key={m.id} className="relative flex-1">
            <Image
              src={m.image}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* SEARCH SECTION */}
      <div className="bg-[#f4f5f6] px-[100px]">
        <div className="mx-auto  py-[96px]">
          {/* 70 / 30 GRID */}
          <div className="grid grid-cols-[60%_1px_30%] items-start gap-16">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-[60px] font-light text-[#323E48] mb-5">
                Find an Attorney
              </h1>

              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Type a name or keyword"
                  className="h-[56px] w-full max-w-[640px] bg-white px-6 text-[18px] text-[#323E48] outline-none"
                />
                <button className="h-[56px] px-12 bg-[#b2292e] text-white text-[18px] font-medium hover:bg-[#9f2227] transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-[200px] w-px bg-[#d1d5db]" />

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-5 justify-end">
              {/* A–M */}
              <div className="flex flex-wrap gap-[24.2px]">
                {alphabet.slice(0, 13).map((l) => (
                  <span
                    key={l}
                    className="text-[20px] font-light text-[#323E48] hover:text-[#b2292e] cursor-pointer transition-colors"
                  >
                    {l}
                  </span>
                ))}
              </div>

              {/* N–Z */}
              <div className="flex flex-wrap gap-[23px]">
                {alphabet.slice(13).map((l) => (
                  <span
                    key={l}
                    className="text-[20px] font-light text-[#323E48] hover:text-[#b2292e] cursor-pointer transition-colors"
                  >
                    {l}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex justify-between pt-[75px] text-[#b2292e]">
                <button className="flex items-center gap-2 text-[20px] font-medium hover:underline">
                  Advanced Search <ChevronDown size={18} />
                </button>
                <button className="flex items-center gap-2 text-[20px] font-medium hover:underline">
                  View all <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DARK STRIP */}
      <div className="bg-[#2f3a42] h-[100px] flex items-center justify-center">
        <button
          aria-label="Scroll down"
          onClick={() => {
            const el = document.getElementById("people-content");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
        >
          <ChevronDown
            size={28}
            className="text-white opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </button>
      </div>
    </section>
  );
}
