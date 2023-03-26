import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import headerPhoto from '../../assests/clipart2362429.png'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from '../../hooks/useAdmin';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    const { user, logOut, dark, setDark } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const navigate = useNavigate();


    const handleLogOut = () => {
        logOut(navigate);
    };
    const menuItems = (
        <React.Fragment>
           
           
            <li>
                <Link
                    to="/reviews"
                    class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    Review
                </Link>
            </li>
            <li>
                <Link
                    to="/aboutUs"
                    class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    About Us
                </Link>
            </li>
            {user?.uid && (
                <li class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    <Link
                        to="/myReviews" >
                        My Reviews
                    </Link>
                </li>
            )}
            {user?.uid && (
                <li class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    <Link
                        to="/orders" >
                        My Orders
                    </Link>
                </li>
            )}
            {isAdmin && (
                <li class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    <Link
                        to="/dashboard" >
                        Dashboard
                    </Link>
                </li>
            )}

            {user?.uid ? (
                <li
                class="font-medium tracking-wide font-josefin text-black transition-colors duration-200 hover:text-white"
                
                    onClick={handleLogOut}
                >
                    <button>Logout</button>
                </li>
            ) : (
                <li class="font-medium font-josefin tracking-wide text-black transition-colors duration-200 hover:text-white"
                >
                    <Link to="/login">Login</Link>
                </li>
                
            )}
             <React.Fragment>
                <button className={` ${dark ? 'text-black' : 'text-black'} hover:text-white ml-[15px] sm:mb-2 mr-3`} onClick={() => setDark(!dark)}>
                    {
                        dark ? <MdDarkMode className="text-2xl"></MdDarkMode> : <BsFillSunFill className="text-2xl"></BsFillSunFill>
                    }
                </button>
            </React.Fragment>
            {user?.uid && (
                <div
                    className="tooltip ml-4 mb-1 lg:tooltip-left md:tooltip-right mt-1 dropdown dropdown-bottom dropdown-end"
                    data-tip={user?.displayName}
                >
                    <label tabIndex={0}>
                        {
                            
                            user?.photoURL ?
                                <img
                                    className="w-[36px] h-[36px] rounded-full mr-5"
                                    src={user?.photoURL}
                                    alt=""
                                />
                                :
                                <FaUserCircle className={`${dark ? 'text-black' : 'text-black'} w-[30px] mt-1 mr-2 h-[40px]`}></FaUserCircle>
                        }
                        
                    </label>

                </div>
            )}
        </React.Fragment>
    );

    return (
        <div className="navbar bg-[#DC0000] flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#DC0000] rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <div className="flex  items-center">

                    <Link
                        to="/"
                        className="btn btn-ghost  font-josefin font-semibold normal-case text-2xl"
                    >
                        <img className='w-[55px]' src={headerPhoto} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
        </div>
    );
};

export default Header;