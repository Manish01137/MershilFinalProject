import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0F19] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We provide cutting-edge digital solutions to help your business grow and scale.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {servicesData.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="group relative cursor-pointer rounded-2xl border border-white/10 bg-[#111827] overflow-hidden p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">

                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {service.title}
                </h2>

                <p className="text-gray-400 mb-6">
                  {service.tagline}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((f, i) => (
                    <li key={i} className="text-sm text-gray-300">
                      • {f.title}
                    </li>
                  ))}
                </ul>

                <span className="text-blue-400 group-hover:translate-x-2 transition inline-block">
                  Explore →
                </span>

              </div>

              {/* IMAGE */}
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-20 group-hover:opacity-40 transition">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;