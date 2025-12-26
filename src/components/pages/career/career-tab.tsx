"use client";

import { useState } from "react";

import FirmHighlights from "@/components/partials/firm-highlights";
import { div } from "framer-motion/client";
import OurValues from "@/components/partials/our-values";
import CareerFirmOverviewTab from "./tabs/career-firmoverview-tab";
import LawStudentRecruitement from "./tabs/law-student-recruitement";
import AssociativeRecruitement from "./tabs/associate-recruiting";
import { IntegrationCollaboration } from "./tabs/integration-tab";
import StaffRecruitement from "./tabs/staff-recruitement";
import ApplyPage from "./tabs/apply-tab";


const tabs = [
  { id: "overview", label: "Firm Overview" },
  { id: "Law Student Recruiting", label: "Law Student Recruiting" },
  { id: "Associate Recruiting", label: "Associate Recruiting" },
  { id: "Integration", label: "Integration" },
  { id: "Staff Recruiting", label: "Staff Recruiting" },
  { id: "Apply", label: "Apply" },
];

export default function CareerSection() {
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
            <div>
              <CareerFirmOverviewTab />
            </div>
            <div>
              <OurValues />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "Law Student Recruiting" && (
          <div>
            <div className=" ">
              <LawStudentRecruitement />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "Associate Recruiting" && (
          <div>
            <div className="p-100px">
              <AssociativeRecruitement />
            </div>
            {/* DIVIDER */}
            <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
          </div>
        )}
        {activeTab === "Integration" && (
          <div className="pl-[100px] ">
            <div>
              <div className="">
                <IntegrationCollaboration />
              </div>
              {/* DIVIDER */}
              <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
            </div>
          </div>
        )}
        {activeTab === "Staff Recruiting" && (
          <div className="">
            <div>
              <div className="">
                <StaffRecruitement />
              </div>
              {/* DIVIDER */}
              <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
            </div>
          </div>
        )}
        {activeTab === "Apply" && (
          <div className="px-[100px]">
            <div className="">
              <div>
                <div className="">
                  <ApplyPage />
                </div>
                {/* DIVIDER */}
                <div className="h-[1px] w-[1550px]  mx-auto bg-[#d1d5db]" />
              </div>
            </div>
          </div>
        )}
      </div>
      <FirmHighlights />
    </div>
  );
}
