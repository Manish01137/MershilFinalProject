import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-card", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <Mail size={32} />,
      title: "Email Us",
      value: "hello@mershil.tech",
    },
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      value: "+61 412 345 678",
    },
    {
      icon: <MapPin size={32} />,
      title: "Visit Us",
      value: "Sydney, Australia",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 40%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.08), transparent 50%), linear-gradient(135deg, #020617, #020617 40%, #0f172a 70%, #020617)"
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        
        {/* 🔥 Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Get In Touch
        </h2>

        <p className="text-white/60 mb-16 max-w-2xl mx-auto">
          Reach out through any of the channels below — we’d love to hear from you.
        </p>

        {/* 💎 PERFECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="info-card relative p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.05] hover:border-white/40 hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
            >
              {/* ✨ Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/20 via-transparent to-purple-400/20 blur-2xl"></div>

              {/* 🔹 Icon */}
              <div className="mb-6 flex justify-center text-white/80 hover:text-white transition duration-300">
                {card.icon}
              </div>

              {/* 🧾 Title */}
              <h3 className="text-xl font-semibold mb-2">
                {card.title}
              </h3>

              {/* 📌 Value */}
              <p className="text-white/70 hover:text-white transition duration-300">
                {card.value}
              </p>

              {/* 💡 Bottom line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-500 hover:w-3/4 hover:left-[12.5%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;