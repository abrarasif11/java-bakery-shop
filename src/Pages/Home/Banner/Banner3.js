import React from 'react';
import { Link } from 'react-router-dom';

const Banner3 = () => {
    return (
        <section className="p-4 lg:p-8 mt-10 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col font-josefin overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-black">
                        <h3 className="text-3xl text-red-700 font-bold">We Always Try To Happy Our Customer</h3>
                        <p className="my-6 text-red-700">Try To Give Best Service</p>
                        <Link to='/reviews'><button type="button" className="self-start bg-red-700 rounded text-white px-2 py-2">Give FeedBack</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;