import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceHero = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-img", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex items-center bg-[#050816] text-white px-6 md:px-20 py-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="hero-text space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build With <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg">
            {data.overview}
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
              View Details
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-img relative">
          <img
            src={data.heroImage}
            alt={data.title}
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default ServiceHero;