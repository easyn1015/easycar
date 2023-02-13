import React from 'react';

const Error = () => {
    return (
        <>
            <div className='no-result'>
                <h2 className='message error-message'>
                    오류가 발생했습니다.
                    <br /> 잠시 후 다시 시도해 주세요.
                </h2>
            </div>
        </>
    );
};

export default Error;
