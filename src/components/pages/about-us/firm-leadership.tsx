export default function FirmLeadership() {
  const boardMembers = [
    {
      name: "Douglas K. Anning",
      title: "Shareholder",
      image: "/professional-portrait-man-glasses.jpg",
    },
    {
      name: "Jane E. Arnold",
      title: "Business Department Co-Chair",
      image: "/professional-portrait-woman-curly-hair.jpg",
    },
    {
      name: "Vivian C. Grigorians",
      title: "Real Estate Finance Vice Chair",
      image: "/professional-portrait-woman-blonde.jpg",
    },
    {
      name: "Amy Kiefer Hansen",
      title: "Shareholder",
      image: "/professional-portrait-woman-glasses.jpg",
    },
    {
      name: "Amy E. Hatch",
      title: "Financial Services Litigation Chair",
      image: "/professional-portrait-woman-long-hair.jpg",
    },
    {
      name: "Kolin B. Holladay",
      title: "Business Department Co-Chair",
      image: "/professional-portrait-man-red-tie.jpg",
    },
    {
      name: "Paul J. Jaskot",
      title: "Shareholder",
      image: "/professional-portrait-man-red-tie-gray.jpg",
    },
    {
      name: "Lisa S. Katz",
      title: "Shareholder",
      image: "/professional-portrait-woman-dark-hair.jpg",
    },
    {
      name: "Kraig M. Kohring",
      title: "Real Estate & Financial Services Department Chair",
      image: "/professional-portrait-man-suit.jpg",
    },
    {
      name: "Matthew J. Murer",
      title:
        "Health Care, Public Policy & Government Investigations Department Chair",
      image: "/professional-portrait-man-pink-tie.jpg",
      highlighted: true,
    },
    {
      name: "Farah S. Nicol",
      title: "Litigation Department Chair",
      image: "/professional-portrait-woman-dark-hair-blue.jpg",
    },
    {
      name: "John Peterson",
      title: "Office Managing Partner",
      image: "/professional-portrait-man-blue-tie.jpg",
    },
  ];

  return (
    <div className="w-full pr-[100px]">
      {/* Firm Leadership Intro */}
      <div className="pt-[100px] border-b border-gray-300">
        <h2 className="text-4xl font-light text-gray-800 mb-6">
          Firm Leadership
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Polsinelli is governed by an 18-member Board of Directors led by
          Chairman and CEO Chase Simmons. Our board consists of attorneys
          spanning two to 40 years of tenure at the firm to reflect the
          experiences and best practices of the leading Am Law firms at which
          board members previously practiced. The firm's day-to-day leadership
          is provided by Chase Simmons, along with the firm's seven department
          chairs.
        </p>
      </div>

      {/* Board of Directors Section */}
      <div className=" py-12">
        <h3 className="text-3xl font-light text-gray-800 mb-2">
          Board of Directors
        </h3>
        <div className="h-1 bg-gray-300 mb-10" />

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover bg-gray-200  mb-4 rounded-sm"
              />
              <h4
                className={`font-bold text-lg ${
                  member.highlighted
                    ? "text-gray-600 hover:text-red-600"
                    : "text-gray-800 hover:text-red-600"
                } mb-1`}
              >
                {member.name}
              </h4>
              <p className="text-sm text-gray-600 hover:text-red-600">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
