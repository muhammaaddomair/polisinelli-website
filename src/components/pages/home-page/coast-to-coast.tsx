"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------------- Types ---------------- */

type LocationType = "office" | "location";

interface Location {
  name: string;
  type: LocationType;
  address: string;
  city: string;
  state: string;
  zip: string;
  coordinates: { x: number; y: number };
}

/* ---------------- Data ---------------- */

const locations: Location[] = [
  {
    name: "Atlanta",
    type: "office",
    address: "1201 W. Peachtree Street NW, Suite 2300",
    city: "Atlanta",
    state: "GA",
    zip: "30309",
    coordinates: { x: 72, y: 62 },
  },
  {
    name: "Birmingham",
    type: "office",
    address: "2100 Third Avenue North, Suite 1050",
    city: "Birmingham",
    state: "AL",
    zip: "35203",
    coordinates: { x: 68, y: 64 },
  },
  {
    name: "Boston",
    type: "office",
    address: "600 Atlantic Avenue, 22nd Floor",
    city: "Boston",
    state: "MA",
    zip: "02210",
    coordinates: { x: 92, y: 28 },
  },
  {
    name: "Charleston",
    type: "office",
    address: "34 S. Battery Street",
    city: "Charleston",
    state: "SC",
    zip: "29401",
    coordinates: { x: 78, y: 62 },
  },
  {
    name: "Chattanooga",
    type: "office",
    address: "1000 Tallan Building, Two Union Square",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
    coordinates: { x: 70, y: 58 },
  },
  {
    name: "Chicago",
    type: "office",
    address: "161 N. Clark Street, Suite 4200",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    coordinates: { x: 68, y: 42 },
  },
  {
    name: "Dallas",
    type: "office",
    address: "2950 North Harwood Street, Suite 2100",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    coordinates: { x: 50, y: 65 },
  },
  {
    name: "Denver",
    type: "office",
    address: "1401 Lawrence Street, Suite 2300",
    city: "Denver",
    state: "CO",
    zip: "80202",
    coordinates: { x: 35, y: 45 },
  },
  {
    name: "Fort Lauderdale",
    type: "office",
    address: "350 E. Las Olas Boulevard, Suite 1100",
    city: "Fort Lauderdale",
    state: "FL",
    zip: "33301",
    coordinates: { x: 78, y: 84 },
  },
  {
    name: "Fort Worth",
    type: "office",
    address: "777 Main Street, Suite 3800",
    city: "Fort Worth",
    state: "TX",
    zip: "76102",
    coordinates: { x: 49, y: 66 },
  },
  {
    name: "Houston",
    type: "office",
    address: "600 Travis Street, Suite 3700",
    city: "Houston",
    state: "TX",
    zip: "77002",
    coordinates: { x: 52, y: 72 },
  },
  {
    name: "Kansas City",
    type: "office",
    address: "900 W 48th Place, Suite 900",
    city: "Kansas City",
    state: "MO",
    zip: "64112",
    coordinates: { x: 52, y: 47 },
  },
  {
    name: "Los Angeles",
    type: "office",
    address: "2029 Century Park East, Suite 3200",
    city: "Los Angeles",
    state: "CA",
    zip: "90067",
    coordinates: { x: 15, y: 56 },
  },
  {
    name: "Miami",
    type: "office",
    address: "600 Brickell Avenue, Suite 3700",
    city: "Miami",
    state: "FL",
    zip: "33131",
    coordinates: { x: 79, y: 87 },
  },
  {
    name: "Nashville",
    type: "office",
    address: "424 Church Street, Suite 2900",
    city: "Nashville",
    state: "TN",
    zip: "37219",
    coordinates: { x: 67, y: 55 },
  },
  {
    name: "New York",
    type: "office",
    address: "600 Third Avenue, 42nd Floor",
    city: "New York",
    state: "NY",
    zip: "10016",
    coordinates: { x: 90, y: 32 },
  },
  {
    name: "Park City",
    type: "location",
    address: "2825 E. Cottonwood Parkway, Suite 500",
    city: "Salt Lake City",
    state: "UT",
    zip: "84121",
    coordinates: { x: 30, y: 42 },
  },
  {
    name: "Philadelphia",
    type: "office",
    address: "1735 Market Street, Suite 1700",
    city: "Philadelphia",
    state: "PA",
    zip: "19103",
    coordinates: { x: 87, y: 38 },
  },
  {
    name: "Phoenix",
    type: "office",
    address: "2800 N. Central Avenue, Suite 2500",
    city: "Phoenix",
    state: "AZ",
    zip: "85004",
    coordinates: { x: 23, y: 62 },
  },
  {
    name: "Raleigh",
    type: "office",
    address: "301 Fayetteville Street, Suite 1900",
    city: "Raleigh",
    state: "NC",
    zip: "27601",
    coordinates: { x: 82, y: 56 },
  },
  {
    name: "Salt Lake City",
    type: "location",
    address: "2825 E. Cottonwood Parkway, Suite 500",
    city: "Salt Lake City",
    state: "UT",
    zip: "84121",
    coordinates: { x: 30, y: 42 },
  },
  {
    name: "San Diego",
    type: "office",
    address: "501 West Broadway, Suite 1100",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    coordinates: { x: 16, y: 64 },
  },
  {
    name: "San Francisco",
    type: "office",
    address: "601 Montgomery Street, Suite 2000",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    coordinates: { x: 12, y: 48 },
  },
  {
    name: "Seattle",
    type: "office",
    address: "999 Third Avenue, Suite 4600",
    city: "Seattle",
    state: "WA",
    zip: "98104",
    coordinates: { x: 13, y: 22 },
  },
  {
    name: "St. Louis",
    type: "office",
    address: "100 S 4th Street, Suite 1000",
    city: "St. Louis",
    state: "MO",
    zip: "63102",
    coordinates: { x: 60, y: 50 },
  },
  {
    name: "Washington, D.C.",
    type: "office",
    address: "2001 K Street NW, Suite 600",
    city: "Washington",
    state: "DC",
    zip: "20006",
    coordinates: { x: 85, y: 47 },
  },
  {
    name: "Wilmington",
    type: "office",
    address: "222 Delaware Avenue, Suite 1101",
    city: "Wilmington",
    state: "DE",
    zip: "19801",
    coordinates: { x: 86, y: 43 },
  },
];

