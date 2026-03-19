import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ContactForm = () => {
  const formRef = useRef(null);
  const btnRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={formRef}
      className="relative py-24 px-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 40%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.08), transparent 50%), linear-gradient(135deg, #020617, #020617 40%, #0f172a 70%, #020617)"
      }}
    >
      <div className="max-w-5xl mx-auto text-white text-center">

        {/* 🔥 Heading */}
        <h2 className="form-item text-4xl md:text-5xl font-semibold mb-4">
          Start Your Project
        </h2>

        <p className="form-item text-white/70 mb-12">
          Tell us what you're building — we’ll help you scale with the right team.
        </p>

        {/* 💎 FORM */}
        <form className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input name="name" placeholder="Your Name" onChange={handleChange} className="input" />
            <input name="email" type="email" placeholder="Your Email" onChange={handleChange} className="input" />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input name="company" placeholder="Company Name" onChange={handleChange} className="input" />

            <select name="service" onChange={handleChange} className="input">
              <option value="">Select Service</option>
              <option>Hire Developers</option>
              <option>Web Development</option>
              <option>AI Solutions</option>
              <option>Mobile App</option>
            </select>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <select name="budget" onChange={handleChange} className="input">
              <option value="">Project Budget</option>
              <option>$1k - $5k</option>
              <option>$5k - $10k</option>
              <option>$10k - $25k</option>
              <option>$25k+</option>
            </select>

            <input name="timeline" placeholder="Timeline (e.g. 2 weeks)" onChange={handleChange} className="input" />
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            onChange={handleChange}
            className="input resize-none"
          />

          {/* Button */}
          <div className="pt-4">
            <button
              ref={btnRef}
              className="w-full md:w-auto px-10 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Submit Inquiry →
            </button>
          </div>
        </form>
      </div>

      {/* ✅ FIXED INPUT STYLES */}
      <style>
        {`
        .input {
          width: 100%;
          padding: 16px 18px;
          border-radius: 12px;
          background: rgba(255,255,255,0.15); /* 🔥 increased visibility */
          border: 1px solid rgba(255,255,255,0.25);
          color: white;
          outline: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .input::placeholder {
          color: rgba(255,255,255,0.7); /* 🔥 brighter */
        }

        .input:focus {
          background: rgba(255,255,255,0.2);
          border-color: white;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
        }

        select.input {
          color: white;
        }

        select.input option {
          background: #020617;
          color: white;
        }
        `}
      </style>
    </section>
  );
};

export default ContactForm;