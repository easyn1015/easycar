import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='page-wrap home-wrap'>
                <div className='intro-box'>
                    <div className='bg-car'></div>
                    <p className='main-title'>
                        쏘카를 더 오래,
                        <br /> 내 차처럼
                    </p>
                    <p className='sub-title'>지금 가장 인기 많은 쏘카플랜을 만나보세요!</p>
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
