import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-red-700"></div>
        </div>
    );
};

export default Spinner;