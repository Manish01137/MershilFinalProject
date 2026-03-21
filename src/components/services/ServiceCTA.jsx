import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceCTA = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 80,
        opacity: 0,
        duration: 1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center cta-content">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {data.cta}
        </h2>

        <p className="text-white/80 mb-10">
          Let’s build something amazing together. Get in touch with our team today.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Start Project
          </button>

          <button className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300">
            Talk to Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;