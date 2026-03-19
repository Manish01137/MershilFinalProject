import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hire from "./pages/Hire";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/about" element={<About />} /> {/* ✅ FIXED */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;