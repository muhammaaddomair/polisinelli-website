"use client";

import { useState } from "react";
import FirmHighlights from "@/components/partials/firm-highlights";
import { div } from "framer-motion/client";
import OurValues from "@/components/partials/our-values";
import CultureOverview from "./tabs/overview";
import NewsTab from "./tabs/news";
import ResourceGroupsPage from "./tabs/resource";
import TestimonialTabSection from "./tabs/testimonial";


const tabs = [
  { id: "overview", label: "Firm Overview" },
  { id: "news", label: "News" },
  { id: "resource", label: "Resource Groups" },
  { id: "testimonials", label: "Testimonials" },
];

export default function CultureTabSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full  bg-red-600">
      <div className="flex pl-[70px] text-[20px] border-b-4 border-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` md:px-8 py-4 text-lg font-medium transition-all ${
              activeTab === tab.id
                ? "bg-red-700 text-white border-b-4 border-white"
                : "text-white hover:bg-white hover:text-red-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className=" bg-white">
        {activeTab === "overview" && (
          <div>
            <div className="">
              <CultureOverview />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1500px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "news" && (
          <div>
            <div className="px-[100px] ">
              <NewsTab />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1500px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "resource" && (
          <div>
            <div className="px-[100px]">
              <ResourceGroupsPage />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1500px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "testimonials" && (
          <div className=" ">
            <div>
              <div className="px-[100px]">
                <TestimonialTabSection />
              </div>
              {/* DIVIDER */}
              <div className="h-[1px] w-[1500px]  mx-auto bg-[#d1d5db]" />
            </div>
          </div>
        )}
      </div>
      <FirmHighlights />
    </div>
  );
}
