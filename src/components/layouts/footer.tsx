"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Logo from "../../../public/favicons/logo.png";
import {
  FooterNavLinks,
  FooterServicesLink,
} from "@/data/components.layouts-data";

function Footer() {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="layout-standard pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Solux Global"
              className="flex items-center gap-2"
            >
              <Image
                src={Logo}
                alt="Solux Global"
                width={70}
                className="h-auto"
                priority
              />
              <h1 className="leading-none lg:text-xl md:text-lg text-base font-semibold font-dm_sans text-primary-foreground">
                Solux Global
              </h1>
            </Link>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              IT Solutions and Managed Services Provider specializing in
              developing custom solutions for healthcare.
            </p>

            <div className="space-y-3 mt-2">
              <Link
                href={"tel:+13073109666"}
                className="flex gap-2 items-start group"
              >
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 group-hover:text-secondary">
                  +1 (307) 310 9666
                </p>
              </Link>

              <Link
                href="mailto:info@soluxglobal.com"
                className="flex gap-2 items-start group"
              >
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-sm text-white/80 group-hover:text-secondary">
                  info@soluxglobal.com
                </p>
              </Link>
            </div>

            <div className="flex gap-4 mt-5 flex-wrap">
              <Link
                href="/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 p-2.5 rounded transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/"
                target="_blank"
                className="bg-gray-600 hover:bg-gray-700 p-2.5 rounded transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 p-2.5 rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/"
                target="_blank"
                className="bg-pink-600 hover:bg-pink-700 p-2.5 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-dm_sans font-medium text-xl md:text-2xl">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {FooterNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm md:text-base flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-dm_sans font-medium text-xl md:text-2xl">
              Our Services
            </h3>

            <ul className="space-y-2">
              {FooterServicesLink.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm md:text-base flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-dm_sans font-medium text-xl md:text-2xl">
              Office Address
            </h3>

            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-secondary font-semibold mb-2 underline underline-offset-4">
                  USA
                </h4>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  30 N Gould St Ste R Sheridan <br /> WY 82801
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-4 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © Solux Global 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
