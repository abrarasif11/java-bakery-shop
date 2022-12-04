import React from 'react';

const Banner3 = () => {
    return (
        <section className="mt-10 bg-white dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://images.pexels.com/photos/1524336/pexels-photo-1524336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;