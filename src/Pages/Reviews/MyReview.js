import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviews from './MyReviews';

const MyReview = () => {
    const reviews = useLoaderData()
    return (
        <div>
              <div>
                <h3 className='text-4xl font-josefin font-bold text-black mt-10'>See Customer Reviews</h3>
            </div>
            {
                reviews.map(reviewer => <MyReviews
                key={reviewer._id}
                review={reviewer}
                ></MyReviews>)
            }
        </div>
    );
};

export default MyReview;