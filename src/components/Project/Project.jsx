import porty from "../../assets/porty.jpg";
import nba from "../../assets/nba.jpg";

export default function Project() {
  return (
    <section id="projects" className="scroll-mt-24 pb-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      {/* Grid สำหรับเรียงการ์ดโปรเจกต์ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ================= โปรเจกต์ที่ 1: Web Portfolio ================= */}
        <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary">
          <figure className="px-4 pt-4">
            <div className="w-full h-48 bg-base-300 rounded-xl flex items-center justify-center text-base-content/50 border border-base-200">
              <img src={porty} className="w-full rounded-lg" />
            </div>
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold">Personal Web Portfolio</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่กำลังใช้งานอยู่นี้ พัฒนาขึ้นเพื่อนำเสนอประวัติ ทักษะ และผลงาน เน้นการออกแบบที่สะอาดตา โหลดไว และรองรับการแสดงผลทุกหน้าจอ (Responsive)
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="badge badge-primary badge-outline">React.js</div>
              <div className="badge badge-primary badge-outline">Tailwind CSS</div>
              <div className="badge badge-primary badge-outline">DaisyUI</div>
            </div>
            
            <div className="card-actions justify-end mt-auto pt-4 border-t border-base-200">
              <a href="https://gulfport.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
            </div>
          </div>
        </div>

        {/* ================= โปรเจกต์ที่ 2: NBA Dashboard (ปรับเป็นสี Primary แล้ว) ================= */}
        <div className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary">
          <figure className="px-4 pt-4">
            <div className="w-full h-48 bg-base-300 rounded-xl flex items-center justify-center text-base-content/50 border border-base-200">
              <img src={nba} className="w-full rounded-lg" />
            </div>
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold">NBA Stats Dashboard</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Web Application สำหรับติดตามและแสดงสถิตินักกีฬา NBA นำเสนอผ่าน Dashboard ที่ออกแบบให้ทันสมัยและใช้งานง่ายด้วย React.js และ Tailwind CSS โดยทำงานร่วมกับระบบ Backend RESTful API และฐานข้อมูล PostgreSQL ที่พัฒนาขึ้นด้วยภาษา Go เพื่อจัดการและส่งต่อข้อมูลสถิติมาแสดงผลบนหน้าเว็บ
            </p>
            
            {/* ปรับเป็นสี primary ทั้งหมดเพื่อให้เข้าชุดกัน */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="badge badge-primary badge-outline">React.js</div>
              <div className="badge badge-primary badge-outline">Go (Golang)</div>
              <div className="badge badge-primary badge-outline">PostgreSQL</div>
              <div className="badge badge-primary badge-outline">Tailwind CSS</div>
              <div className="badge badge-primary badge-outline">Vercel & Railway</div>
            </div>
            
            {/* คุมโทนปุ่มด้วยสี primary สวยๆ เลยครับ */}
            <div className="card-actions justify-end mt-auto pt-4 border-t border-base-200">
              <a href="https://nba-dashboard-weld.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}