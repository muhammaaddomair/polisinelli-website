"use client";

import { useState } from "react";

const accoladesData = [
  {
    category: "BTI Legal Research",
    items: [
      "Recognized as a Client Service Trailblazer in BTI's Client Service A-Team Report (2025)",
      "Recognized by BTI among the Most Recommended Law Firms for the Pharma Industry (2025)",
      "Recognized by BTI among Law Firms Best at Meeting Novel, New, and Strategic Needs (2024)",
      "Named to BTI's Leading Edge Law Firms list (2024)",
      "Recognized by BTI among Law Firms Distinguished in Innovative Approach (2023)",
      "Named to BTI's Client Service 100 list (2023)",
    ],
  },
  {
    category: "Innovation",
    items: [
      "Innovative Firm of the Year: North America by IFLR (2025)",
      "Emerging Technology Firm of the Year: North America by IFLR (2025)",
      "BTI Law Firm Innovation Icons (2025)",
      "Best Legal Innovation by ALM's Southeastern Legal Awards (2025)",
      "Finalist for Firm Innovation at the New York Legal Awards (2025)",
    ],
  },
  {
    category: "Best Lawyers® & Best Law Firms® National Recognition",
    description:
      "A leading legal industry rankings organization that determines placement based on an evaluation process that includes client and lawyer evaluations",
    hasLogo: true,
  },
  {
    category: "BTI Litigation Outlook",
    items: [
      '"Distinguished" in Intellectual Property Litigation (2026)',
      '"Standout" in Class Action (2026)',
      '"Standout" in Commercial Litigation (2026)',
      '"Standout" in Complex Commercial Litigation (2026)',
      '"Standout" in Cybersecurity Litigation (2026)',
      '"Standout" in Product Liability Litigation (2026)',
    ],
  },
  {
    category: "The Legal 500",
    description:
      "Nationally recognized in Healthcare: Service Providers, Immigration, Real Estate and M&A: Middle Market.",
    hasReadMore: true,
  },
  {
    category: "Corporate Equality Index (CEI)",
    description:
      "Polsinelli has been recognized by the Human Rights Campaign Foundation's Corporate Equality Index (CEI) for LGBTQ+ workplace equality.",
    hasLogo: true,
  },
  {
    category: "Mansfield Rule Certification Plus",
    description:
      'Polsinelli achieved Diversity Lab\'s "Mansfield Rule 8.0 Certification Plus," which measures diversity in law firms.',
    hasLogo: true,
  },
  {
    category: "Patexia",
    description:
      'Polsinelli was ranked in Patexia\'s Patent Litigation 2024 Intelligence Report as one of the "most active" and "best performing" law firms in the country for patent litigation.',
    hasReadMore: true,
  },
  {
    category: "Leadership Council on Legal Diversity",
    description:
      "Polsinelli has been named a 2024 Top Performer by Leadership Council on Legal Diversity, which recognizes law firms and corporations that show a strong commitment to building a more inclusive legal profession.",
    hasLogo: true,
  },
  {
    category: "The American Lawyer",
    description:
      "Polsinelli is an Am Law 100 firm. The firm is ranked #59 in the Am Law 100 annual law firm ranking. (April 2025)",
  },
  {
    category: "Chambers and Partners National Recognition",
    description:
      "America's Leading Lawyers for Business®: A leading legal industry rankings organization that determines placement based largely on client feedback.",
    hasReadMore: true,
  },
  {
    category: "American Health Law Association (AHLA)",
    items: [
      "Ranked as the largest health care law firm in the nation by AHLA, 2018, 2021-2022",
      "Ranked as the second-largest health care law firm in the nation by AHLA, 2016, 2017, 2019, 2020, 2023",
    ],
  },
  {
    category: "Law360",
    description:
      'Ranked #29 by Law360 for total attorneys among the "400 Largest U.S. Law Firms." (June 2025)',
    hasReadMore: true,
  },
  {
    category: "Benchmark Litigation",
    description:
      'Reflecting the firm\'s commitment to litigation excellence, Benchmark Litigation recognizes Polsinelli nationally and regionally. Our Litigation practice ranks "Highly Recommended" in Missouri and "Recommended" in Arizona, Georgia and Illinois. We have 26 litigators named "Litigation Stars" and six "Future Stars" for 2026. (October 2025)',
    hasLogo: true,
  },
];

export default function Accolades() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleReadMore = (category: string) => {
    setExpandedSections((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="">
      <h1 className="text-4xl font-light text-gray-800 mb-12">Accolades</h1>

      {accoladesData.map((accolade, index) => (
        <div key={index} className="mb-12">
          {/* Section Header */}
          <h2 className="text-2xl font-light text-gray-800 mb-4">
            {accolade.category}
          </h2>

          {/* Section Content */}
          {accolade.items && accolade.items.length > 0 ? (
            <ul className="space-y-3 mb-8">
              {accolade.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-4">
                  <span className="text-red-600 font-bold mt-1 flex-shrink-0">
                    ▪
                  </span>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : accolade.description ? (
            <div className="mb-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                {accolade.description}
              </p>
              {accolade.hasReadMore && (
                <button
                  onClick={() => toggleReadMore(accolade.category)}
                  className="text-red-600 font-medium mt-3 hover:underline flex items-center gap-2"
                >
                  Read More
                  <span
                    className={`transition-transform ${
                      expandedSections.includes(accolade.category)
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              )}
              {expandedSections.includes(accolade.category) && (
                <div className="mt-4 p-4 bg-gray-50 rounded text-gray-700">
                  Additional details about {accolade.category} can be expanded
                  here.
                </div>
              )}
            </div>
          ) : null}

          {/* Divider */}
          {index < accoladesData.length - 1 && (
            <hr className="my-8 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}
