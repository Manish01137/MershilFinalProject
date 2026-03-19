import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Heart, Globe, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Target, title: "Excellence", desc: "We don't settle for less." },
  { icon: Heart, title: "Integrity", desc: "Honest and transparent." },
  { icon: Globe, title: "Global Mindset", desc: "Diverse global teams." },
  { icon: Sparkles, title: "Innovation", desc: "Always ahead." },
];

const AboutValues = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 FIXED animation (no invisible bug)
      gsap.fromTo(
        ".value-card",
        { y: 80, opacity: 0 },
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

    }, ref);

    return () => ctx.revert();
  }, []);

  // 🔥 3D tilt + spotlight hover
  const handleMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;

    gsap.to(el, {
      rotateX: -y,
      rotateY: x,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (el) => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={ref}
      className="relative py-28 bg-[#020617] px-6 md:px-16 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What Drives Us
        </h2>
        <p className="text-gray-400 mt-3">
          Our core values that shape everything we build
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8 relative z-10 perspective">
        {values.map((val, i) => {
          const Icon = val.icon;
          return (
            <div
              key={i}
              className="value-card group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 transition duration-300 overflow-hidden"
              onMouseMove={(e) => handleMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleLeave(e.currentTarget)}
            >
              {/* 🔥 Hover Glow */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

              {/* 🔥 Gradient Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <Icon
                className="text-blue-400 mb-4 group-hover:scale-110 transition"
                size={32}
              />

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-2">
                {val.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {val.desc}
              </p>

              {/* 🔥 Bottom line animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutValues;