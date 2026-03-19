import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navRef = useRef(null);
  const megaRef = useRef(null);
  const timeoutRef = useRef(null);

  const [showMega, setShowMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // Navbar animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  // Dropdown animation
  useEffect(() => {
    if (showMega && megaRef.current) {
      gsap.fromTo(
        megaRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [showMega]);

  const isActive = (path) => location.pathname === path;

  const services = [
    { name: "Salesforce Solutions", path: "/services/salesforce" },
    { name: "Custom Software", path: "/services/software" },
    { name: "AI & ML Development", path: "/services/ai" },
    { name: "IoT Systems", path: "/services/iot" },
    { name: "Frontend Development", path: "/services/frontend" },
    { name: "Backend Development", path: "/services/backend" },
    { name: "Mobile Apps", path: "/services/mobile" },
    { name: "Cloud & DevOps", path: "/services/devops" },
  ];

  // 👇 FIXED hover handlers
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMega(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMega(false);
    }, 200); // small delay prevents flicker
  };

  return (
    <header
      ref={navRef}
      className="fixed w-full top-0 z-[999] bg-[#020617]/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-white font-semibold text-lg">
            MershilTech
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 relative">
          
          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <span className="nav-link cursor-pointer text-white">
              Services
            </span>

            {showMega && (
              <div
                ref={megaRef}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[750px] 
                bg-white text-gray-800 
                rounded-2xl shadow-2xl border border-gray-200 
                p-10 z-[999]"
              >
                <div className="grid grid-cols-2 gap-6 font-medium">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/hire">Hire Developers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-white">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* CTA */}
        <button className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          Get Started
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-black px-6 py-6 space-y-4">
          {services.map((item, i) => (
            <Link key={i} to={item.path}>
              {item.name}
            </Link>
          ))}
          <Link to="/hire">Hire Developers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;