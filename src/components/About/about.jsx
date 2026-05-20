import { Link } from "react-router-dom";

import friends from "../../assets/friends.jpg";
import friends2 from "../../assets/friends2.jpg";
import friends3 from "../../assets/friends3.jpg";
import friends4 from "../../assets/friends4.jpg";
import me from "../../assets/me.png";
import bestfriend from "../../assets/bestfriend.jpg";
import jun1 from "../../assets/jun1.jpg";
import jun2 from "../../assets/jun2.jpg";
import ja1 from "../../assets/ja1.jpg";

export default function About() {
  
  const photos = [
    { id: 1, src: friends, alt: "ComSci" }, 
    { id: 2, src: friends2, alt: "jobless" },
    { id: 3, src: friends3, alt: "กิจกรรม" },
    { id: 4, src: friends4, alt: "ขอขมา A" },
    { id: 5, src: me, alt: "ทำทรง" },
    { id: 6, src: bestfriend, alt: "ด่างจอมซน" },
    { id: 7, src: jun1, alt: "จุนน้อยร้อยโล" },
    { id: 8, src: jun2, alt: "จุนย้วย" },
    { id: 9, src: ja1, alt: "จาซนให้ล่าย" },
  ];

  return (
    <div className="flex flex-col items-center p-4 py-12 min-h-screen bg-linear-to-br from-base-100 via-base-200 to-secondary/30 text-base-content">

      {/* ส่วนที่ 1: Card เนื้อหาหลัก */}
      <div className="bg-white/60 backdrop-blur-lg max-w-3xl w-full p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent mb-4">
            สวัสดีครับ ผมชื่อ Gulf ✌️
          </h1>
          <p className="text-lg text-primary font-semibold tracking-wide">
            Computer Science Student @ PSRU
          </p>
        </div>

        {/* --- ส่วนที่ดึงข้อมูลจาก Resume มาเล่าเรื่อง --- */}
        <div className="space-y-6 text-base-content/80 leading-relaxed text-left md:px-6 mb-10">
          <p>
            ผมเป็นนักศึกษาสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏพิบูลสงคราม (เกรดเฉลี่ย 3.51) ตอนนี้กำลังมองหาโอกาสในการฝึกงานสหกิจศึกษาครับ 
          </p>
          <p>
            ผมมีความหลงใหลในการทำ Web Development เป็นพิเศษ โดยเฉพาะการพัฒนาระบบ <strong>Backend ด้วยภาษา Go (Golang)</strong> ควบคู่ไปกับการสร้าง <strong>Frontend ด้วย React.js</strong> เพื่อให้ได้แอปพลิเคชันที่ตอบสนองไวและใช้งานได้จริง
          </p>
          
          {/* กล่องไฮไลต์ประสบการณ์ */}
          <div className="bg-base-200/50 p-6 rounded-2xl border border-base-300 shadow-inner mt-6">
            <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
              <span>🎯</span> ประสบการณ์และกิจกรรม
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <div>
                  <strong>PSRU Cyber Hackathon (มี.ค. 2026):</strong> เข้าร่วมแข่งขันแก้โจทย์ Cybersecurity, วิเคราะห์ Packet Capture และค้นหาเซิร์ฟเวอร์ Command and Control (C2)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▹</span>
                <div>
                  <strong>Customer Service @ The Pizza Company (2021-2023):</strong> ฝึกฝนทักษะการสื่อสาร การทำงานเป็นทีม และการแก้ปัญหาเฉพาะหน้าภายใต้ความกดดัน
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-accent hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 shadow-md"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>

      {/* ส่วนที่ 2: Gallery รูปภาพ */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-base-content/70">
          My Gallery & Activities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-square border border-white/40"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}