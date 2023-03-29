import React from 'react';

function formatPrice(num) {
    return (Math.round(num / 100) * 100).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function formatDrivingDistance(num) {
    if (num >= 10000) {
        return `${Math.round(num / 10000)}만`;
    } else if (num >= 1000) {
        return `${Math.round(num / 1000)}천`;
    }
    return num;
}

function mapTag(carTagType) {
    if (carTagType === 'Popularity') return 'popularity';
    else if (carTagType === 'Special Price') return 'special-price';
    else if (carTagType === 'New Car') return 'new-car';
    else if (carTagType === 'New Car Level') return 'new-car-level';
    else if (carTagType === 'Fast Rental') return 'fast-rental';
    else if (carTagType === 'Premium') return 'premium';
}

const CarProductCard = (props) => {
    const {
        carClassId,
        carClassName,
        carModel,
        image,
        drivingDistance,
        year,
        price,
        discountPercent,
        regionGroups,
        carTypeTags,
    } = props;

    return (
        <div className='card'>
            <div className='img-box'>
                <img
                    src={image}
                    alt={carClassName}
                />
            </div>
            <div className='car-info-box'>
                <h2 className='car-name'>{carClassName}</h2>
                <div className='car-price-box'>
                    <p className='car-discount-percent'>Maximum discount rate {discountPercent}%</p>
                    <p className='car-price'>₩{formatPrice(price)}~/month</p>
                </div>
                <div className='car-etc-info'>
                    <p>{year}년</p>
                    <p>{formatDrivingDistance(drivingDistance)}km</p>
                    <p>{regionGroups && regionGroups.join(', ')}</p>
                </div>
                <div className='car-tag-box'>
                    {carTypeTags &&
                        carTypeTags.map((carTypeTag, index) => {
                            return (
                                <p
                                    key={index}
                                    className={`car-tag car-tag-${mapTag(carTypeTag)}`}>
                                    {carTypeTag}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CarProductCard;
