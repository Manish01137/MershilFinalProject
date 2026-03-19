import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hire from "./pages/Hire";
import About from "./pages/About";
import Contact from "./pages/Contact"; // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ NEW ROUTE */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;