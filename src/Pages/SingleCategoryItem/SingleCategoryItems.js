import React from 'react';

const SingleCategoryItems = ({ singleItem, setSingleCategories }) => {
    const { picture, name, price } = singleItem
    return (
        <div className="max-w-xs rounded-md shadow-md font-josefin bg-slate-200 dark:text-gray-100">
            <img src={picture} alt="" className="object-cover object-center w-full  rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <h2 className="text-xl font-semibold tracking-wide">Price : {price}</h2>
                </div>
                <label 
                 htmlFor="order-modal" type="button"
                 className="flex items-center rounded-full justify-center w-full p-3 font-semibold tracking-wide  bg-red-700 text-black"
                 onClick={() => setSingleCategories(singleItem)}
                 >Order Now</label>
            </div>
        </div>
    );
};

export default SingleCategoryItems;