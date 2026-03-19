import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutCTA = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 Entry animation
      gsap.fromTo(
        ".cta-content",
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // 🔥 Floating card animation
      gsap.to(cardRef.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  // 🔥 Magnetic button
  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 4;
    const y = (e.clientY - rect.top - rect.height / 2) / 4;

    gsap.to(btnRef.current, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-16 bg-[#020617] overflow-hidden"
    >
      {/* 🔥 Moving Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />

      {/* 🔥 CTA CARD */}
      <div
        ref={cardRef}
        className="cta-content relative z-10 max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-xl rounded-[2rem] p-14 md:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.25)] border border-white/30 overflow-hidden group"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-70" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let’s Build Something <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Extraordinary 🚀
            </span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-xl mx-auto">
            Partner with us to create powerful digital experiences that scale globally.
          </p>

          {/* 🔥 MAGNETIC BUTTON */}
          <button
            ref={btnRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative mt-10 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center gap-3 mx-auto transition duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Get in Touch</span>

            {/* Arrow */}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

            {/* Glow ring */}
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>
          </button>
        </div>

        {/* 🔥 Shine sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_2.5s_linear_infinite]" />
        </div>
      </div>

      {/* 🔥 Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;