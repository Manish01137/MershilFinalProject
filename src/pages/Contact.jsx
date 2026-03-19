import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🔥 Hero Section */}
      <ContactHero />

      {/* 📇 Contact Info */}
      <ContactInfo />

      {/* 📝 Contact Form */}
      <ContactForm />

      {/* 🔚 Footer */}
      <Footer />

    </div>
  );
};

export default Contact;