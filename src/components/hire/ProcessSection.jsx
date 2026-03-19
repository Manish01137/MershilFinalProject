import { Search, Users, Rocket } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="relative py-24 px-6 bg-white text-black overflow-hidden">
      
      {/* 🔥 Soft Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 blur-[140px] opacity-40 rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 text-sm mb-3 tracking-widest">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hire in <span className="text-blue-600">3 Simple Steps</span>
          </h2>

          <p className="text-gray-600 text-lg">
            A streamlined process designed to get you the best talent quickly and efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition">
              <Search size={26} />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Tell Us Your Needs
            </h3>

            <p className="text-gray-600">
              Share your requirements, tech stack, and team goals — we’ll handle the rest.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition">
              <Users size={26} />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Get Matched with Experts
            </h3>

            <p className="text-gray-600">
              We shortlist top developers tailored to your needs within 48 hours.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition">
              <Rocket size={26} />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Start Building
            </h3>

            <p className="text-gray-600">
              Onboard instantly and start scaling your product with top-tier talent.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;