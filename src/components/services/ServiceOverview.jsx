import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceOverview = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".overview-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".feature-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white text-black py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="overview-text max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {data.title} Solutions
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {data.overview}
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.features.map((item, i) => (
            <div
              key={i}
              className="feature-card group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
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