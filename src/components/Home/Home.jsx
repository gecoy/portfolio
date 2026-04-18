import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import profileImg from "../../assets/gulf.jpg";
import allyo from "../../assets/3.JPG";
import allyo1 from "../../assets/allyo.JPG";
import bannerImg from "../../assets/port.png";
import hack01 from "../../assets/HACK001.JPG";
import Ning2 from "../../assets/2Ning.jpg";

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        // กล่องหลัก: คุมความกว้างและสีพื้นหลัง (เอา space-y ออก เพื่อใช้ Section จัดการแทน)
        <div className="max-w-5xl mx-auto p-4 pb-20 bg-base-200 min-h-screen">

            {/* ------------------------------------------- */}
            {/* Section 1: Banner & About Me */}
            <section id="about" className="pt-4 pb-8">
                {/* Banner */}
                <div className="w-full mb-8">
                    <img
                        src={bannerImg}
                        alt="banner"
                        className="w-full h-64 object-cover rounded-3xl shadow-md"
                    />
                </div>

                {/* Card 1: แนะนำตัว */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-1/3 p-6">
                        <img
                            src={profileImg}
                            alt="Thanawart"
                            className="rounded-2xl shadow-sm w-full h-auto object-cover"
                        />
                    </figure>
                    <div className="card-body lg:w-2/3 justify-center">
                        <h2 className="card-title text-3xl font-bold mb-2">Hi, I'm Tanawat (Gulf) 👋</h2>
                        <p className="text-gray-600 grow-0 leading-relaxed">
                            นักศึกษาปริญญาตรีสายไอทีที่กำลังมองหาโอกาสในการฝึกประสบการณ์วิชาชีพ (สหกิจศึกษา)
                            มีความสนใจในการพัฒนาเว็บไซต์ทั้งส่วน Frontend และระบบ Backend เพื่อสร้างแอปพลิเคชันที่ใช้งานได้จริง
                            <br /><br />
                            <span className="font-semibold px-3 py-1 bg-primary/10 text-primary rounded-lg">GPA 3.49</span>
                        </p>

                        <div className="card-actions justify-end mt-4">
                            <a href="https://github.com/gecoy" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-outline">ดู GitHub</button>
                            </a>
                            <a href={Ning2} download>
                                <button className="btn btn-primary">ดาวน์โหลด Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* เส้นคั่น 1 */}
            <div className="divider text-gray-400 my-6">✨ Tech Stack & Skills ✨</div>

            {/* ------------------------------------------- */}
            {/* Section 2: Skills */}
            <section id="skills" className="scroll-mt-24 pb-8">
                {/* Card 2: ทักษะ */}
                <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Tech Stack & Skills</h2>

                        <div className="mb-3">
                            <span className="font-semibold block mb-2 text-gray-700">Frontend</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="badge badge-primary badge-outline badge-lg">HTML & CSS</div>
                                <div className="badge badge-primary badge-outline badge-lg">JavaScript</div>
                                <div className="badge badge-primary badge-outline badge-lg">React.js</div>
                                <div className="badge badge-primary badge-outline badge-lg">Tailwind CSS</div>
                            </div>
                        </div>

                        <div className="mb-3 mt-2">
                            <span className="font-semibold block mb-2 text-gray-700">Backend & Database</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="badge badge-secondary badge-outline badge-lg">Go (Golang)</div>
                                <div className="badge badge-secondary badge-outline badge-lg">PostgreSQL</div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <span className="font-semibold block mb-2 text-gray-700">Tools & Version Control</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="badge badge-accent badge-outline badge-lg">Git & GitHub</div>
                                <div className="badge badge-accent badge-outline badge-lg">Vite</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* เส้นคั่น 2 */}
            <div className="divider text-gray-400 my-6">🚀 Experience</div>

            {/* ------------------------------------------- */}
            {/* Section 3: ประสบการณ์ (Hackathon) */}
            <section id="activities" className="scroll-mt-24 pb-8">
                {/* Card 3: Hackathon */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-2/5 p-6">
                        <img
                            src={allyo}
                            alt="PSRU Cyber Hackathon"
                            className="rounded-2xl shadow-sm w-full h-auto object-cover"
                        />
                    </figure>
                    <div className="card-body lg:w-3/5 text-left justify-center">
                        <div className="badge badge-secondary mb-2">Experience</div>
                        <h2 className="card-title text-2xl mb-2">🏆 PSRU CYBER HACKATHON (2026)</h2>
                        <p className="text-gray-600 leading-relaxed grow-0">
                            ประยุกต์ใช้ทักษะการวิเคราะห์เพื่อแก้โจทย์ปัญหาด้านความปลอดภัยไซเบอร์ (Capture The Flag - CTF)
                            และเรียนรู้แนวทางการตรวจสอบช่องโหว่ของระบบ (Penetration Testing) <br /><br />
                            ได้ฝึกฝนการทำงานเป็นทีมและการตัดสินใจภายใต้ข้อจำกัดของเวลา
                            <span className="font-semibold text-primary block mt-2">✨ ผลงาน: ลำดับที่ 18 จาก 43 ทีม</span>
                        </p>
                        
                        <div className="card-actions justify-end mt-4">
                            <button
                                className="btn btn-secondary"
                                onClick={() => document.getElementById('gallery_modal').showModal()}
                            >
                                ดูรูปภาพกิจกรรม
                            </button>

                            {/* Modal หลัก (แกลเลอรี) */}
                            <dialog id="gallery_modal" className="modal">
                                <div className="modal-box max-w-3xl">
                                    <h3 className="font-bold text-lg mb-4">รูปภาพกิจกรรม</h3>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <img
                                            src={hack01}
                                            className="rounded-lg cursor-pointer hover:scale-105 transition"
                                            onClick={() => document.getElementById('img1').showModal()}
                                        />
                                        <img
                                            src={allyo1}
                                            className="rounded-lg cursor-pointer hover:scale-105 transition"
                                            onClick={() => document.getElementById('img2').showModal()}
                                        />
                                    </div>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">ปิด</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            {/* Modal ย่อย (ขยายรูปที่ 1) */}
                            <dialog id="img1" className="modal">
                                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                                    <img src={hack01} className="w-full rounded-lg" />
                                    <div className="modal-action mt-2">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black/50 hover:bg-black/80">✕</button>
                                        </form>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            {/* Modal ย่อย (ขยายรูปที่ 2) */}
                            <dialog id="img2" className="modal">
                                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                                    <img src={allyo1} className="w-full rounded-lg" />
                                    <div className="modal-action mt-2">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black/50 hover:bg-black/80">✕</button>
                                        </form>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}