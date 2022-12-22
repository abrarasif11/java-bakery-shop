import React from 'react';

const Review = () => {
    return (
        <div className="flex mx-auto mt-20 flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                 
                </div>
                <div className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 bg-gray-100"></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md dark:
                    text-gray-900 bg-violet-400">Leave feedback</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <a rel="noopener noreferrer" href="#" className="text-sm text-gray-400">Maybe later</a>
            </div>
        </div>
    );
};

export default Review;