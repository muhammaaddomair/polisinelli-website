import Image from "next/image";

export default function ResourceGroupsPage() {
  const resourceGroups = [
    "API@Polsinelli",
    "Latin Alliance",
    "LGBTQ+",
    "Polsinelli | Black",
    "Office-based Women's Empowerment Committees",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className=" mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Heading */}
            <h1 className="text-[40px] font-light text-slate-700">
              Resource Groups
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-[20px] leading-relaxed text-slate-700">
              In line with Polsinelli's longstanding commitment to our firm
              values and goals, which are to be the most welcoming and inclusive
              law firm in the country, Polsinelli has the following robust and
              active attorney resource groups:
            </p>

            {/* Resource Groups List */}
            <ul className="space-y-3 text-base text-slate-700">
              {resourceGroups.map((group, index) => (
                <li key={index}>{group}</li>
              ))}
            </ul>

            {/* Description Paragraph */}
            <p className="text-base leading-relaxed text-slate-700">
              Polsinelli's resource groups welcome all attorneys who identify as
              members of a historically marginalized community or would like to
              support that community as an ally. Our resource groups have
              regularly scheduled meetings but also meet as needed to address
              particular initiatives or to respond to events, both internal and
              external to Polsinelli. Our resource groups focus on the
              strengths, values and experiences of our colleagues, and gather to
              celebrate successes, discuss issues, and strategize on how they
              can build and support their community within Polsinelli.
            </p>
          </div>

          {/* Right Column - Contacts */}
          <div className="lg:col-span-5">
            <div className="border-b border-slate-200 pb-8 mb-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Contacts
              </h2>

              {/* Contact Card */}
              <div className="flex gap-6">
                {/* Contact Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/professional-headshot-man-with-glasses-and-green-t.jpg"
                    alt="Philip G. Hampton, II"
                    width={100}
                    height={130}
                    className="object-cover"
                  />
                </div>

                {/* Contact Information */}
                <div className="flex-1">
                  <h3 className="text-base font-medium text-slate-900 mb-1">
                    Philip G. Hampton, II
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">
                    Chief Diversity & Inclusion Officer
                  </p>
                  <p className="text-sm text-slate-700 mb-4">202.791.8792</p>
                  <a
                    href="mailto:phamptons@polsinelli.com"
                    className="text-red-700 hover:text-red-800 text-sm underline font-medium transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
