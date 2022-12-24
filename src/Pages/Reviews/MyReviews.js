import React from 'react';

const MyReviews = ({ review }) => {
    const { name, reviews } = review
    console.log(review);
    return (
        <section>
          
            <div className="container font-josefin mt-10 text-center flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-white text-white bg-black">
                <div className="flex space-x-4">
                    <div>
                        <h4 className="font-semibold "><span className='text-red-700'>Username</span> - {name}</h4>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-white">
                    <p className='font-semibold text-xl'><span className='text-red-700'>Customer Reviews </span>- {reviews}</p>
                </div>
            </div>
        </section>

    );
};

export default MyReviews;