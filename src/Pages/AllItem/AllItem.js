import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllItems from './AllItems';
import AllItemsCategories from './AllItemsCategories';

const AllItem = () => {
    const { dark } = useContext(AuthContext);
    useTitle('All Items')
    const [allitems, setAllItems] = useState([]);
    const [categories, setCategories] = useState(null)
    useEffect(() => {
        fetch('https://java-bakery-shop-server.vercel.app/allcategories')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h3 className={`text-4xl  font-josefin ${dark ? 'text-white': 'text-black'}   mt-10 mb-10 font-bold`}>Our Items</h3>
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10'>
                {
                    allitems.map(allitem => <AllItems
                        key={allitem._id}
                        allitem={allitem}
                        setCategories={setCategories}
                    ></AllItems>)
                }
            </div>
            {
                <div>
                    {
                        categories &&
                        <AllItemsCategories
                        categories={categories}
                        ></AllItemsCategories>
                    }
                </div>
            }
            <h3 className={`mt-10 font-josefin ${dark ? 'text-white': 'text-black'}   text-xl font-semibold`}>*Vat is included in the price</h3>
        </div>
    );
};

export default AllItem;