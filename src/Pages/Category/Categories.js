import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ category }) => {
     const{name, picture} = category
     console.log(category);
     const navigate = useNavigate()
     const handleOneCategory = (id) => {
         navigate(`/categories/${id}`);
     };
    return (
        <div class="flex font-titillium hover:scale-105 transition-all flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img src={picture} alt="" />
            </div>

            <div class="w-56 -mt-10 overflow-hidden rounded-lg shadow-lg md:w-64 bg-[#DC0000]">
                <h3 class="py-2 font-bold tracking-wide text-center text-white uppercase dark:text-white">{name}</h3>
                <div class="flex items-center justify-between px-3 py-2 bg-black">
                    <button onClick={() => handleOneCategory(`${category.category_id}`)} className="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#DC0000] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">See Items</button> 
                </div>
            </div>
        </div>
    );
};

export default Categories;