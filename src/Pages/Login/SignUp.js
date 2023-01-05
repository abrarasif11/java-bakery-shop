import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from '../../hooks/useTitle';
const SignUp = () => {
    useTitle('Sign Up')
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      //  console.log(name, photoURL, email, password);
  
      createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          form.reset();
          handleUpdateUserProfile(name, email, password);
          handleEmailVerification();
          toast.success('Please verify your email before login')
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        });
    }
  
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
    }
  
    const handleEmailVerification = () => {
      verifyEmail()
        .then(() => { })
        .catch(error => console.error(error));
    }
    return (
        <div class="w-full font-josefin max-w-sm p-6 m-auto mx-auto mt-20 bg-black rounded-lg shadow-md ">
            <h1 class="text-3xl font-semibold text-center text-white dark:text-white">Sign In</h1>

            <form onSubmit={handleSubmit} class="mt-6">
                <div className='mb-2'>
                    <label htmlFor="username" class="flex items-center justify-between text-sm text-white dark:text-gray-200">Username</label>
                    <input id='name' name='username' type="text" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>
                <div>
                    <label htmlFor="email" class="flex items-center justify-between text-sm text-white dark:text-gray-200">Email</label>
                    <input id='email' name='email' type="email" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label htmlFor="password" class="block text-sm text-white" required >Password</label>

                    </div>

                    <input id='password' name='password' type="password" class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div class="mt-6">
                    <button class=" w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>
            <p className='text-red-700'>{error}</p>
            <p class="mt-8 text-xs font-light text-center text-white"> Already have an account? <Link to="/login" class="font-medium text-white dark:text-gray-200 hover:underline">Log In</Link></p>
        </div>
    );
};

export default SignUp;