import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "They delivered beyond expectations. The product quality and performance were exceptional.",
  },
  {
    name: "Emily Carter",
    role: "Product Manager",
    text: "Amazing team to work with. Highly professional and extremely skilled developers.",
  },
  {
    name: "David Lee",
    role: "CTO",
    text: "Their technical expertise helped us scale our platform efficiently and securely.",
  },
  {
    name: "Ankit Verma",
    role: "Entrepreneur",
    text: "From idea to execution, everything was seamless. Highly recommended!",
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;

    const animation = gsap.to(el, {
      xPercent: -50,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    // Pause on hover
    el.addEventListener("mouseenter", () => animation.pause());
    el.addEventListener("mouseleave", () => animation.resume());

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="py-28 bg-[#020617] overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trusted by startups and enterprises worldwide for delivering exceptional digital solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 w-max"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="group min-w-[320px] max-w-[320px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-purple-400/40"
              >
                {/* Stars */}
                <div className="flex mb-4 text-yellow-400">
                  {"★★★★★"}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{item.text}"
                </p>

                {/* User */}
                <div>
                  <h4 className="text-white font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;