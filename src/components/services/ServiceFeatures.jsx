import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";

const ServiceFeatures = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".features-title", {
        y: 60,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".feature-box", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        delay: 0.3,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-[#050816] text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="features-title text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Key Features
          </h2>
          <p className="text-gray-400 mt-4">
            What makes our {data.title} exceptional
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {data.features.map((item, i) => (
            <div
              key={i}
              className="feature-box group p-6 rounded-2xl border border-gray-800 bg-[#0b0f2a] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* ICON */}
              <CheckCircle className="text-blue-500 mb-4 group-hover:scale-110 transition" />

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;