import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceProcess = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".process-step", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
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
        <div className="process-title text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-gray-400">
            A structured approach to deliver high-quality results
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-10 relative">

          {data.process.map((step, i) => (
            <div
              key={i}
              className="process-step group relative p-6 rounded-2xl border border-gray-800 bg-[#0b0f2a] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              {/* STEP NUMBER */}
              <div className="text-5xl font-bold text-gray-700 group-hover:text-blue-500 transition mb-4">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">
                {step}
              </h3>

              {/* LINE */}
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;