import React from 'react';

const Loading = () => {
    return (
        <>
            <div>
                <div className='loading-overlay'>
                    <div className='spinner' />
                    <p>
                        차량 리스트를 불러오는 중입니다.
                        <br /> 잠시만 기다려주세요.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Loading;
