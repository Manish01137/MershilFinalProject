import { useEffect, useRef } from "react";
import gsap from "gsap";

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.fromTo(
        ".cta-heading",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Paragraph
      gsap.fromTo(
        ".cta-text",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      );

      // Button
      gsap.fromTo(
        ".cta-btn",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.4 }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#020617] relative overflow-hidden"
    >

      {/* Animated Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/20 blur-[160px] animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Card */}
        <div className="group relative bg-white rounded-[40px] p-16 md:p-20 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-purple-100/30 opacity-80 group-hover:opacity-100 transition duration-500"></div>

          {/* Floating Light Effect */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-400/20 blur-[100px] top-[-50px] left-[-50px] group-hover:scale-125 transition duration-700"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Heading */}
            <h2 className="cta-heading text-4xl md:text-6xl font-semibold text-[#0f172a] mb-6 leading-tight">
              Start Building With <br />
              <span className="text-indigo-600">
                The Best Engineers
              </span>
            </h2>

            {/* Text */}
            <p className="cta-text text-gray-600 max-w-2xl mx-auto text-lg mb-10">
              Don’t let technical debt slow you down. Partner with world-class engineers today and launch your product faster than ever.
            </p>

            {/* Button */}
            <button className="cta-btn group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-[#020617] text-white rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-110">

              {/* Button Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition duration-500"></span>

              {/* Text */}
              <span className="relative z-10">
                Schedule Discovery Call
              </span>

              {/* Arrow */}
              <span className="relative z-10 group-hover/btn:translate-x-1 transition">
                →
              </span>

            </button>

            {/* Bottom Text */}
            <p className="text-sm text-gray-400 mt-6 tracking-wide">
              NO OBLIGATION • DISCUSS IN 24H • SECURE NDA
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;