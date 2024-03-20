import React from 'react';
import { Header, SideBar, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import './index.scss';

export const DashboardLayout = () => {
    return (
        <div className="layout">
            <Header />
            <div className="outlet">
                <SideBar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};
