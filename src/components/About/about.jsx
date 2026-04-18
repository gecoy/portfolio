import { Link } from "react-router-dom"; // อย่าลืม Import Link

export default function About() {
  return (
    // 1. พื้นหลังเต็มจอ และจัดให้อยู่กึ่งกลาง
    <div className="  flex items-center justify-center p-4s min-h-screen bg-base-100 text-base-content">

      {/* 2. สร้าง Card สีขาวมีเงา */}
      <div className="bg-white max-w-lg w-full p-10 rounded-2xl shadow-xl text-center">

        {/* 3. จัดตัวอักษรและใส่สีสัน */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-indigo-700 mb-4">
          ยินดีที่ได้รู้จัก!
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          ผมชื่อ Gulf(กลัฟ) เป็นนักศึกษา COM-SCI ครับ มีความสนใจในด้านการพัฒนาเว็บและกำลังมองหาโอกาสในการฝึกงานสหกิจ
        </p>

        {/* 4. อัปเกรดปุ่มกด */}
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          กลับหน้าหลัก
        </Link>

      </div>

    </div>

    
  );
}