import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryItems from './SingleCategoryItems';

const SingleCategoryItem = () => {
    const singleItems = useLoaderData()
    console.log(singleItems);
    return (
        <div className='grid mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ml-20'>
            {
                singleItems.map(singleItem => <SingleCategoryItems
                key={singleItem._id}
                singleItem={singleItem}
                ></SingleCategoryItems>)
            }
        </div>
    );
};

export default SingleCategoryItem;