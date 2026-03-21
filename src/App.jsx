import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hire from "./pages/Hire";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails"; // ✅ IMPORTANT

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/about" element={<About />} />
        
        {/* 🔥 SERVICES */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} /> {/* ✅ FIX */}

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;