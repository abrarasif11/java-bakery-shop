import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        console.log({ email, password, username });
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("User Created Successfully")
                // saveUser(username, email);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div class="w-full font-titillium max-w-sm p-6 m-auto mx-auto mt-20 bg-gray-500 rounded-lg shadow-md dark:bg-gray-800">
            <h1 class="text-3xl font-semibold text-center text-black dark:text-white">Sign In</h1>

            <form onSubmit={handleSignUp} class="mt-6">
                <div className='mb-2'>
                    <label htmlFor="username" class="flex items-center justify-between text-sm text-black dark:text-gray-200">Username</label>
                    <input name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>
                <div>
                    <label htmlFor="email" class="flex items-center justify-between text-sm text-black dark:text-gray-200">Email</label>
                    <input name='email' type="email" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label htmlFor="password" class="block text-sm text-black dark:text-gray-200" required >Password</label>

                    </div>

                    <input name='password' type="password" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                    <button class=" w-full px-6 py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>
            <p class="mt-8 text-xs font-light text-center text-white"> Already have an account? <Link to="/login" class="font-medium text-white dark:text-gray-200 hover:underline">Log In</Link></p>
        </div>
    );
};

export default SignUp;