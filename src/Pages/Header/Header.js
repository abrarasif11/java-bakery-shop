import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import headerPhoto from '../../assests/clipart2362429.png'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from '../../hooks/useAdmin';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err));
    }
    return (
        <div class="bg-red-700 font-josefin">
            <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/"
                                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/orders"
                                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                            >
                                Orders
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to="/reviews"
                                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                            >
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/"
                    >
                        <div className='flex items-center'>
                            <img className='w-[80px] ' src={headerPhoto} alt="" />
                        </div>

                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/aboutUs"
                                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            {
                                user?.uid ?
                                    <div className='flex justify-center items-center'>
                                        <Link
                                            to="/myReviews"
                                            className="font-medium mr-6 tracking-wide text-black transition-colors duration-200 hover:text-white"
                                        >
                                            My Reviews

                                        </Link>
                                        {
                                            isAdmin && <>
                                                <Link
                                                    to="/dashboard"
                                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                >
                                                    Dashboard

                                                </Link>
                                            </>
                                        }

                                        <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>

                                        <button
                                            onClick={handleLogout}
                                            className="font-medium tracking-wide ml-10 bg-white hover:bg-black hover:text-white px-2  rounded py-2  text-black transition-colors duration-200 "
                                        >
                                            Log Out
                                        </button>

                                    </div>
                                    :
                                    <Link
                                        to="/login"

                                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                    >
                                        Log in
                                    </Link>
                            }
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-black" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-red-700 border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to='/'
                                                class="inline-flex items-center"
                                            >
                                                <img className='w-[90px]' src={headerPhoto} alt="" />
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-black" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to="/"
                                                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/reviews"
                                                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                >
                                                    Reviews
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link
                                                    to="/orders"
                                                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                >
                                                    Orders
                                                </Link>
                                            </li> */}
                                            <li>
                                                <Link
                                                    to="/aboutUs"
                                                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                {
                                                    user?.uid ?
                                                        <div className='flex justify-center items-center'>
                                                            <Link
                                                                to="/myReviews"
                                                                className="font-medium mr-6 tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                            >
                                                                My Reviews

                                                            </Link>
                                                            {
                                                                isAdmin && <>
                                                                    <Link
                                                                        to="/dashboard"
                                                                        className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                                    >
                                                                        Dashboard

                                                                    </Link>
                                                                </>
                                                            }
                                                            <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                                            <button
                                                                onClick={handleLogout}
                                                                className="font-medium tracking-wide ml-10 bg-white hover:bg-black hover:text-white px-2  rounded py-2  text-black transition-colors duration-200 hover:text-teal-accent-400"
                                                            >
                                                                Log Out
                                                            </button>

                                                        </div>
                                                        :
                                                        <Link
                                                            to="/login"

                                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-white"
                                                        >
                                                            Log in
                                                        </Link>
                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;