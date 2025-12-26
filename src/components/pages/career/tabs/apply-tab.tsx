export const metadata = {
  title: "Apply - Polsinelli",
  description:
    "Join our team at Polsinelli. Explore attorney and staff position opportunities.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="  py-16">
        {/* Heading */}
        <h1 className="text-5xl font-light text-slate-500 mb-12">Apply</h1>

        {/* Intro */}
        <p className="text-lg italic text-slate-700 mb-8">
          Thank you for your interest in Polsinelli.
        </p>

        {/* Body paragraphs */}
        <div className="space-y-6 text-slate-700 mb-12">
          <p className="text-base leading-relaxed">
            Our employees are integral to the firm's success.
          </p>

          <p className="text-base leading-relaxed">
            Every employee contributes to the superior service we provide our
            clients. Our team atmosphere is fostered by absolutely{" "}
            <span className="italic">everyone</span> across the firm. It's baked
            into the culture; it's part of our firm's DNA.
          </p>

          <p className="text-base leading-relaxed">
            Our enthusiastic commitment to teamwork enables us to seamlessly
            pull resources from across the firm, in all our industries and
            practice areas. This ensures that we can effortlessly meet each
            client's unique needs.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-6 pt-6">
          <a
            href="#attorney-openings"
            className="px-12 py-4 border-2 border-red-600 text-red-600 font-medium hover:bg-red-50 transition-colors"
          >
            Attorney Openings
          </a>
          <a
            href="#staff-openings"
            className="px-12 py-4 border-2 border-red-600 text-red-600 font-medium hover:bg-red-50 transition-colors"
          >
            Staff Openings
          </a>
        </div>
      </div>
    </main>
  );
}
