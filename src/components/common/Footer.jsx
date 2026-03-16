import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {

  const footerRef = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".footer-col", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

    }, footerRef);

    return () => ctx.revert();

  }, []);

  return (
    <>
      {/* Premium Hover Styles */}
      <style>{`

        .footer-link{
          color:#9ca3af;
          cursor:pointer;
          transition:all .25s ease;
        }

        .footer-link:hover{
          color:white;
          transform:translateX(4px);
        }

        .social-icon{
          width:44px;
          height:44px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#111827;
          border-radius:10px;
          transition:all .3s ease;
          cursor:pointer;
        }

        .social-icon:hover{
          background:#2563eb;
          transform:translateY(-4px) scale(1.05);
          color:white;
        }

      `}</style>

      <footer
        ref={footerRef}
        className="bg-[#020617] text-gray-400 pt-20 pb-10 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-12">

            {/* COMPANY */}
            <div className="footer-col">
              <h2 className="text-white text-xl font-semibold mb-4">
                Mershil Tech
              </h2>

              <p className="leading-relaxed">
                Enterprise software development and offshore engineering partner delivering scalable digital solutions worldwide.
              </p>
            </div>


            {/* SERVICES */}
            <div className="footer-col">
              <h3 className="text-white font-semibold mb-4">
                Services
              </h3>

              <ul className="space-y-3">
                <li className="footer-link">Custom Software</li>
                <li className="footer-link">AI Development</li>
                <li className="footer-link">Cloud & DevOps</li>
                <li className="footer-link">Mobile Apps</li>
                <li className="footer-link">UI/UX Design</li>
              </ul>
            </div>


            {/* HIRE DEVELOPERS */}
            <div className="footer-col">
              <h3 className="text-white font-semibold mb-4">
                Hire Developers
              </h3>

              <ul className="space-y-3">
                <li className="footer-link">React Developers</li>
                <li className="footer-link">Node Developers</li>
                <li className="footer-link">Flutter Developers</li>
                <li className="footer-link">Java Developers</li>
                <li className="footer-link">Offshore Teams</li>
              </ul>
            </div>


            {/* CONTACT */}
            <div className="footer-col">
              <h3 className="text-white font-semibold mb-4">
                Contact
              </h3>

              <p className="mb-2">Sydney HQ</p>
              <p className="mb-6">info@mershiltech.com</p>

              <div className="flex gap-4">

                <div className="social-icon">
                  <FaLinkedinIn />
                </div>

                <div className="social-icon">
                  <FaTwitter />
                </div>

                <div className="social-icon">
                  <FaGithub />
                </div>

                <div className="social-icon">
                  <HiOutlineMail />
                </div>

              </div>
            </div>

          </div>


          {/* BOTTOM SECTION */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">

            <p>
              © 2026 Mershil Tech. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-link">Terms</span>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;