import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assests/404-SVG-Animated-Page-Concept-768x435.png'
const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto mt-20' src={error} alt="" />
            <Link to={
                '/'
            }>
                <button type='button' className='bg-red-700 text-white font-josefin px-2 py-2 rounded-lg'>Back To Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;