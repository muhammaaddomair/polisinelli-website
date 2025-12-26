"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Highlight {
  id: number;
  category: "PUBLICATION" | "NEWS";
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    category: "PUBLICATION",
    title: "CMS Indefinitely Suspends SNF Ownership Disclosure Deadline",
    description:
      "The Centers for Medicare & Medicaid Services (CMS) has issued updated sub-regulatory guidance.",
  },
  {
    id: 2,
    category: "NEWS",
    title:
      "Polsinelli Honored at USA M&A Atlas Awards for Leadership in Strategic, Consumer and ESOP Transactions",
    description:
      "Polsinelli is proud to announce that the firm has been recognized with three honors at the 2025 USA M&A Middle Market Atlas Awards.",
  },
  {
    id: 3,
    category: "PUBLICATION",
    title: "New Legal Developments in Healthcare Compliance",
    description:
      "Recent updates to healthcare regulations require immediate attention from all organizations in the industry.",
  },
  {
    id: 4,
    category: "NEWS",
    title: "Polsinelli Partners Recognized in National Legal Rankings",
    description:
      "Several of our senior partners have been recognized for their outstanding contributions to the legal field.",
  },
];

export default function FirmHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(highlights.length / 2)) %
        Math.ceil(highlights.length / 2)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(highlights.length / 2));
  };

  const leftHighlight = highlights[currentIndex * 2];
  const rightHighlight = highlights[currentIndex * 2 + 1];

  return (
    <section className="py-20 px-[100px] bg-white">
      <div className=" mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 style={{ fontSize: "62px" }} className="font-light text-gray-800">
            Firm Highlights
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8 divide-x divide-gray-300">
          {/* Left Column */}
          <div className="pr-8 flex flex-col justify-between min-h-96">
            {leftHighlight && (
              <>
                <div>
                  <p
                    style={{ fontSize: "14px" }}
                    className="font-semibold tracking-widest text-gray-600 mb-4"
                  >
                    {leftHighlight.category}
                  </p>
                  <h3
                    style={{ fontSize: "40px" }}
                    className="font-light mb-6 text-black hover:text-red-700 transition-colors cursor-pointer"
                  >
                    {leftHighlight.title}
                  </h3>
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-gray-700 leading-relaxed mb-8"
                  >
                    {leftHighlight.description}
                  </p>
                </div>
                <a
                  href="#"
                  style={{ fontSize: "20px" }}
                  className="text-red-600 underline hover:text-black transition-colors"
                >
                  Read more
                </a>
              </>
            )}
          </div>

          {/* Right Column */}
          <div className="pl-8 flex flex-col justify-between min-h-96">
            {rightHighlight && (
              <>
                <div>
                  <p
                    style={{ fontSize: "14px" }}
                    className="font-semibold tracking-widest text-gray-600 mb-4"
                  >
                    {rightHighlight.category}
                  </p>
                  <h3
                    style={{ fontSize: "40px" }}
                    className="font-light mb-6 text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    {rightHighlight.title}
                  </h3>
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-gray-700 leading-relaxed mb-8"
                  >
                    {rightHighlight.description}
                  </p>
                </div>
                <a
                  href="#"
                  style={{ fontSize: "20px" }}
                  className="text-red-600 underline hover:text-black transition-colors pt-[250px]"
                >
                  Read more
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
