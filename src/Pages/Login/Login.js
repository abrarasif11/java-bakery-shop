import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from '../../hooks/useTitle';
const Login = () => {
    const { dark } = useContext(AuthContext);
    useTitle('Login')
    const navigate = useNavigate();
    navigate("/");
    const { user, signIn, googleSignIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // navigate('/')
        console.log({ email, password });

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className={`w-full font-josefin max-w-sm p-6 m-auto mx-auto mt-20 ${dark ? 'bg-gray-800': 'bg-black'} rounded-lg shadow-md `}>
            <h1 className="text-3xl font-semibold text-center text-white">Log in</h1>
            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label htmlFor="email" className="flex items-center justify-between text-sm text-white">Email</label>
                    <input id='email' name='email' type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-white dark:text-gray-200" required >Password</label>
                    </div>
                    <input id='password' name='password' type="password" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className="mt-6">
                    <button className=" w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DC0000] rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Log in
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <p className="text-xs text-center text-white uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </p>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>
            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>
                    <span className="hidden mx-2 sm:inline">Log in with Google</span>
                </button>
            </div>
            <p className="mt-8 text-xs font-light text-center text-white"> Don't have an account? <Link to="/signup" className="font-medium text-white dark:text-gray-200 hover:underline">Sign Up</Link></p>
            {/* <p className='text-red-700 mt-7 mb-7'> {error}</p> */}
        </div>
    );
};

export default Login;