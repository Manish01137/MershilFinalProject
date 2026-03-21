import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceTech from "../components/services/ServiceTech";
import ServiceCTA from "../components/services/ServiceCTA";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);

  // 🔥 SAFETY CHECK
  if (!service) {
    return (
      <div className="bg-[#0B0F19] text-white min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Service Not Found 🚫</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0F19] text-white overflow-hidden">

      <Navbar />

      <ServiceHero data={service} />
      <ServiceOverview data={service} />
      <ServiceFeatures data={service} />
      <ServiceProcess data={service} />
      <ServiceTech data={service} />
      <ServiceCTA data={service} />

      <Footer />

    </div>
  );
};

export default ServiceDetails;