export default function FirmOverviewContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
      {/* Left Column - CEO Letter */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-[40px] md:text-4xl font-light mb-[60px] text-gray-800">
            An open letter from our CEO
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-[25px]">
            <p className="text-lg">Hello,</p>

            <p>
              Thank you for your interest in Polsinelli. I am excited to tell
              you about our firm. We have been intentional about creating a
              culture that aspires to bring out the best in all of our
              professionals by allowing them to bring their creativity and
              passion for what they do into our environment. This has created an
              internal and external client service model that is second to none,
              a workplace that shows deep respect for each individual and truly
              is why Polsinelli has become what a law firm{" "}
              <span className="italic">should</span> be.
            </p>

            <p>
              I hope you take time to explore our website and learn more about
              our culture. I think you will find that we do things a{" "}
              <span className="italic">little</span> differently here at
              Polsinelli, which makes a <span className="font-bold">big</span>{" "}
              impact on our clients and our people.
            </p>

            <p>To learn more, please reach out to any of our team members.</p>
          </div>
        </div>

        {/* CEO Signature */}
        <div className="mt-8">
          <div className="text-xl font-script text-gray-600 mb-2">
            Chase Simmons
          </div>
          <p className="text-gray-700 font-medium">
            Chairman & Chief Executive Officer
          </p>
        </div>
      </div>

      {/* Right Column - Image and Brand Statement */}
      <div className="flex flex-col gap-6">
        {/* City Image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
            alt="Chicago skyline"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Statement */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
            Our brand is centered around the tagline,{" "}
            <span className="font-semibold">what a law firm should be</span>.
            This brand tells the story of our people and our passion for
            clients.
          </p>
        </div>
      </div>
    </div>
  );
}
