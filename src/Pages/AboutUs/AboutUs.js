import React from 'react';
import ceo from '../../assests/IMG-4772 (1).JPG'
const AboutUs = () => {
    return (
        <section>
            <h3 className='text-3xl font-josefin font-bold mt-10 mb-10'>About <span className='text-red-700'> Java Bakery Shop</span></h3>
            <div className="max-w-xs mx-auto p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={ceo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
                    <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                </div>
                <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </section>
    );
};

export default AboutUs;