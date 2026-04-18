// 1. ต้อง Import ตัว <Link> ของ React Router มาใช้แทนแท็ก <a>
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-mist-500/80 shadow-sm sticky top-0 z-50 backdrop-blur-md">
            <div className="flex-1">
                {/* ถ้าอยากให้โลโก้ Gulf กดแล้วกลับหน้าแรกได้ ก็เปลี่ยนเป็น Link เหมือนกันครับ */}
                <Link to="/" className="btn btn-ghost text-xl">Gulf</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2">

                    {/* 2. เปลี่ยนแท็ก <a> เป็น <Link> และเปลี่ยน href เป็น to="/contact" */}


                    <li>

                        <details>
                            <summary>More</summary>
                            <ul className="bg-base-100 rounded-t-none p-1">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><a href="/#skills">Skills</a></li>
                                <li><a href="/#activities">Activities</a></li>
                            </ul>
                        </details>

                    </li>
                </ul>
                {/* theme */}
                <label className="toggle text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>
        </div>
    )
}