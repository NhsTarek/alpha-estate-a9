import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import defaultUserPic from "../assets/user.png"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    


    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/errorpage">404 Page</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">AlphaEstate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>

            <div className="navbar-end">
                {
                    user? <div className="dropdown dropdown-end">
                        <div className="flex gap-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip " data-tip={user?.displayName || 'user name not found'}>
                                <div className="w-full rounded-full" >

                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || defaultUserPic } />

                                </div>
                                

                            </div>
                            <button onClick={() => handleSignOut()} className="btn btn-ghost">Logout</button>
                        </div>







                    </div>
                        : <Link to="/login">
                            <button className="btn btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;