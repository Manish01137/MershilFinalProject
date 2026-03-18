import { useEffect, useRef } from "react";
import gsap from "gsap";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TensorFlow",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
];

const Technologies = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;

    gsap.to(el, {
      xPercent: -50,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-28 bg-[#020617] overflow-hidden relative">
      
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Technologies We Use
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We leverage modern, scalable, and future-proof technologies to build powerful digital products.
          </p>
        </div>

        {/* Moving Track */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 w-max"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="group relative min-w-[220px] px-8 py-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center text-white font-medium transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(79,70,229,0.15)]"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Content */}
                <span className="text-lg tracking-wide">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technologies;