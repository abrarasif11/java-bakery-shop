import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Category from '../Category/Category';
import Banner2 from './Banner/Banner2';
import Banner3 from './Banner/Banner3';
import Banner1 from './Banner1/Banner1';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    const { dark } = useContext(AuthContext);
    useTitle('Home')
    const navigate = useNavigate();
    const handleAllCategory = () => {
        navigate("/allItems");
    };
    return (
        <div>
            <Banner1></Banner1>
            <Banner2></Banner2>
            <p className={`text-center font-josefin ${dark ? 'text-[#DC0000]' : 'text-black'} text-4xl font font-bold mt-20`}>Categories</p>
            <Category></Category>
            <div>
                <Link className='flex items-center justify-center
                       ' to='/allItems'>
                    <button
                        className="py-4 px-6 mt-20 m-2 font-josefin font-poppins text-xl text-white  font-medium rounded-lg bg-gradient-to-rounded-md bg-[#DC0000]
                       hover:bg-red-600	 hover:text-white"
                        onClick={handleAllCategory}
                    >
                        See All Items
                    </button>
                </Link>      
            </div>
            <Banner3></Banner3>
            <MessengerCustomerChat className="bg-[#DC0000]"
                pageId=""
                appId=""
                // htmlRef="<REF_STRING>"
            />,
        </div>
    );
};

export default Home;