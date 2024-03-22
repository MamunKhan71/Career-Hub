import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/statistics" className="text-[#757575]">Statistics</NavLink></li>
        <li><NavLink to="/applied-jobs" className="text-[#757575]">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog" className="text-[#757575]">Blog</NavLink></li>
    </>
    return (
        <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
            <div className="navbar px-0 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="font-black text-xl"><NavLink to="/">CareerHub</NavLink></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="navbar menu-horizontal px-1 font-medium flex gap-8">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="font font-extrabold text-white btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">Start Applying</a>
                </div>
            </div>
            <div>
                <Header></Header>
            </div>
        </div>
    );
};

export default Navbar;