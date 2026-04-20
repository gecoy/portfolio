import cert1 from "../../assets/cert1.jpg";
import cert2 from "../../assets/cert2.jpg";
import cert3 from "../../assets/cert3.jpg";
import cert4 from "../../assets/cert4.jpg";
import cert5 from "../../assets/cert5.jpg";
import cert6 from "../../assets/cert6.jpg";

export default function Certificate() {
    return (
        <section id="certificates" className="scroll-mt-24 pb-8">
            <h2 className="text-3xl font-bold text-center mb-8">Certificates & Awards</h2>

            {/* Grid แสดงรูปใบเซอร์ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* ================= การ์ดใบที่ 1 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert2').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert2} 
                            alt="Certificate 2" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">Professional IT Project Management</p>
                    </div>
                </div>

                {/* ================= การ์ดใบที่ 2 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert1').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert1} 
                            alt="Certificate 1" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">PSRU Cyber Hackathon</p>
                    </div>
                </div>


                {/* ================= การ์ดใบที่ 3 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert3').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert3} 
                            alt="Certificate 3" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">Foundational Knowledge of AI and ML</p>
                    </div>
                </div>


                {/* ================= การ์ดใบที่ 4 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert4').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert4} 
                            alt="Certificate 4" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">Generative AI and Prompt Engineering</p>
                    </div>
                </div>



                {/* ================= การ์ดใบที่ 5 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert5').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert5} 
                            alt="Certificate 5" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">Artificial Intelligence for Lifelong Learning</p>
                    </div>
                </div>



                {/* ================= การ์ดใบที่ 6 ================= */}
                <div 
                    className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => document.getElementById('modal_cert6').showModal()}
                >
                    <figure className="px-4 pt-4">
                        <img 
                            src={cert6} 
                            alt="Certificate 6" 
                            className="rounded-xl border border-base-200 object-cover h-56 w-full" 
                        />
                    </figure>
                    <div className="card-body items-center text-center p-4">
                        {/* เปลี่ยนชื่อใบเซอร์ตรงนี้ */}
                        <p className="font-medium text-sm text-gray-600">PSRU Digital Test</p>
                    </div>
                </div>
            </div>


            {/* ================= โซนหน้าต่าง Modal ขยายรูป ================= */}
            
            {/* Modal สำหรับใบที่ 2 (id ต้องตรงกับตอน onClick) */}
            <dialog id="modal_cert2" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert2} className="w-full rounded-lg" alt="Zoom Cert 1" />
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

            {/* Modal สำหรับใบที่ 1 (id ต้องตรงกับตอน onClick) */}
            <dialog id="modal_cert1" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert1} className="w-full rounded-lg" alt="Zoom Cert 2" />
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


            {/* Modal สำหรับใบที่ 3 (id ต้องตรงกับตอน onClick) */}
            <dialog id="modal_cert3" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert3} className="w-full rounded-lg" alt="Zoom Cert 2" />
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


            
            <dialog id="modal_cert4" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert4} className="w-full rounded-lg" alt="Zoom Cert 2" />
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


            
            <dialog id="modal_cert5" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert5} className="w-full rounded-lg" alt="Zoom Cert 2" />
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


            
            <dialog id="modal_cert6" className="modal">
                <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
                    <img src={cert6} className="w-full rounded-lg" alt="Zoom Cert 2" />
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

        </section>
    );
}