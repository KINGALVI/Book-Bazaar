import { Link, NavLink } from "react-router-dom";
import "./HeaderSection.css";

const HeaderSection = () => {

    return (
        <>
            <div className="navbar bg-neutral text-amber-50 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-neutral text-amber-50 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/Listed-Book"}>Listed Book</NavLink></li>
                            <li><NavLink to={"/Page-To-Load"}>Page To Load</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn-ghost text-xl"><b>Book Bazaar</b></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/Listed-Book"}>Listed Book</NavLink></li>
                        <li><NavLink to={"/Page-To-Load"}>Page To Load</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default HeaderSection;