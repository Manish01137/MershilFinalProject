import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactHero = () => {
  const heroRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      tl.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");

      tl.from(".hero-btn", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4");

      tl.from(".hero-img", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }, "-=1");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 🔥 Magnetic button
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.15), transparent 40%), linear-gradient(135deg, #020617, #020617 40%, #0f172a 70%, #020617)"
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🔹 LEFT CONTENT */}
        <div className="text-center md:text-left">
          
          <div className="hero-badge inline-block px-4 py-2 mb-6 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70">
            Contact MershilTech
          </div>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Let’s Build the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="hero-subtitle mt-6 text-lg text-white/60 max-w-xl">
            Have an idea, project, or vision? Let’s collaborate and create something
            truly exceptional together.
          </p>

          <div className="mt-10">
            <button
              ref={btnRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="hero-btn px-10 py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            >
              Start a Conversation →
            </button>
          </div>
        </div>

        {/* 🖼️ RIGHT IMAGE */}
        <div className="hero-img relative">
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
            alt="office"
            className="relative rounded-3xl shadow-2xl border border-white/10 transition duration-500 hover:scale-105"
          />

          {/* Glass overlay */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 backdrop-blur-[2px]"></div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;