import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
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
    <section ref={sectionRef} className="py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Discover how we've helped companies build scalable and impactful digital products.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Card 1 */}
          <div className="project-card opacity-0 group relative rounded-3xl overflow-hidden bg-[#c7c9e2] text-black p-12 hover:scale-[1.02] transition duration-500">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="absolute right-0 bottom-0 w-[55%] h-full object-cover opacity-90 group-hover:scale-110 transition duration-700"
              alt="project"
            />

            <span className="text-sm opacity-60">01.</span>
            <span className="absolute top-10 right-10 text-sm opacity-60">Showcase</span>

            <h3 className="text-4xl font-bold mt-8 mb-5">
              Scuola
            </h3>

            <p className="max-w-sm text-gray-700 text-lg">
              Convenience, savings and rewards at your fingertips
            </p>

            <p className="absolute bottom-10 left-12 text-sm opacity-60">
              Lounge Project
            </p>

            <ArrowUpRight className="absolute bottom-10 right-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>

          {/* Card 2 */}
          <div className="project-card opacity-0 group relative rounded-3xl overflow-hidden bg-[#e6ded2] text-black p-12 hover:scale-[1.02] transition duration-500">

            <img
              src="https://images.unsplash.com/photo-1551281044-8d8d7c9f4c7d"
              className="absolute right-0 bottom-0 w-[55%] h-full object-cover opacity-90 group-hover:scale-110 transition duration-700"
              alt="project"
            />

            <span className="text-sm opacity-60">02.</span>
            <span className="absolute top-10 right-10 text-sm opacity-60">Showcase</span>

            <h3 className="text-4xl font-bold mt-8 mb-5">
              Jolie
            </h3>

            <p className="max-w-sm text-gray-700 text-lg">
              Private trust management and trading platform
            </p>

            <p className="absolute bottom-10 left-12 text-sm opacity-60">
              Lounge Project
            </p>

            <ArrowUpRight className="absolute bottom-10 right-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>

        </div>

        {/* BIG CARD */}
        <div className="project-card opacity-0 group relative rounded-3xl overflow-hidden bg-[#111111] text-white p-14 hover:scale-[1.01] transition duration-500">

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="absolute right-0 bottom-0 w-[55%] h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
            alt="project"
          />

          <span className="text-sm opacity-60">03.</span>
          <span className="absolute top-12 right-12 text-sm opacity-60">Showcase</span>

          <h3 className="text-5xl font-bold mt-10 mb-6">
            Skole
          </h3>

          <p className="max-w-lg text-gray-400 text-lg">
            Online platform for distance learning and digital education systems.
          </p>

          <p className="absolute bottom-12 left-14 text-sm opacity-60">
            Lounge Project
          </p>

          <ArrowUpRight className="absolute bottom-12 right-14 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;