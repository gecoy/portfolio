import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// อย่าลืม Import ไฟล์หน้าที่คุณอยากให้มันโชว์เข้ามาด้วย (สมมติว่าไฟล์ชื่อ about.jsx)
import About from "./components/About/about";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/contact";

function App() {
  return (

    // 1. ต้องเอา BrowserRouter มาครอบเนื้อหาทั้งหมดไว้ เพื่อเปิดระบบ Router
    <BrowserRouter>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* Navbar วางไว้นอก Routes เพราะเราอยากให้เมนูนี้โชว์อยู่ทุกหน้า ไม่ว่าจะเปลี่ยนไปหน้าไหน */}
        <Navbar />

        {/* 2. Routes คือพื้นที่ที่เนื้อหาจะเปลี่ยนไปตามการกดเมนู */}
        <div className="p-4">
          <Routes>
            {/* ถ้า URL เป็นหน้าหลัก (/) ให้โชว์ข้อความ หรือโชว์หน้า Home */}
            <Route path="/" element={<Home />} />

            {/* ถ้า URL เป็น /contact ให้เอาไฟล์ About มาโชว์ */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        





      </div>
    </BrowserRouter>
  );
}

export default App;