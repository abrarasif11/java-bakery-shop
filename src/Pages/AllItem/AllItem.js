import React, { useEffect, useState } from 'react';
import AllItems from './AllItems';

const AllItem = () => {
    const [allitems, setAllItems] = useState([]);
    // const [categories, setCategories] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/allcategories')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h3 className='text-4xl  font-josefin mt-10 mb-10 font-bold'>Our Items</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10'>
                {
                    allitems.map(allitem => <AllItems
                        key={allitem._id}
                        allitem={allitem}
                    ></AllItems>)
                }
            </div>
            <h3 className='mt-10 font-josefin text-xl font-semibold'>*Vat is included in the price</h3>
        </div>
    );
};

export default AllItem;