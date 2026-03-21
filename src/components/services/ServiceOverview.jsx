import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceOverview = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔝 Heading Animation
      gsap.fromTo(
        ".overview-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // 💎 Cards Animation (FIXED)
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.3,
          ease: "power3.out",
        }
      );

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white text-black py-28 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🔝 TOP TEXT */}
        <div className="overview-text max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {data.title}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {data.overview}
          </p>

          {/* underline accent */}
          <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* 💎 FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.features.map((item, i) => (
            <div
              key={i}
              className="feature-card opacity-0 group relative p-6 rounded-2xl 
              border border-gray-200 bg-white 
              shadow-sm hover:shadow-2xl 
              hover:-translate-y-3 
              transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* hover line */}
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;