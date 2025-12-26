"use client";

import { div } from "framer-motion/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    id: "Diversity",
    title: "Diversity",
    description:
      "Polsinelli is a first-generation firm, young for our size and scope. We do not have 150 years of dusty tradition to maintain – or overcome. We're building something entirely new and different – a supportive, compassionate, diverse, and aggressively collaborative environment to enhance the experience both for clients and our people. We offer much more than Big Firm-caliber technical skills – we aspire to be what a law firm should be.",
    image: "/difference-promising-future.jpg",
  },
  {
    id: "Pro Bono",
    title: "Pro Bono",
    description:
      "We're focused on our core strengths—in practice, industry, and geography. We don't aspire to take over the world with far-flung global offices, we simply want to be the best all-around law firm in the U.S. Our coast-to-coast coverage provides a solid platform where clients can receive superior skills, service and value; and where top lawyers can concentrate fiercely on serving their clients and growing their practice.",
    image: "/difference-platform-growth.jpg",
  },
];

export default function OurValues() {
  return (
    <section className="py-16  bg-white">
      <div className="px-[100px] mx-auto">
        <h2 className="text-5xl font-light text-[#3a4248] mb-12">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[420px] overflow-hidden cursor-pointer group"
            >
              <div className="relative h-full group-hover:opacity-0 transition-opacity duration-300">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-light">{card.title}</h3>
                    <ChevronRight className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-[#b8252c] p-8 flex flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-3xl font-light mb-6 pb-6 border-b border-white/30">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
