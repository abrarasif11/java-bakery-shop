import React from 'react';

const Spinner = () => {
    return (
      <div className='bg-white'>
          <div className="flex mt-[340px] bg-white items-center justify-center space-x-2">
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
            <div className="w-7 h-7 rounded-full animate-pulse bg-red-700"></div>
        </div>
      </div>
    );
};

export default Spinner;