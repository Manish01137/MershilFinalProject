import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "We build secure, scalable systems that protect your data and ensure reliability.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized applications delivering lightning-fast performance across all platforms.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Work with top-tier engineers and designers with proven industry experience.",
  },
  {
    icon: Award,
    title: "Proven Results",
    desc: "We deliver measurable results that help businesses scale and succeed.",
  },
];

const stats = [
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 250, suffix: "+", label: "Projects Delivered" },
  { number: 50, suffix: "+", label: "Expert Developers" },
  { number: 10, suffix: "+", label: "Years Experience" },
];

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Cards animation
      gsap.from(".why-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Counter animation
      stats.forEach((stat, i) => {
        const el = document.querySelector(`#counter-${i}`);

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stat.number,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-[#020617] relative"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine innovation, expertise, and cutting-edge technology to deliver outstanding results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-400">
                <span id={`counter-${i}`}>0</span>
                {stat.suffix}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="why-card group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 mb-5">
                  <Icon className="text-indigo-400" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;