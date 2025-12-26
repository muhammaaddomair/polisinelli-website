"use client";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3b434a] text-white">
      <div className="px-[100px] py-[72px]">
        <div className="flex items-start justify-between">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between min-h-[300px]">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                aria-label="LinkedIn"
                href="#"
                className="opacity-90 hover:opacity-100"
              >
                <Linkedin size={22} />
              </a>
              <a
                aria-label="X"
                href="#"
                className="opacity-90 hover:opacity-100"
              >
                <Twitter size={22} />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="opacity-90 hover:opacity-100"
              >
                <Facebook size={22} />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="opacity-90 hover:opacity-100"
              >
                <Instagram size={22} />
              </a>
            </div>

            {/* Copyright */}
            <div className=" text-[16px] leading-relaxed opacity-90">
              <p>© 2025 Polsinelli. Attorney Advertising.</p>
              <p>Prior results do not guarantee a similar outcome.</p>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <nav className="flex flex-col gap-4 text-[18px] leading-tight">
            <a href="#" className="underline underline-offset-4">
              Contact Us
            </a>
            <a href="#" className="underline underline-offset-4">
              Subscribe
            </a>
            <a href="#" className="underline underline-offset-4">
              Alumni Network
            </a>
            <a href="#" className="underline underline-offset-4">
              Collaborate Polsinelli
            </a>
            <a href="#" className="underline underline-offset-4">
              Client Payment Portal
            </a>
            <a href="#" className="underline underline-offset-4">
              Disclaimer
            </a>
            <a href="#" className="underline underline-offset-4">
              Cookie Preferences
            </a>
            <a href="#" className="underline underline-offset-4">
              Privacy Notice
            </a>
          </nav>

          {/* RIGHT COLUMN */}
          <div>
            <button className="border border-white px-10 py-4 text-[18px] tracking-wide hover:bg-white hover:text-[#3b434a] transition-colors">
              Client Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
