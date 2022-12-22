import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile font-poppins">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">See Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                                <li><Link to="/dashboard/allUsers" className='text-2xl'>All Users</Link></li>
                         
                        <li><Link to='/dashboard' className='text-2xl'>My Orders</Link></li>

                        <li><Link to='/dashboard/addItems' className='text-2xl'>Add A Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;