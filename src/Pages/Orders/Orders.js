import React, { useEffect, useState } from 'react';

const Orders = ({ order, handleStatusUpdate, handleDelete }) => {
    const { _id, picture,name,number,email,price,allitems } = order;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`https://java-bakery-shop-server.vercel.app/items/${allitems}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [allitems])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={picture} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{price}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                {/* <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button> */}
            </th>
        </tr>
    );
};

export default Orders;