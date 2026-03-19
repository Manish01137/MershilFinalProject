import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navRef = useRef(null);
  const megaRef = useRef(null);
  const menuItemsRef = useRef([]);

  const [showMega, setShowMega] = useState(false);

  // Navbar entrance animation
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".nav-link", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3
      });

    });

    return () => ctx.revert();

  }, []);

  // Mega menu animation
  useEffect(() => {

    if (showMega) {

      gsap.fromTo(
        megaRef.current,
        { opacity: 0, y: -15, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out"
        }
      );

      gsap.from(menuItemsRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.05
      });

    }

  }, [showMega]);

  return (
    <>
      {/* Premium Hover CSS */}
      <style>{`

        .nav-link{
          position:relative;
          cursor:pointer;
          transition:color .3s ease;
        }

        .nav-link:hover{
          color:white;
        }

        .nav-link::after{
          content:"";
          position:absolute;
          width:0%;
          height:2px;
          bottom:-4px;
          left:0;
          background:linear-gradient(to right,#3b82f6,#6366f1);
          transition:width .3s ease;
        }

        .nav-link:hover::after{
          width:100%;
        }

        .menu-item{
          cursor:pointer;
          padding:10px 0;
          transition: all .25s ease;
        }

        .menu-item:hover{
          color:#2563eb;
          transform: translateX(6px);
        }

      `}</style>

      <header
        ref={navRef}
        className="fixed w-full top-0 z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              M
            </div>

            <h1 className="text-white font-semibold text-lg">
              MershilTech
            </h1>

          </div>


          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-8 text-gray-300 relative">

            {/* SERVICES */}

            <div
              className="relative"
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
            >

              <span className="nav-link">Services</span>

              {showMega && (

                <div
                  ref={megaRef}
                  className="absolute left-1/2 -translate-x-1/2 top-10 w-[760px] bg-white rounded-xl shadow-2xl p-10"
                >

                  <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-blue-600 font-medium">

                    {[
                      "Salesforce Solutions",
                      "Custom Software",
                      "AI & ML Development",
                      "IoT Systems",
                      "Frontend Development",
                      "Backend Development",
                      "Mobile Apps",
                      "Cloud & DevOps"
                    ].map((item, index) => (

                      <p
                        key={index}
                        ref={(el) => (menuItemsRef.current[index] = el)}
                        className="menu-item"
                      >
                        {item}
                      </p>

                    ))}

                  </div>

                </div>

              )}

            </div>


            <Link className="nav-link" to="/hire">
              Hire Developers
            </Link>

            <Link className="nav-link" to="/">
              Case Studies
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

          </nav>


          {/* CTA */}

          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition">
            Get Started
          </button>

        </div>
      </header>
    </>
  );
};

export default Navbar;