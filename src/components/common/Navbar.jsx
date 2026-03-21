import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navRef = useRef(null);
  const megaRef = useRef(null);
  const timeoutRef = useRef(null);

  const [showMega, setShowMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Navbar animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // 🔥 Dropdown animation
  useEffect(() => {
    if (showMega && megaRef.current) {
      gsap.fromTo(
        megaRef.current,
        { opacity: 0, y: -20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [showMega]);

  const services = [
    {
      name: "Salesforce Solutions",
      slug: "salesforce",
      desc: "CRM & automation systems",
    },
    {
      name: "Custom Software Development",
      slug: "custom-software",
      desc: "Tailored enterprise solutions",
    },
    {
      name: "AI & ML Development",
      slug: "ai-ml",
      desc: "Smart automation & intelligence",
    },
    {
      name: "IoT Systems",
      slug: "iot",
      desc: "Connected smart devices",
    },
    {
      name: "Frontend Development",
      slug: "frontend",
      desc: "Modern UI & UX interfaces",
    },
    {
      name: "Backend Development",
      slug: "backend",
      desc: "Secure scalable systems",
    },
    {
      name: "Mobile App Development",
      slug: "mobile",
      desc: "iOS & Android apps",
    },
    {
      name: "Cloud & DevOps",
      slug: "cloud-devops",
      desc: "Scalable infrastructure",
    },
  ];

  // ✅ Hover handlers (NO FLICKER)
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMega(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMega(false);
    }, 200);
  };

  return (
    <header
      ref={navRef}
      className="fixed w-full top-0 z-[999] bg-[#020617]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔷 LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition">
            M
          </div>
          <h1 className="text-white font-semibold text-lg group-hover:text-blue-400 transition">
            MershilTech
          </h1>
        </Link>

        {/* 🔥 DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 relative">

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              onClick={() => navigate("/services")}
              className="relative text-white font-medium group"
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </button>

            {showMega && (
              <div
                ref={megaRef}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[850px] 
                bg-white text-gray-800 
                rounded-2xl shadow-2xl border border-gray-200 
                p-10 z-[999]"
              >
                <div className="grid grid-cols-2 gap-6">

                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.slug}`}
                      className="group p-4 rounded-xl transition-all duration-300 
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                      hover:translate-x-2"
                    >
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 group-hover:text-blue-500">
                        {item.desc}
                      </p>

                      <div className="h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 mt-2"></div>
                    </Link>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link to="/hire" className="relative group hover:text-white transition">
            Hire Developers
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/about" className="relative group hover:text-white transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/contact" className="relative group hover:text-white transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* 📱 MOBILE BUTTON */}
        <div className="md:hidden text-white">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🚀 CTA */}
        <button className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition">
          Get Started
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#020617] text-white px-6 py-6 space-y-4 border-t border-white/10">
          
          <Link to="/services" onClick={() => setMobileOpen(false)}>
            Services
          </Link>

          {services.map((item, i) => (
            <Link
              key={i}
              to={`/services/${item.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          <Link to="/hire" onClick={() => setMobileOpen(false)}>
            Hire Developers
          </Link>

          <Link to="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;