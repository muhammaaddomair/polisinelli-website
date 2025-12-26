export default function StaffRecruitement() {
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
                    <h2 className="text-[40px] font-medium text-gray-900 mb-6">
                      Staff Recruiting
                    </h2>
                    <div className="text-[20px]  pb-10 pt-5 font-black">
                      <p>We believe in our people.</p>
                    </div>
                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6 font-black">
                      To be truly exceptional, a firm must attract, train,
                      retain, and promote extraordinary professionals at all
                      levels.
                    </p>

                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6 font-black">
                      Are you interested in joining a firm where you can make a
                      meaningful contribution as a valued member of the team?
                    </p>

                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
                      We believe that a law firm is only as strong as its team
                      members. At Polsinelli, we’ve built a firm by recruiting
                      and retaining talented professionals who exemplify our
                      values, work ethic, and dedication.
                    </p>
                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
                      At Polsinelli, we’re all on the same team, serving and
                      supporting each other and our clients. Whether you’re
                      starting out in your career or just needing a change,
                      we’re always looking for highly dedicated and motivated
                      professionals. From analysts to business development, from
                      accounting to paralegals, hospitality, and IT, our valued
                      staff joins us nationwide from countless industries and
                      experiences.
                    </p>
                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
                      Every person receives regular training and advancement
                      opportunities. We invest in our people across all
                      positions and experience levels, to help them identify,
                      prepare for, and achieve their career goals.
                    </p>
                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
                      The firm has grown significantly over the years, but we’ve
                      truly grown together. Our collaborative nature means we
                      act together as one, across all offices. We remain
                      committed to creating a culture of diversity and
                      acceptance, both celebrating individual contributions and
                      looking for ways to expand on our solid foundation, built
                      on mutual respect and inclusivity because that’s what a
                      law firm should be.
                    </p>
                    <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
                      If you would like to join our growing team, please contact
                      us to start a conversation about your next career move. If
                      this sounds like the right fit for you, we look forward to
                      hearing from you!
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebars */}
            <div className="lg:col-span-1 space-y-12">
              {/* Alumni Newsletter Card */}

              {/* Subscribe Card */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-[24px] font-bold text-gray-900 mb-4">
                  Employment Inquiries
                </h2>
                {/* DIVIDER */}
                <div className="h-[1px]  bg-[#d1d5db]" />
                <p className="text-gray-700 leading-relaxed text-[20px] mb-6 pt-5">
                  Marcie McGinness <br />
                  Corporate Recruiting Manager <br />
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold text-[20px] hover:underline"
                >
                  Email
                </a>
              </div>

              {/* Upcoming Events Card */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-[24px] font-bold text-gray-900 mb-4">
                  Apply Online
                </h2>
                {/* DIVIDER */}
                <div className="h-[1px]  bg-[#d1d5db]" />
                <p className="text-gray-700 leading-relaxed text-[20px] mb-6 pt-5">
                  Find available opportunities that best fit your talents and
                  career goals.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold text-[20px] hover:underline"
                >
                  Email
                </a>
              </div>
              <div>
                <h2 className="text-[24px] font-bold text-gray-900 mb-6">
                  National Recognition
                </h2>
                {/* DIVIDER */}
                <div className="h-[1px]  bg-[#d1d5db]" />
                <div className="bg-gray-200 rounded-sm overflow-hidden mb-6 pt-5">
                  <img
                    src="/images/image.png"
                    alt="Polsinelli Alumni Connection"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-gray-200 rounded-sm overflow-hidden mb-6">
                  <img
                    src="/images/image.png"
                    alt="Polsinelli Alumni Connection"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-8 lg:gap-16">
            {/* Quote Content */}
            <div className="flex-1">
              <p className="text-gray-800 text-lg leading-relaxed mb-6 font-light">
                I'm a "born and raised" Polsinelli attorney. I joined the firm
                right after law school, and from that first day, I have been
                encouraged to take risks and explore opportunities. Every day is
                new and exciting. I can't imagine myself anywhere else. I have
                never felt limited, and the firm has supported me at every step.
                That's what a law firm should be.
              </p>
              <p className="text-gray-700 text-sm font-medium">
                — Gregory M. Kratofil, Jr., Co-Office Managing Partner |
                Practice Chair
              </p>
            </div>

            {/* Headshot Image */}
            <div className="flex-shrink-0 hidden lg:block">
              <img
                src="/professional-man-headshot.png"
                alt="Gregory M. Kratofil, Jr."
                className="w-64 h-80 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
