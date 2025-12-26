"use client";

import { useState } from "react";
import Image from "next/image";

interface Attorney {
  id: number;
  name: string;
  title: string;
  image: string;
}

const newestAttorneys: Attorney[] = [
  {
    id: 1,
    name: "Attorney Name",
    title: "COUNSEL",
    image: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    name: "Natalya Dvorson",
    title: "COUNSEL",
    image: "/professional-woman-dark-hair.png",
  },
  {
    id: 3,
    name: "Michael Anderson",
    title: "ASSOCIATE",
    image: "/professional-man-in-suit-blue-shirt.jpg",
  },
  {
    id: 4,
    name: "Emily Thompson",
    title: "COUNSEL",
    image: "/professional-woman-in-yellow-blazer.jpg",
  },
  {
    id: 5,
    name: "James Rodriguez",
    title: "ASSOCIATE",
    image: "/professional-man-with-glasses-beard.jpg",
  },
  {
    id: 6,
    name: "Sarah Mitchell",
    title: "COUNSEL",
    image: "/professional-woman-smiling.png",
  },
  {
    id: 7,
    name: "David Chen",
    title: "ASSOCIATE",
    image: "/professional-man-in-suit-blue-shirt.jpg",
  },
  {
    id: 8,
    name: "Jessica Brown",
    title: "COUNSEL",
    image: "/professional-woman-dark-hair.png",
  },
  {
    id: 9,
    name: "Christopher Lee",
    title: "SHAREHOLDER",
    image: "/professional-man-with-glasses-beard.jpg",
  },
  {
    id: 10,
    name: "Amanda Garcia",
    title: "COUNSEL",
    image: "/professional-woman-smiling.png",
  },
  {
    id: 11,
    name: "Robert Martinez",
    title: "ASSOCIATE",
    image: "/professional-man-in-suit-blue-shirt.jpg",
  },
  {
    id: 12,
    name: "Victoria Taylor",
    title: "COUNSEL",
    image: "/professional-woman-in-yellow-blazer.jpg",
  },
];

export default function NewestAttorneys() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[62px] font-light mb-16 text-foreground">
          Meet some of our newest attorneys
        </h2>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newestAttorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="relative overflow-hidden bg-gray-100 aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredId(attorney.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={attorney.image || "/placeholder.svg"}
                alt={attorney.name}
                fill
                className="object-cover w-full h-full"
              />

              <div
                className={`absolute bottom-0 left-0 right-0 h-1/3 bg-[#B2292E] flex flex-col items-start justify-center p-10 transition-opacity duration-300 ${
                  hoveredId === attorney.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-[26px] text-base font-semibold leading-tight">
                  {attorney.name}
                </p>
                <p className="text-white text-[14px] font-light tracking-wider mt-1">
                  {attorney.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
