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

export default function CapabilitiesPageHero() {
  return (
    <section className="w-full">
      {/* TOP IMAGE STRIP */}
      <div className="flex h-[400px]">
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
        <div className="mx-auto py-[96px]">
          <div className="grid grid-cols-[60%_1px_30%] items-start gap-16">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-[60px] font-light text-[#323E48] mb-5">
                Our Capabilities
              </h1>

              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Type a capability or keyword"
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
            <div className="flex flex-col justify-between h-full">
              {/* CORE PRACTICES */}
              <div className="">
                <div className="text-[24px] font-medium text-[#323E48] mb-5">
                  Core Practices
                </div>

                <div className="flex pl-2 gap-[10px]">
                  {/* LEFT LIST */}
                  <div className="flex flex-col gap-1">
                    {[
                      "Finance",
                      "Health Care",
                      "Intellectual Property",
                      "Labor & Employment",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[18px] text-[#323E48]"
                      >
                        <span className="mt-[9px] h-[4px] w-[4px] bg-[#323E48]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT LIST */}
                  <div className="flex flex-col gap-1">
                    {[
                      "Litigation",
                      "Real Estate",
                      "Corporate & Transactional",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[18px] text-[#323E48]"
                      >
                        <span className="mt-[9px] h-[4px] w-[4px] bg-[#323E48]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT COLUMN */}
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