/* ---------------- Component ---------------- */

export default function CoastToCoast() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>("Salt Lake City");

  const current = hovered ?? active;

  const left = locations.slice(0, 14);
  const right = locations.slice(14);

  const activeLocation = locations.find((l) => l.name === current);

  return (
    <section className="bg-gray-100 py-16 px-[100px]">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[62px] font-light text-gray-700">
            Coast to Coast
          </h2>

          <div className="flex items-center gap-8 text-sm text-gray-700">
            <Legend color="#a4343a" label="Denotes office" />
            <Legend color="#374151" label="Denotes location" />
          </div>
        </div>

        <div className="border-b border-gray-300 my-8" />

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {/* Cities */}
          <div className="grid grid-cols-2 gap-x-8 ">
            <CityColumn
              locations={left}
              current={current}
              setHovered={setHovered}
              setActive={setActive}
            />
            <CityColumn
              locations={right}
              current={current}
              setHovered={setHovered}
              setActive={setActive}
              bordered
            />
          </div>

          {/* Map */}
          <div className="lg:col-span-2 relative h-[460px]">
            <Image
              src="/images/image.png"
              alt="US Map"
              fill
              className="object-contain"
            />

            {locations.map((loc) => {
              const isActive = loc.name === current;
              const color = loc.type === "office" ? "#a4343a" : "#374151";

              return (
                <div
                  key={loc.name}
                  className="absolute"
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {isActive ? (
                    <div className="relative">
                      <div className="w-6 h-6 bg-[#a4343a] rounded-full absolute -top-2 left-1/2 -translate-x-1/2" />
                      <div className="w-4 h-4 bg-white rounded-full absolute -top-1 left-1/2 -translate-x-1/2" />
                      <div className="w-3 h-3 bg-[#a4343a] rotate-45 absolute top-3 left-1/2 -translate-x-1/2" />
                    </div>
                  ) : (
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Details */}
        {activeLocation && (
          <>
            <div className="border-b border-gray-300 my-10" />
            <h3 className="text-4xl font-light text-gray-800 mb-4">
              {activeLocation.name}
            </h3>
            <p className="text-gray-700 text-lg">
              {activeLocation.address}
              <br />
              {activeLocation.city}, {activeLocation.state} {activeLocation.zip}
            </p>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------- Helpers ---------------- */

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
  );
}

function CityColumn({
  locations,
  current,
  setHovered,
  setActive,
  bordered = false,
}: any) {
  return (
    <div
      className={`space-y-1 ${bordered ? "border-l border-gray-300 pl-8" : ""}`}
    >
      {locations.map((loc: Location) => {
        const isActive = current === loc.name;

        return (
          <button
            key={loc.name}
            onMouseEnter={() => setHovered(loc.name)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActive(loc.name)}
            className="block w-full text-left whitespace-nowrap"
          >
            <span
              className={`
                inline-block
                text-[20px]
                transition-all
                duration-200
                ease-out
                ${
                  isActive
                    ? "text-gray-700 translate-x-[10px]"
                    : "text-[#a4343a] translate-x-0"
                }
              `}
            >
              {loc.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}


