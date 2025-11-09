"use client";

import React from "react";
import { motion } from "framer-motion";

import { OurSpecialtiesSectionData } from "@/data/containers.pricing-page-data";

function PremiumSpecialtiesCompact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white section-padding-standard">
      <motion.div
        className="layout-standard"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-dm_sans font-bold text-center mb-12 text-gray-900"
        >
           <span className="text-blue-600">Specialties</span> We Serve
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {OurSpecialtiesSectionData.map((specialty, index) => {
            const Icon = specialty.icon;
            const iconColor = specialty.color || "blue-600"; // default color
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-300 shadow-lg"
              >
                {/* Background transition */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg transition-all duration-700 z-0"></div>
                <div className="absolute inset-0 before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:bg-blue-500 before:transition-[width] before:duration-700 z-10 group-hover:before:w-full"></div>

                {/* Card content */}
                <div className="relative flex flex-col items-center justify-center h-48 p-4 z-20">
                  {/* Front content: icon + title */}
                  <div className="flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                    <Icon className={`w-12 h-12 mb-2 text-${iconColor}`} />
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {specialty.title}
                    </h3>
                  </div>

                  {/* Back content: description */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <p className="text-white text-center text-base md:text-lg font-medium">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PremiumSpecialtiesCompact;
