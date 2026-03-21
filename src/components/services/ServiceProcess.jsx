import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceProcess = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".process-step", {
        y: 80,
        scale: 0.95,
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
      className="relative w-full text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#050816] to-[#0a0f2c]" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>

      {/* ✅ FIX: wider container */}
      <div className="max-w-[1400px] xl:max-w-[1500px] mx-auto">

        {/* TITLE */}
        <div className="process-title text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Process
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            A structured approach to deliver high-quality results
          </p>
        </div>

        {/* ✅ GRID FIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {data.process.map((step, i) => (
            <div
              key={i}
              className="process-step group min-h-[170px] p-6 rounded-2xl 
              bg-white/5 backdrop-blur-md 
              border border-white/10 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              <div className="text-5xl font-bold text-gray-600 group-hover:text-blue-400 transition">
                0{i + 1}
              </div>

              <h3 className="text-lg font-semibold mt-4">
                {step}
              </h3>

              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;