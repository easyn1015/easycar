import React from 'react';
import { Outlet } from 'react-router-dom';
import useCurrentPageName from '../hooks/useCurrentPageName';
import Header from './Header';

const Layout = () => {
    const getCurrentPageName = useCurrentPageName();
    const pageName = getCurrentPageName();

    return (
        <>
            {pageName !== '홈' && <Header />}
            <Outlet />
        </>
    );
};

export default Layout;
