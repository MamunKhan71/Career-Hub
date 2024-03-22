import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-0">
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="font-black text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="navbar menu-horizontal px-1 font-medium flex gap-8">
                        <li><NavLink to="/">Statistics</NavLink></li>
                        <li><NavLink to="/saf">Applied Jobs</NavLink></li>
                        <li><NavLink to="/saf">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="font font-extrabold text-white btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;