import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceTech = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-title", {
        y: 60,
        // opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".tech-item", {
        y: 60,
        // opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white text-black py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <div className="tech-title mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-600">
            Modern tools and frameworks powering our solutions
          </p>
        </div>

        {/* TECH GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {data.tech.map((tech, i) => (
            <div
              key={i}
              className="tech-item group p-6 rounded-xl border border-gray-200 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <p className="font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {tech}
              </p>

              {/* hover underline */}
              <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceTech;