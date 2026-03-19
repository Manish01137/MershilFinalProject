import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Users, Building2, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: 200, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 500, suffix: "+", label: "Engineers" },
  { icon: Building2, value: 50, suffix: "+", label: "Clients" },
  { icon: Globe, value: 4, suffix: "", label: "Offices" },
];

const AboutStats = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 Fade + slide animation
      gsap.fromTo(
        ".stat-box",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 🔥 Counter animation
      stats.forEach((stat, i) => {
        const el = document.querySelector(`#counter-${i}`);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
          onUpdate: () => {
            if (el) {
              el.innerText = Math.floor(obj.val) + stat.suffix;
            }
          },
        });
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-[#020617] px-6 md:px-16 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white">
          Our Impact in Numbers
        </h2>
        <p className="text-gray-400 mt-3">
          Delivering excellence across the globe
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="stat-box group relative text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition duration-300 overflow-hidden"
            >
              
              {/* 🔥 Glow on hover */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

              {/* Icon */}
              <Icon
                className="mx-auto text-blue-400 mb-4 group-hover:scale-110 transition"
                size={32}
              />

              {/* Counter */}
              <h2
                id={`counter-${i}`}
                className="text-4xl font-bold text-white"
              >
                0
              </h2>

              {/* Label */}
              <p className="text-gray-400 mt-2 text-sm">
                {stat.label}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStats;