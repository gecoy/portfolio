export default function Contact() {
  return (
    // จัดให้อยู่กึ่งกลางหน้าจอ
    <div className="max-w-3xl mx-auto p-4 py-12 bg-base-200 min-h-screen flex flex-col items-center justify-center">
      
      {/* หัวข้อหน้า */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-base-content mb-2">Get In Touch</h1>
        <p className="text-gray-500">ช่องทางการติดต่อสำหรับพูดคุยหรือสอบถามรายละเอียดเพิ่มเติม</p>
      </div>

      {/* การ์ดข้อมูลการติดต่อ (จัดให้อยู่ตรงกลาง) */}
      <div className="card bg-base-100 shadow-xl w-full max-w-lg border-t-4 border-primary">
        <div className="card-body p-8 space-y-6">
          
          {/* Email */}
          <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <a href="mailto:your.email@gmail.com" className="font-bold text-lg text-base-content hover:text-primary">tanawat2302@gmail.com</a>
            </div>
          </div>

          {/* Phone (เพิ่มให้เป็นตัวเลือก) */}
          <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="bg-success/10 p-4 rounded-full text-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Phone</p>
              <p className="font-bold text-lg text-base-content">+66 80-236-6719</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="bg-secondary/10 p-4 rounded-full text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Location</p>
              <p className="font-bold text-lg text-base-content">Phitsanulok, Thailand</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-6 p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="bg-neutral/10 p-4 rounded-full text-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">GitHub</p>
              <a href="https://github.com/gecoy" target="_blank" rel="noreferrer" className="font-bold text-lg text-base-content hover:text-primary transition-colors">
                github.com/gecoy
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}