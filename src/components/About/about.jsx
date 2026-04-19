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
  // สร้าง Array เก็บข้อมูลรูปภาพ (คุณ Gulf เปลี่ยน src เป็นพาร์ทรูปจริงได้เลย เช่น "/images/me-1.jpg")
  const photos = [
    { id: 1, src: friends, alt: "ComSci" }, // ลบ "" ออก
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
    // เปลี่ยนจากแค่ justify-center เป็น flex-col เพื่อให้เนื้อหาเรียงลงมาด้านล่างได้
    <div className="flex flex-col items-center p-4 py-12 min-h-screen bg-linear-to-br from-base-100 via-base-200 to-secondary/30 text-base-content">

      {/* ส่วนที่ 1: Card เนื้อหาหลัก (ปรับความกว้างนิดหน่อยให้ดูสมดุล) */}
      <div className="bg-white/60 backdrop-blur-lg max-w-2xl w-full p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-white/50 mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent mb-6">
          สวัสดีครับ ^^
        </h1>
        <p className="text-lg text-base-content/80 leading-relaxed mb-10">
          ผมชื่อ Gulf (กลัฟ) เป็นนักศึกษา COM-SCI ครับ มีความสนใจในด้านการพัฒนาเว็บและกำลังมองหาโอกาสในการฝึกงานสหกิจ
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-accent hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
        >
          กลับหน้าหลัก
        </Link>
      </div>

      {/* ส่วนที่ 2: Gallery รูปภาพ */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-base-content/70">
          My Gallery & Activities
        </h2>

        {/* Grid Layout: มือถือแสดง 2 รูป/แถว, จอใหญ่แสดง 3 รูป/แถว */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-square border border-white/40"
            >
              {/* รูปภาพ (ใช้ object-cover เพื่อไม่ให้รูปยืดหดผิดสัดส่วน) */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay: ข้อความจะโผล่มาตอนเอาเมาส์ไปชี้ (Hover) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}