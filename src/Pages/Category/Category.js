import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const Category = () => {
    const[categories, setCategories] = useState([]);
       
    useEffect(() => {
        fetch('https://java-bakery-shop-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
      <div className='grid mx-10 sm:grid-cols-3 gap-3 ml-10 sm:ml-3  mt-20'>
        {
            categories.map(category => <Categories
            key={category._id}
            category={category}
            ></Categories>)
        }
      </div>
    );
};

export default Category;