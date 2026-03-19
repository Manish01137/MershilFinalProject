import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutHero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 Text stagger animation
      gsap.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 🔥 Image entry
      gsap.from(".hero-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // 🔥 Floating animation (loop)
      gsap.to(imageRef.current, {
        y: 12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 Magnetic hover effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    gsap.to(imageRef.current, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-24 px-6 md:px-16 bg-gradient-to-b from-[#020617] to-[#020617]/90 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT */}
        <div className="hero-text">
          <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-white/10 text-blue-400 border border-white/10 backdrop-blur">
            About MershilTech
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Engineering the <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Founded in Sydney, MershilTech has grown into a global engineering powerhouse.
            We build elite teams and scalable software for ambitious companies.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="hero-image relative group cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={imageRef} className="relative">
            
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="team"
              className="rounded-2xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105"
            />

            {/* 🔥 Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-blue-500/30 blur-md opacity-70 group-hover:opacity-100 transition" />

            {/* 🔥 Gradient Sweep Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2s_linear_infinite]" />
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 Custom Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;