import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 flex flex-col justify-between">

      <Navbar />

      <div className="flex-grow"></div>

      <Footer />

    </div>
  );
};

export default Home;