import React, { useContext } from 'react';
import ceo from '../../assests/IMG-4772 (1).JPG'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
const AboutUs = () => {
    const { dark } = useContext(AuthContext);
    useTitle('About Us')
    return (
        <section className='font-josefin'>
            <h3 className={`text-3xl font-josefin ${dark ? 'text-white': 'text-black'} font-bold mt-10 mb-10`}>About <span className='text-[#DC0000]'> Java Bakery Shop</span></h3>
            <div className="max-w-xs mx-auto p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={ceo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className={`block  text-xl font-bold tracking-widest uppercase ${dark ? 'text-white': 'text-black'}`}>MD Fahim Abrar Asif</span>
                    <h2 className={`text-xl ${dark ? 'text-white': 'text-black'} font-semibold tracking-wide`}>Project Owner</h2>
                </div>
                <a target='_blank' className='mx-2 font-josefin' href="https://github.com/abrarasif11"><button className='bg-[#DC0000] font-semibold hover:text-white text-black rounded-lg px-2 py-2'>Github Link</button></a>
                <a target='_blank' href="https://fahim-abrar-asif-portfolio.netlify.app/"><button className='bg-[#DC0000] font-josefin hover:text-white font-semibold text-black rounded-lg px-2 py-2'>Portfolio Link</button></a>
            </div>
        </section>
    );
};

export default AboutUs;