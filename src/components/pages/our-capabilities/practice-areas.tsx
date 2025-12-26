"use client";

import { useState } from "react";

const practiceAreas = {
  left: [
    "Bankruptcy & Restructuring",
    "Chemical Manufacturing",
    "Corporate & Transactional",
    "Employee Benefits & Executive Compensation",
    "Energy",
    "Environmental",
    "Executive Orders",
    "Family Owned Business",
    "Finance",
    "Food & Agriculture",
    "Global Franchise & Supply Network",
    "Government Contracts",
    "Government Investigations",
    "Health Care",
    "Insurance",
    "Intellectual Property",
    "International",
    "Investment Strategies & Capital Solutions",
    "Labor & Employment",
  ],
  right: [
    "Life Sciences",
    "Litigation",
    "Nonprofit Organizations",
    "Post Chevron Educational Resources & Updates",
    "Privacy & Cybersecurity",
    "Private Equity",
    "Public Policy",
    "Real Estate",
    "Real Estate Finance",
    "Securities & Corporate Finance",
    "Sports & Entertainment",
    "Tax",
    "Technology",
    "Technology Transactions",
    "Telecommunications",
    "Transportation & Logistics",
    "Trusts & Estates",
    "Venture Capital & Emerging Growth",
  ],
};

export default function PracticeAreas() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-0">
            {practiceAreas.left.map((area) => (
              <div
                key={area}
                onMouseEnter={() => setHoveredArea(area)}
                onMouseLeave={() => setHoveredArea(null)}
                className={`py-4 px-4 border-b border-gray-200 transition-colors cursor-pointer ${
                  hoveredArea === area
                    ? "bg-red-900 text-white"
                    : "text-foreground"
                }`}
              >
                <p className="text-[26px] font-normal">{area}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {practiceAreas.right.map((area) => (
              <div
                key={area}
                onMouseEnter={() => setHoveredArea(area)}
                onMouseLeave={() => setHoveredArea(null)}
                className={`py-4 px-4 border-b border-gray-200 transition-colors cursor-pointer ${
                  hoveredArea === area
                    ? "bg-red-900 text-white"
                    : "text-foreground"
                }`}
              >
                <p className="text-[26px] font-normal">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
