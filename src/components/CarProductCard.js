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
    if (carTagType === '인기') return 'popularity';
    else if (carTagType === '특가') return 'special-price';
    else if (carTagType === '신차') return 'new-car';
    else if (carTagType === '신차급') return 'new-car-level';
    else if (carTagType === '빠른대여') return 'fast-rental';
    else if (carTagType === '프리미엄') return 'premium';
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
                    <p className='car-discount-percent'>최대 할인율 {discountPercent}%</p>
                    <p className='car-price'>₩{formatPrice(price)}~/월</p>
                </div>
                <div className='car-etc-info'>
                    <p>{year}년</p>
                    <p>{formatDrivingDistance(drivingDistance)}km</p>
                    <p>{regionGroups.join(', ')}</p>
                </div>
                <div className='car-tag-box'>
                    {carTypeTags.map((carTypeTag, index) => {
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
