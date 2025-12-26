export default function NewsTab() {
  const newsItems = [
    {
      id: 1,
      date: "October 01, 2025",
      category: "Awards & Recognitions",
      title: "Polsinelli Rises 20 Spots in Annual Law360 Women in Law Rankings",
    },
    {
      id: 2,
      date: "January 07, 2025",
      category: "Awards & Recognitions",
      title:
        "Polsinelli Earns Top Score on Human Rights Campaign Foundation's 2025 Corporate Equality Index",
    },
    {
      id: 3,
      date: "October 16, 2024",
      category: "Awards & Recognitions",
      title:
        "Polsinelli Recognized as a 2024 Top Performer by the Leadership Council on Legal Diversity",
    },
    {
      id: 5,
      date: "March 06, 2024",
      category: "News",
      title:
        "Three Polsinelli Attorneys Accepted into Leadership Council on Legal Diversity Development Programs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className=" mx-auto py-12">
        {/* News Heading */}
        <h1 className="text-[40px]  text-slate-900 mb-8">News</h1>

        {/* Divider */}
        <div className="border-b border-slate-200 mb-8"></div>

        {/* News Items */}
        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <div key={item.id}>
              <div className="py-8 px-0">
                {/* Date and Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[20px] text-slate-700">{item.date}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[20px] text-red-700 font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[40px] text-slate-700 leading-relaxed hover:text-red-500 transition-colors cursor-pointer">
                  {item.title}
                </h2>
              </div>

              {/* Divider between items */}
              {index < newsItems.length - 1 && (
                <div className="border-b border-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
