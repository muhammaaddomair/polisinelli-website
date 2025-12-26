"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setInsightsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto px-[100px]">
        <div className="flex h-[100px] items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/favicons/logo-polsinelli.svg"
              alt="Polsinelli"
              className="h-[56px] w-auto"
            />
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex h-full flex-col justify-between py-3">
            {/* UTILITY MENU */}
            <nav
              aria-label="Utility Menu"
              className="flex justify-end gap-8 text-[13px] font-medium uppercase tracking-[0.15em] text-[#323E48]"
            >
              <button className="hover:text-[#B2292E] transition-colors">
                CONTACT US
              </button>
              <button className="hover:text-[#B2292E] transition-colors">
                CLIENT LOGIN
              </button>
              <button className="flex items-center gap-2 hover:text-[#B2292E] transition-colors">
                SEARCH <Search size={16} />
              </button>
            </nav>

            {/* MAIN NAV */}
            <nav
              aria-label="Header Menu"
              className="relative flex justify-end gap-12 text-[24px] font-normal text-[#323E48]"
            >
              <Link
                href="/people"
                className="hover:text-[#B2292E] transition-colors"
              >
                Our People
              </Link>

              <Link
                href="/capabilities"
                className="hover:text-[#B2292E] transition-colors"
              >
                Our Capabilities
              </Link>

              {/* OUR FIRM DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex items-center gap-2 hover:text-[#B2292E] transition-colors"
                >
                  Our Firm
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* DROPDOWN */}
                {open && (
                  <div className="fixed right-0 top-[100px] w-[320px] border border-[#D1D5DB] bg-white shadow-lg z-[100]">
                    <ul className="text-[18px] text-[#323E48]">
                      <DropdownItem label="About Us" />
                      <DropdownItem label="Alumni Network" />
                      <DropdownItem label="Careers" />

                      {/* INSIGHTS */}
                      <li className="border-t border-[#E5E7EB]">
                        <button
                          onClick={() => setInsightsOpen((prev) => !prev)}
                          className={`flex w-full items-center justify-between px-6 py-4 transition-colors ${
                            insightsOpen
                              ? "bg-[#B2292E] text-white"
                              : "hover:bg-[#B2292E] hover:text-white"
                          }`}
                        >
                          <span>Insights</span>
                          {insightsOpen ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>

                        {insightsOpen && (
                          <ul className="bg-[#B2292E] text-white">
                            {[
                              "News",
                              "Events",
                              "Publications",
                              "Blogs & Podcasts",
                            ].map((item) => (
                              <li
                                key={item}
                                className="border-t border-[#8B1F23] px-6 py-4 hover:bg-[#8B1F23] cursor-pointer transition-colors"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>

                      <DropdownItem label="Offices & Locations" />
                      <DropdownItem label="Our Diverse Culture" />
                    </ul>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Dropdown Item ---------------- */

function DropdownItem({ label }: { label: string }) {
  return (
    <li className="flex items-center justify-between border-t border-[#E5E7EB] px-6 py-4 cursor-pointer transition-colors hover:bg-[#B2292E] hover:text-white">
      <span>{label}</span>
    </li>
  );
}
