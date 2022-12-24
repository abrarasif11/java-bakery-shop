import React from 'react';

const Spinner = () => {
    return (
        <div className="flex mt-[340px] items-center justify-center space-x-2">
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
        </div>
    );
};

export default Spinner;