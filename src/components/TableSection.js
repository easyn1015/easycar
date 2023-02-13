import React from 'react';
import CarProductCard from './CarProductCard';

const TableSection = ({ cars }) => {
    return (
        <>
            <div className='card-table'>
                {cars.map((car, index) => (
                    <CarProductCard
                        key={car.carClassId}
                        {...car}
                    />
                ))}
            </div>
        </>
    );
};

export default TableSection;
