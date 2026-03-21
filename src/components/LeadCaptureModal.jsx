import { useEffect, useState } from "react";

const LeadCaptureModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("leadPopup");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("leadPopup", "true");
      }, 5000); // ⏱️ change timing here

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      {/* MODAL */}
      <div className="relative w-[90%] max-w-md p-8 rounded-2xl bg-[#0b0f2a] border border-white/10 shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* CONTENT */}
        <h2 className="text-xl font-semibold mb-2 text-white">
          Let’s Build Something Great 🚀
        </h2>

        <p className="text-gray-400 mb-6 text-sm">
          Share your details and our team will contact you shortly.
        </p>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </form>

      </div>
    </div>
  );
};

export default LeadCaptureModal;