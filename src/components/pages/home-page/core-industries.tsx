"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";



const industries = [
  {
    name: "Health Care",
    image: "/images/healthcare-img.png",
  },
  {
    name: "Finance",
    image: "/financial-img.png",
  },
  {
    name: "Real Estate",
    image: "/images/realestate-img.jpg",
  },
  {
    name: "Technology",
    image: "/technology-img.png",
  },
  {
    name: "Private Equity",
    image: "/business-img.png",
  },
  {
    name: "Life Sciences",
    image: "/laboratory-img.png",
  },
];

export default function CoreIndustries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-[100px]">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[62px] font-light text-[#3d4449]">
            Core Industries
          </h2>
          <button className="px-8 py-3 border-2 border-[#a4343a] text-[#a4343a] text-[20px] hover:bg-[#a4343a] hover:text-white transition-colors">
            All Practices
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <a
              key={industry.name}
              href="#"
              className="relative h-[180px] overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background - solid color or image */}
              <div className="absolute inset-0 bg-[#3d4449] transition-opacity duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <h3 className="text-3xl font-light">{industry.name}</h3>
                <ChevronRight className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
