import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Staff Augmentation",
    desc: "Instantly scale your existing team with top-tier developers who integrate seamlessly into your workflow.",
    highlight: false,
  },
  {
    title: "Dedicated Team",
    desc: "A fully autonomous offshore team managed by seasoned tech leads, dedicated exclusively to your product roadmap.",
    highlight: true,
  },
  {
    title: "Offshore Dev Center",
    desc: "Setup your own branded remote office in top tech hubs with our legal, HR, and operational infrastructure.",
    highlight: false,
  },
];

const HireTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 PREMIUM ENTRY ANIMATION
      gsap.fromTo(
        ".hire-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020617] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Hire A <span className="text-indigo-400">Dedicated Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Access the top 1% of global engineering talent. We handle vetting, compliance,
            and retention so you can focus on building.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`hire-card opacity-0 group relative p-10 rounded-3xl transition-all duration-500 border overflow-hidden
              ${
                plan.highlight
                  ? "bg-white text-black border-transparent scale-[1.05] shadow-[0_20px_60px_rgba(255,255,255,0.08)]"
                  : "bg-white/5 text-white border-white/10 hover:border-indigo-400/40 hover:bg-white/10"
              }`}
            >

              {/* Glow Hover Layer */}
              {!plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              )}

              {/* MOST POPULAR */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              )}

              {/* Content */}
              <div className="relative z-10">

                {/* Title */}
                <h3 className={`text-2xl font-semibold mb-4 ${
                  plan.highlight ? "text-black" : "text-white"
                }`}>
                  {plan.title}
                </h3>

                {/* Desc */}
                <p className={`mb-8 leading-relaxed ${
                  plan.highlight ? "text-gray-600" : "text-gray-400"
                }`}>
                  {plan.desc}
                </p>

                {/* Button */}
                <button
                  className={`flex items-center justify-between w-full px-6 py-4 rounded-xl transition-all duration-300
                  ${
                    plan.highlight
                      ? "bg-black text-white hover:bg-black/80"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Hire Now
                  <ArrowRight className="group-hover:translate-x-1 transition" />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HireTeam;