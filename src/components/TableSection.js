import React from 'react';
import CarProductCard from './CarProductCard';

const TableSection = ({ cars }) => {
    return (
        <>
            <div className='card-table'>
                {cars.map((car, index) => (
                    <CarProductCard
                        key={index}
                        {...car}
                    />
                ))}
            </div>
        </>
    );
};

export default TableSection;
