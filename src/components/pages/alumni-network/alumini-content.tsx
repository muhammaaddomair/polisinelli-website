export default function AlumniSpotlight() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="py-12 bg-white px-[100px]">
        <div className=" mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Q&A Content */}

            <div className="lg:col-span-2 space-y-8">
              <section className=" py-12">
                <div className=" mx-auto  ">
                  <div className="">
                    <h2 className="text-[26px] font-bold text-gray-900 mb-6">
                      Polsinelli Alumni Network
                    </h2>
                    <p className="text -[20px] text-gray-700 leading-relaxed mb-6">
                      Polsinelli's growth and success is the direct result of
                      our talented and dedicated current and former attorneys.
                      Whether you passed through our doors recently or years
                      ago, we invite you to stay connected with your former
                      colleagues and friends through our Alumni Network.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The Polsinelli Alumni Network offers alumni access to
                      newsletters, e-alerts and invitations to upcoming webinars
                      and CLEs. Our objective is to provide you with valued
                      resources and opportunities and to keep you in the know
                      about firm ongoings.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-6">
                      Whether you are a recent or longtime alum, your
                      contributions are present at the firm. Thank you for
                      sharing your talents with us during your time at
                      Polsinelli.
                    </p>
                  </div>
                </div>
              </section>
              {/* Q1 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q: What is your favorite Polsinelli memory?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A: There are so many! But one that really stands out and was
                  really impactful and emotional for me was right after I got my
                  offer to be a first-year associate and they invited me to come
                  to the old annual Plaza Lights Party (which should totally be
                  brought back Chase!).
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Another great one for me is actually a few different ones
                  combined. Before I left for Milhaus, I left 2 other times to
                  pursue political positions. First it was 2008 and I left to go
                  join the Obama campaign. The second was to go to Mayor James'
                  office as Chief of Staff. You would think when a young
                  associate was leaving the firm would just wave goodbye, but
                  Russ and Chase were always so encouraging and said I always
                  had a home at Polsinelli. It really made me feel like family
                  and I've never forgotten that.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q: How did your time at Polsinelli prepare you for your
                  current job?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A: I always joked that we were developers for hire. Petersen,
                  Chase and Korb all stressed that we needed to learn our
                  client's business. Not just their legal issues. We did
                  proformas on deals. We helped solve issues with site plans. We
                  really were part of the development team and not just their
                  lawyer. While I had to learn some stuff when I came to
                  Milhaus, the foundation was securely built and the network of
                  people across the city and country from a business development
                  standpoint was in place.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q: What do you love or what challenges do you enjoy about your
                  job now?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A: I love the thrill of the hunt. Finding a new project,
                  getting it under control. Getting it through the City's
                  processes on zoning etc. It is all super exciting for me and
                  it all ties back to the skills I learned as a lawyer at
                  Polsinelli.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q: What do you enjoy doing outside of the office?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A: Well with 3 kids, most of my time these days are spent with
                  family. My 2 oldest are boys and are deep into sports so I sit
                  on a lot of sidelines and watch a lot of practices and games.
                  And I love it. Both are into baseball currently and though
                  it's hot and dusty, I won't miss a game if I can help it. Our
                  daughter is 2 now and trying to keep up with her brothers so I
                  have no doubt I'll be watching a lot of sports for the next
                  decade and a half!
                </p>
              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="lg:col-span-1 space-y-12">
              {/* Alumni Newsletter Card */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Alumni Newsletter
                </h2>
                <div className="bg-gray-200 rounded-sm overflow-hidden mb-6">
                  <img
                    src="/images/image.png"
                    alt="Polsinelli Alumni Connection"
                    className="w-full h-auto"
                  />
                </div>
                <a
                  href="#"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  Read the Newsletter
                </a>
              </div>

              {/* Subscribe Card */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Subscribe
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Stay informed about Polsinelli news, events and the latest
                  legal updates in your industry.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  Subscribe Now
                </a>
              </div>

              {/* Upcoming Events Card */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Stay on top of legal updates in your industry through our
                  webinars, CLE presentations, virtual summits and conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network Info Section */}
    </div>
  );
}
