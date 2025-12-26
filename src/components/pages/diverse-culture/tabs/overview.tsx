export default function CultureOverview() {
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
                    <p className="text-[26px] text-gray-700 leading-relaxed mb-6">
                      Many firms talk about their diversity aspirations. At
                      Polsinelli, we have seen how creating the most welcoming
                      and inclusive law firm environment produces results. We
                      ask the hard questions and seek answers through novel and
                      often counterintuitive approaches. This has caused us to
                      explore new methods for mentoring and training and rethink
                      how we recruit and retain talent. Our willingness to
                      deviate from the mainstream allows us to stand out in a
                      competitive market for top talent.
                    </p>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                      <div className="flex items-center gap-8 lg:gap-16">
                        {/* Quote Content */}
                        <div className="flex-1">
                          <p className="text-gray-800 text-lg leading-relaxed mb-6 font-light">
                            I'm a "born and raised" Polsinelli attorney. I
                            joined the firm right after law school, and from
                            that first day, I have been encouraged to take risks
                            and explore opportunities. Every day is new and
                            exciting. I can't imagine myself anywhere else. I
                            have never felt limited, and the firm has supported
                            me at every step. That's what a law firm should be.
                          </p>
                          <p className="text-gray-700 text-sm font-medium">
                            — Gregory M. Kratofil, Jr., Co-Office Managing
                            Partner | Practice Chair
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
                    <p className="text-[20px] text-gray-700 leading-relaxed">
                      While some believe that the issues surrounding diversity
                      are intractable, at Polsinelli, we know that through
                      commitment, determination, and focus, we will successfully
                      achieve a true workplace that celebrates each of our
                      unique backgrounds. That is why we use objective data to
                      improve how, when, and where we recruit attorneys and
                      assemble pitch and client-service teams. And while data
                      can be used to determine whether junior attorneys are
                      receiving equivalent training opportunities, we also
                      dedicate award-winning resources to ensure personal
                      connectivity across the firm so that each of us feels a
                      true sense of belonging within the Polsinelli family.
                    </p>
                    <p className="text-[20px] text-gray-700 leading-relaxed mt-6">
                      Polsinelli’s goal is for every individual to feel
                      supported regardless of what position they hold. We are
                      not trying to create a homogenous workplace. Rather, we
                      are creating an environment where every employee retains
                      their unique character and persona to contribute to the
                      greater team. Our different perspectives, backgrounds, and
                      experiences heighten our ability to serve both our
                      internal and external clients. Because we continuously
                      challenge here-to-before accepted thinking and actions
                      surrounding diversity, we are what a law firm should be.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebars */}
            <div className="lg:col-span-1 space-y-12 ">
              {/* Alumni Newsletter Card */}
              <div className="border-t border-gray-200 pt-8 ">
                <h2 className="text-[24px] font-bold text-gray-900 mb-4">
                  News
                </h2>
                {/* DIVIDER */}
                <div className="h-[1px]  bg-[#d1d5db] mb-4" />
                <p className="mb-4 text-[20px] hover:text-red-500">
                  Polsinelli Rises 20 Spots in Annual Law360 Women in Law
                  Rankings
                </p>
                <div className="h-[1px]  bg-[#d1d5db] mb-4 " />
                <p className="mb-4 text-[20px] hover:text-red-500">
                  Polsinelli Earns Top Score on Human Rights Campaign
                  Foundation’s 2025 Corporate Equality Index
                </p>
                <div className="h-[1px]  bg-[#d1d5db] mb-4" />
                <p className="mb-4 text-[20px] hover:text-red-500">
                  Polsinelli Recognized as a 2024 Top Performer by the
                  Leadership Council on Legal Diversity
                </p>
                <div className="h-[1px]  bg-[#d1d5db] mb-4" />
                <a className="text-[20px] text-red-500 hover:text-black underline" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
