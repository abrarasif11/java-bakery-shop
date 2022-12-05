import React from 'react';
import Category from '../Category/Category';
import Banner2 from './Banner/Banner2';
import Banner3 from './Banner/Banner3';
import Banner1 from './Banner1/Banner1';

const Home = () => {
    return (
        <div>
          <Banner1></Banner1>
          <Banner2></Banner2>
          <p className='text-center text-4xl font-bold mt-20'>Categories</p>
          <Category></Category>
          <Banner3></Banner3>
        </div>
    );
};

export default Home;