import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Cpu, Cloud, Smartphone, Palette, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "End-to-end software solutions tailored to your specific business needs and scale.",
  },
  {
    icon: Cpu,
    title: "AI & ML Development",
    desc: "Intelligent solutions leveraging machine learning to automate processes and unlock insights.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud architecture and automated deployment pipelines for maximum efficiency.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that engage users and drive growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centric design systems that create intuitive and memorable digital experiences.",
  },
  {
    icon: Users,
    title: "Offshore Teams",
    desc: "Dedicated engineering teams that integrate seamlessly with your in-house operations.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 FIXED ANIMATION (fromTo ensures visibility)
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Digital Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We transform visionary ideas into enterprise-grade applications built for scale,
            security, and exceptional performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card opacity-0 group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6">
                  <Icon className="text-white" size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {service.desc}
                </p>

                {/* CTA */}
                <button className="text-indigo-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Service →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;