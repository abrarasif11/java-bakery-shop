import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = ({ review }) => {
    const { dark } = useContext(AuthContext);
    const { name, reviews } = review
    console.log(review);
    return (
        <section>
          
            <div className={`container font-josefin mt-10 text-center flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md ${dark ? 'divide-black': 'divide-white'} text-white ${dark ? 'bg-white': 'bg-black'}`}>
                <div className="flex space-x-4">
                    <div>
                        <h4 className={`font-semibold ${dark ? 'text-black': 'text-white'}`}><span className={`text-[#DC0000] `}>Username</span> - {name}</h4>
                    </div>
                </div>
                <div className={`p-4 space-y-2 text-sm ${dark ? 'text-black': 'text-white'}`}>
                    <p className='font-semibold text-xl'><span className='text-[#DC0000]'>Customer Reviews </span>- {reviews}</p>
                </div>
            </div>
        </section>

    );
};

export default MyReviews;