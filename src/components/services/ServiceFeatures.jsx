import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";

const ServiceFeatures = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".features-title", {
        y: 60,
      
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".feature-box", {
        y: 60,
      
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
      className="relative w-full text-white py-28 px-6 md:px-20 mt-10 overflow-hidden"
    >
      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#050816] to-[#0a0f2c]" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="features-title text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Key{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Features
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            What makes our {data?.title} exceptional
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {data?.features?.map((item, i) => (
            <div
              key={i}
              className="feature-box group relative h-full flex flex-col justify-between p-6 rounded-2xl 
              bg-white/5 backdrop-blur-md 
              border border-white/10 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

              {/* CONTENT */}
              <div>
                <CheckCircle className="text-blue-400 mb-4 transform transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;