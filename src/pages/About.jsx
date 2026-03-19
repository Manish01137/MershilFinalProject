import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// ✅ IMPORT ABOUT SECTIONS
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutValues from "../components/about/AboutValues";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 ABOUT PAGE SECTIONS */}
      <main className="bg-[#020617]">
        <AboutHero />
        <AboutStats />
        <AboutValues />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
};

export default About;