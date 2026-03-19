import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import HeroHire from "../components/hire/HeroHire";
import RolesGrid from "../components/hire/RolesGrid"; // 👈 ADD THIS
import ProcessSection from "../components/hire/ProcessSection";

const Hire = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* 🔥 Navbar (Fixed) */}
      <Navbar />

      {/* 🔥 Main Content */}
      <main className="pt-20"> {/* prevents overlap with fixed navbar */}

        {/* 🚀 Hero Section */}
        <HeroHire />

        {/* 💎 Roles Section */}
        <RolesGrid />

        {/* 👉 Next sections will come here */}
        {/* <ProcessSection /> */}
        <ProcessSection/>
        {/* <CTASection /> */}

      </main>

      {/* 🔥 Footer */}
      <Footer />

    </div>
  );
};

export default Hire;