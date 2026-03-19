import { Star, ArrowRight } from "lucide-react";

const RoleCard = ({ title, experience, skills }) => {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-all duration-500 hover:scale-[1.04]">
      
      {/* 🔥 Glass Card */}
      <div className="relative h-full rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 p-6 overflow-hidden">

        {/* Glow Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Shine Effect */}
        <div className="absolute -left-full top-0 h-full w-1/2 bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
            {title}
          </h3>

          {/* Experience */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-5">
            <Star size={16} className="text-blue-400" />
            <span>{experience}</span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Button (stick to bottom) */}
          <div className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group/button">
              
              <span>Hire Now</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleCard;