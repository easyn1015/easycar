import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='page-wrap home-wrap'>
                <div className='intro-box'>
                    <div className='bg-car'></div>
                    <p className='main-title'>
                        Discover the Journey,
                        <br /> Make it Your Destination.
                    </p>
                    <p className='sub-title'>Meet the most popular EasyCar plan now!</p>
                </div>
                <NavLink
                    to='/list'
                    className='btn-go'>
                    보러가기
                </NavLink>
            </div>
        </>
    );
};

export default Home;
