import React from 'react';

const NoCar = () => {
    return (
        <>
            <div className='no-result'>
                <h2 className='message result-message'>
                    선택하신 조건에 맞는 차량이 없습니다.
                    <br /> 준비된 다른 차량을 확인해 보세요!
                </h2>
            </div>
        </>
    );
};

export default NoCar;
