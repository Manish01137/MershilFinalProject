import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      <Navbar />

      <main>
        <Hero />
        <Services />
      </main>

      <Footer />

    </div>
  );
};

export default Home;