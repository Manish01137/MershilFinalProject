import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 bg-[#020617] text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Dream Team?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Tell us your requirements and get matched with top 1% developers within 48 hours.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
            
            {/* Shine Effect */}
            <span className="absolute -left-full top-0 h-full w-1/2 bg-white/20 skew-x-12 group-hover:left-full transition-all duration-700"></span>

            <span className="relative z-10 flex items-center gap-2 justify-center">
              Get Started
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;