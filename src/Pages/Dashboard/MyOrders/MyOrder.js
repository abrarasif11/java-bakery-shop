import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/items?email=${user?.email}`;
    const { data: items = [] } = useQuery({
        queryKey: ['items', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='font-josefin'>
            <h1 className='text-4xl font-bold mt-10 mb-5 text-red-700 w-fit px-2 py-2 ml-4 '>Order List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Contact</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i+1}</th>
                                    <th className='text-red-700'>{item.email}</th>
                                    <td className='text-red-700'>{item.price}</td>
                                    <td className='text-red-700'>{item.number}</td>
                                    <td className='text-red-700'>{item.meeting}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;