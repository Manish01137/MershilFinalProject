import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.to(imageRef.current, {
        y: 25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);

  const handleMouseMove = (e) => {

    const { clientX, clientY } = e;

    gsap.to(glowRef.current, {
      x: clientX - 150,
      y: clientY - 150,
      duration: 0.3,
      ease: "power2.out"
    });

  };

  return (
    <>
    
    <style>{`

      .hero-btn{
        transition: all .3s ease;
      }

      .hero-btn:hover{
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 10px 30px rgba(59,130,246,0.3);
      }

      .hero-outline{
        border:1px solid rgba(255,255,255,0.2);
      }

      .hero-outline:hover{
        background: rgba(255,255,255,0.05);
      }

      .glow{
        position:absolute;
        width:300px;
        height:300px;
        background: radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%);
        pointer-events:none;
        filter: blur(60px);
        z-index:0; /* important */
      }

    `}</style>

    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020617] text-white flex items-center pt-28 overflow-hidden z-10"
    >

      {/* BACKGROUND GLOW */}
      <div ref={glowRef} className="glow"></div>

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20 z-0"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center z-10">

        {/* LEFT */}
        <div>

          <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight">

            Build With <br />

            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Elite Engineering Teams
            </span>

          </h1>

          <p className="hero-text mt-6 text-gray-400 text-lg max-w-lg">
            Accelerate innovation with offshore developers, scalable architecture,
            and enterprise-grade digital solutions built for growth.
          </p>

          <div className="hero-text mt-8 flex gap-4">

            <button className="hero-btn px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 font-medium">
              Hire Developers
            </button>

            <button className="hero-btn hero-outline px-6 py-3 rounded-lg">
              View Case Studies
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div
            ref={imageRef}
            className="rounded-xl overflow-hidden shadow-2xl"
          >

            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
              alt="developers"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>

    </>
  );
};

export default Hero;