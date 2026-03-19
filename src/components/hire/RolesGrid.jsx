import { useEffect, useRef } from "react";
import gsap from "gsap";
import RoleCard from "./RoleCard";

const RolesGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".role-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 px-4 md:px-6 text-white overflow-hidden"
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]"></div>

      {/* 🔥 GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center max-w-2xl md:max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="text-blue-400 text-xs md:text-sm mb-3 tracking-widest">
            DEVELOPER ROLES
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect Developer
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg">
            Choose from a curated pool of elite engineers ready to scale your team faster.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

          <div className="role-card">
            <RoleCard title="Frontend Developer" experience="5+ years" skills={["React", "Next.js", "TypeScript"]} />
          </div>

          <div className="role-card">
            <RoleCard title="Backend Developer" experience="5+ years" skills={["Node.js", "Express", "MongoDB"]} />
          </div>

          <div className="role-card">
            <RoleCard title="Mobile Developer" experience="4+ years" skills={["Flutter", "Firebase", "REST APIs"]} />
          </div>

          <div className="role-card">
            <RoleCard title="DevOps Engineer" experience="6+ years" skills={["AWS", "Docker", "Kubernetes"]} />
          </div>

          <div className="role-card">
            <RoleCard title="AI/ML Engineer" experience="5+ years" skills={["Python", "TensorFlow", "ML"]} />
          </div>

          <div className="role-card">
            <RoleCard title="Full Stack Developer" experience="5+ years" skills={["React", "Node", "MongoDB"]} />
          </div>

          {/* 🔥 NEW 3 ROLES */}

          <div className="role-card">
            <RoleCard title="UI/UX Designer" experience="4+ years" skills={["Figma", "Wireframing", "Prototyping"]} />
          </div>

          <div className="role-card">
            <RoleCard title="Data Engineer" experience="5+ years" skills={["Python", "ETL", "Big Data"]} />
          </div>

          <div className="role-card">
            <RoleCard title="QA Engineer" experience="4+ years" skills={["Testing", "Automation", "Selenium"]} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default RolesGrid;