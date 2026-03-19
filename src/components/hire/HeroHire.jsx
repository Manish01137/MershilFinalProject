import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroHire = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".hero-points span", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        delay: 0.6,
      });

      gsap.from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
      });

      // subtle floating glow
      gsap.to(".glow-1", {
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".glow-2", {
        y: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 🔥 FIXED MOUSE GLOW (VISIBLE NOW)
  const handleMouseMove = (e) => {
    gsap.to(".cursor-glow", {
      x: e.clientX - 200,
      y: e.clientY - 200,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* 🔥 MOUSE GLOW (STRONGER + VISIBLE) */}
      <div className="cursor-glow pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full z-0"></div>

      {/* 🔥 BACKGROUND GLOW (CONTROLLED) */}
      <div className="absolute inset-0 z-0">
        <div className="glow-1 absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/25 blur-[120px] rounded-full"></div>
        <div className="glow-2 absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] bg-purple-500/25 blur-[120px] rounded-full"></div>
      </div>

      {/* 🔥 CONTENT (TOP LAYER FIXED) */}
      <div className="relative z-20 max-w-5xl text-center px-6">

        {/* Badge */}
        <div className="hero-badge inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm hover:bg-white/20 transition">
          ✨ Hire Top Talent
        </div>

        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hire Top{" "}
          <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            1% Developers
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Pre-vetted senior engineers ready within{" "}
          <span className="text-white font-semibold">48 hours</span>.  
          Scale your team faster with zero risk.
        </p>

        {/* Points */}
        <div className="hero-points flex flex-wrap justify-center gap-6 text-gray-400 mb-12">
          <span className="hover:text-white transition">✔ 500+ Engineers</span>
          <span className="hover:text-white transition">✔ 48hr Onboarding</span>
          <span className="hover:text-white transition">✔ Zero Risk Trial</span>
          <span className="hover:text-white transition">✔ Flexible Contracts</span>
        </div>

        {/* 🔥 CTA BUTTON (NOW FULLY VISIBLE) */}
        <button className="hero-btn relative px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold overflow-hidden group z-30 shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
          
          {/* Shine */}
          <span className="absolute -left-full top-0 h-full w-1/2 bg-white/20 skew-x-12 group-hover:left-full transition-all duration-700"></span>

          {/* Hover overlay */}
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

          <span className="relative z-10 flex items-center justify-center gap-2">
            Hire Top Talent →
          </span>
        </button>

      </div>
    </section>
  );
};

export default HeroHire;