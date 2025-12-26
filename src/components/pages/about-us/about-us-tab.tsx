"use client";

import { useState } from "react";
import FirmOverviewContent from "./firm-tab";
import FirmHighlights from "@/components/partials/firm-highlights";
import { div } from "framer-motion/client";
import OurValues from "@/components/partials/our-values";
import Accolades from "./accolades";
import ProBonoContent from "./pro-bono";
import FirmLeadership from "./firm-leadership";

const tabs = [
  { id: "overview", label: "Firm Overview" },
  { id: "accolades", label: "Accolades" },
  { id: "probono", label: "Pro Bono" },
  { id: "leadership", label: "Firm Leadership" },
];

export default function AboutUsTabSection() {
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
            <div className="p-[50px]">
              <FirmOverviewContent />
            </div>
            <div>
              <OurValues />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1200px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "accolades" && (
          <div>
            <div className="p-[100px] ">
              <Accolades />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1200px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "probono" && (
          <div >
            <div className="p-100px">
                <ProBonoContent />
            </div>
          </div>
        )}
        {activeTab === "leadership" && (
          <div className="pl-[100px] ">
            <FirmLeadership />
          </div>
        )}
      </div>
      <FirmHighlights />
    </div>
  );
}
