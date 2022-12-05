import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="w-full max-w-sm p-6 m-auto mx-auto mt-20 bg-gray-500 rounded-lg shadow-md dark:bg-gray-800">
            <h1 class="text-3xl font-semibold text-center text-black dark:text-white">Log in</h1>

            <form class="mt-6">
                <div>
                    <label htmlFor="username" class="flex items-center justify-between text-sm text-black dark:text-gray-200">Email</label>
                    <input type="email" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label htmlFor="password" class="block text-sm text-black dark:text-gray-200" required >Password</label>
                       
                    </div>

                    <input type="password" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                    <button class=" w-full px-6 py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Log in
                    </button>
                </div>
            </form>

            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <p  class="text-xs text-center text-black uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </p>

                <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div class="flex items-center mt-6 -mx-2">
                <button type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span class="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

              
            </div>

            <p class="mt-8 text-xs font-light text-center text-white"> Don't have an account? <Link to="/signup" class="font-medium text-white dark:text-gray-200 hover:underline">Sign Up</Link></p>
        </div>
    );
};

export default Login;