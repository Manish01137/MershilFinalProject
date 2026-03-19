import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hire from "./pages/Hire"; // 👈 ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 🔥 Hire Page Route */}
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;