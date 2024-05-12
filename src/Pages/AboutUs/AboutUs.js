import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
const AboutUs = () => {
    const { dark } = useContext(AuthContext);
    useTitle('About Us')
    return (
        <div>
             <div className='font-josefin'>
            <h3 className={`text-4xl ${dark ? 'text-white': 'text-black'} font-josefin mt-10 font-bold`}>From food delivery to your daily convenience companion</h3>
            <p className={`text-xl ${dark ? 'text-white': 'text-black'} m-10`}>A subsidiary of Delivery Hero, Java Bakery Shop launched in 2023 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC</p>
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10 mb-20'>
                <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://images.unsplash.com/photo-1553607558-455f4310f6ec?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                        <h3 className='text-2xl text-[#DC0000] mt-10 font-semibold mb-2'>Frozen Drinks Specialist</h3>
                        <p className={`text-xl ${dark ? 'text-white': 'text-black'} font-semibold`}>1 Year of Experience</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md p-6 bg-black text-[#DC0000]">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                        <h3 className='text-2xl mt-10 font-semibold mb-2'>Coffee Specialist</h3>
                        <p className='text-xl font-semibold'>3 Years of Experience</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                        <h3 className='text-2xl text-[#DC0000] mt-10 font-semibold mb-2'>Pastries Specialist</h3>
                        <p className={`text-xl ${dark ? 'text-white': 'text-black'} font-semibold`}>2 Year of Experience</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;