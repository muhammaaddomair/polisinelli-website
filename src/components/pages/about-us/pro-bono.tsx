export default function ProBonoContent() {
  return (
    <div className="p-[100px] ">
      {/* Introduction Section */}
      {/* Main Pro Bono Philosophy Section */}
      <h2 className="text-[40px] font-light text-gray-800 mb-8">Pro Bono</h2>

      <div className="space-y-6 text-gray-800 text-base leading-relaxed">
        <p>
          Law firms are in a unique position when it comes to helping those in
          need. At Polsinelli, we approach our pro bono efforts with the same
          dedication and drive that we do our client work, applying our skills
          and resources to assisting individuals, organizations and causes
          throughout our communities. We're not passionate about pro bono
          because we have to be; we value this work because it's an extension of
          our value system and exemplifies what a law firm should be.
        </p>

        <p>
          And, because our pro bono work deserves the same standard of
          excellence that we apply to other matters, we staff our cases
          accordingly and provide the training necessary for attorneys
          inexperienced in certain matters to feel confident taking them on.
          Whether guiding clients through immigration proceedings, negotiating
          real estate deals for budding entrepreneurs or fighting for the rights
          of the veterans or the disabled, our teams are supported and
          encouraged to take on pro bono matters as part of their practice.
        </p>

        <p>
          In fact, Polsinelli devotes a stand-alone pro bono committee to each
          practice area and office, ensuring swift approvals of vital projects,
          and our lawyers receive billable-hour credit for pro bono efforts. In
          2020, our firm worked on over 640 pro bono matters in a broad range of
          areas, including{" "}
          <span className="text-red-600 font-medium">habeas proceedings</span>,
          claims for asylum on behalf of a transgender client, and{" "}
          <span className="text-red-600 font-medium">amicus filings</span>{" "}
          relating to a 6th Amendment ruling by the Supreme Court. Alongside
          high-profile cases like these, we represent victims of domestic
          violence who simply want to feel safe, kids who have travelled down
          the wrong path and deserve a second chance, and individuals with a
          business dream who need help making it a reality. Whether you're a
          seasoned attorney with trial experience or a first-year associate just
          starting your career, Polsinelli provides the help, resources and
          support needed to achieve the result each client deserves.
        </p>

        <p>
          We're proud of all of our work at Polsinelli, but our approach to pro
          bono matters displays the heart of who we are as a firm. We help
          because we <span className="italic">can</span>.{" "}
          <span className="font-bold">That's what a law firm should be.</span>
        </p>
      </div>

      <hr className="my-12 border-gray-300" />

      {/* Pro Bono Case Highlights */}
      <h2 className="text-3xl font-light text-gray-800 mb-8">
        Pro Bono Case Highlights
      </h2>

      {/* Habeas Case */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Habeas Case
          </h3>
          <p className="text-gray-800 text-base leading-relaxed">
            <span className="text-red-600 font-medium">
              Mary McKelvey and David Schultz
            </span>{" "}
            and their team received a rare initial victory in a state habeas
            death penalty case. The case was complicated by the fact that the
            allegations of ineffective assistance involve an attorney who is a
            sitting judge in the jurisdiction where the hearing took place. The
            court found that our team had made a requisite showing of
            ineffective assistance of counsel in jury selection, investigation,
            preparation, presentation of mitigating evidence and expert opinions
            involving petitioners' personal, family, social and psychological
            background. Michael Bramit was tried in 1997, and was charged with
            an attempted robbery and fatal shooting of Jose Fierros, who was
            soliciting prostitutes. Bramit was charged with capital murder,
            found guilty and received the death penalty. The Special Operations
            and Appellate Prosecution Unit of the Riverside District Attorney's
            office filed its Return, and the Polsinelli team is currently
            working on its Traverse. It is anticipated a final decision will be
            issued this year.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-64">
          <div className="bg-gray-300 h-48 md:h-56 rounded overflow-hidden">
            <img
              src="/courthouse-legal-building.jpg"
              alt="Habeas case courtroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-300" />

      {/* Family Drug Court */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Family Drug Court
          </h3>
          <p className="text-gray-800 text-base leading-relaxed">
            By being part of the Family Drug Court's team for over 20 years,
            Polsinelli attorneys have helped to guide families through a
            difficult and emotional process towards positive change. The Family
            Drug Court serves families that have been referred there, primarily
            for allegations of child neglect, and typically related to parental
            drug use and addiction. The goal of the Family Drug Court is to help
            parents treat and overcome substance abuse issues so families can be
            reunited and the cycle of abuse can end. The Family Drug Court
            differs from other courts in that it provides holistic services to
            families and serves a diverse group of 40-50 families at a time.
            Each family has a team of professional service providers, including
            attorneys, Guardian ad litem, CASA, social workers, substance abuse
            and mental health counselors, and judicial officers.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-64">
          <div className="bg-gray-300 h-48 md:h-56 rounded overflow-hidden">
            <img
              src="/attorney-consultation-meeting.jpg"
              alt="Family Drug Court consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-300" />
    </div>
  );
}
