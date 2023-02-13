import React from 'react';
import { NavLink } from 'react-router-dom';
import useCurrentPageName from '../hooks/useCurrentPageName';

const Header = () => {
    const getCurrentPageName = useCurrentPageName();
    const pageName = getCurrentPageName();

    return (
        <>
            <header>
                <NavLink to='/'>뒤로가기</NavLink>
                <h1>{pageName}</h1>
            </header>
        </>
    );
};

export default Header;
