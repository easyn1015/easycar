import React, { useRef, useState } from 'react';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

const filterOptions = [
    {
        label: 'Car Model',
        options: ['All', 'Electric', 'Mid-Size', 'SUV', 'Minivan', 'Compact'],
    },
    {
        label: 'Price Range',
        options: ['All', 'Less than $20,000', '$20,000 - $30,000', '$30,000 - $40,000', 'Over $40,000'],
    },
    {
        label: 'Region',
        options: [
            'All',
            'San Francisco Bay Area',
            'Los Angeles',
            'San Diego',
            'Sacramento',
            'New York',
            'Boston',
            'Miami',
        ],
    },
    {
        label: 'Tags',
        options: [
            'All',
            'Family',
            'Safe',
            'Comfort',
            'Electric',
            'Luxury',
            'All-Wheel Drive',
            'Spacious',
            'Fuel-Efficient',
        ],
    },
];

const FilterSection = ({ filters, setFilters }) => {
    const [openStates, setOpenStates] = useState({
        carModel: false,
        regionGroups: false,
        price: false,
    });

    // Use a useHorizontalScroll function to make the "filterSectionRef" scrollable horizontally
    const filterSectionRef = useRef(null);
    useHorizontalScroll(filterSectionRef);

    const resetFilters = () => {
        setFilters({
            carModel: [],
            regionGroups: [],
            price: null,
            popularity: false,
            specialPrice: false,
            newCar: false,
            newCarLevel: false,
            fastRental: false,
            premium: false,
        });
    };

    // "handleFilterOptionToggle" is a function that toggles the visibility of the filter options
    const handleFilterOptionToggle = (filterOption) => {
        // Disable scrolling on "body" and ".card-table-wrap" by adding "no-scroll" class if "filterOption" is "carModel", "regionGroups", or "price".
        if (['carModel', 'regionGroups', 'price'].includes(filterOption)) {
            document.body.classList.add('no-scroll');
            document.querySelector('.card-table-wrap').classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            document.querySelector('.card-table-wrap').classList.remove('no-scroll');
        }
        setOpenStates({
            ...openStates,
            carModel: filterOption === 'carModel' ? !openStates.carModel : false,
            regionGroups: filterOption === 'regionGroups' ? !openStates.regionGroups : false,
            price: filterOption === 'price' ? !openStates.price : false,
        });
    };
    const handleCarModelFilterChange = (event) => {
        const selected = Array.from(
            document.querySelectorAll("#carModel input[type='checkbox']:checked"),
            (item) => item.value
        );
        setFilters((prevFilters) => ({ ...prevFilters, carModel: selected }));
    };

    const handleRegionGroupsFilterChange = (event) => {
        const selected = Array.from(
            document.querySelectorAll("#regionGroups input[type='checkbox']:checked"),
            (item) => item.value
        );
        setFilters((prevFilters) => ({ ...prevFilters, regionGroups: selected }));
    };

    const handlePriceFilterChange = (event) => {
        let value = event.target.value;
        if (value === '낮은 가격 순') value = 'asc';
        else if (value === '높은 가격 순') value = 'desc';
        else value = null;
        setFilters((prevFilters) => ({ ...prevFilters, price: value }));
    };

    const handlePopularityFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, popularity: event.target.checked }));
    };

    const handleSpecialPriceFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, specialPrice: event.target.checked }));
    };
    const handleNewCarFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, newCar: event.target.checked }));
    };
    const handleNewCarLevelFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, newCarLevel: event.target.checked }));
    };
    const handleFastRentalFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, fastRental: event.target.checked }));
    };
    const handlePremiumFilterChange = (event) => {
        setFilters((prevFilters) => ({ ...prevFilters, premium: event.target.checked }));
    };
    return (
        <>
            <div
                className='filter-section'
                ref={filterSectionRef}>
                {(filters.carModel.length > 0 ||
                    filters.regionGroups.length > 0 ||
                    filters.price !== null ||
                    filters.popularity ||
                    filters.specialPrice ||
                    filters.newCar ||
                    filters.newCarLevel ||
                    filters.fastRental ||
                    filters.premium) && (
                    <button
                        onClick={resetFilters}
                        className='btn-reset'>
                        Reset
                    </button>
                )}
                <div className='filter-group'>
                    <button
                        type='button'
                        className={`btn-main-filter ${openStates.carModel ? 'open' : ''} ${
                            filters.carModel.length > 0 ? 'active' : ''
                        }`}
                        onClick={() => handleFilterOptionToggle('carModel')}>
                        Car Model
                        {filters.carModel.length > 0 && (
                            <a
                                href='#a'
                                className='btn-reset-sub'
                                onClick={() => (filters.carModel = [])}>
                                Reset
                            </a>
                        )}
                    </button>
                    {openStates.carModel && (
                        <div
                            id='carModel'
                            className='filter-tooltip'>
                            <button
                                type='button'
                                className='btn-tooltip-close'
                                onClick={() => handleFilterOptionToggle(null)}>
                                Close
                            </button>
                            <ul>
                                {filterOptions.carModel.map((model, index) => (
                                    <li key={index}>
                                        <input
                                            id={model}
                                            className='btn-sub-filter'
                                            type='checkbox'
                                            checked={filters.carModel.includes(model)}
                                            value={model}
                                            onChange={handleCarModelFilterChange}
                                        />
                                        <label htmlFor={model}> {model}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='filter-group'>
                    <button
                        type='button'
                        className={`btn-main-filter ${openStates.regionGroups ? 'open' : ''} ${
                            filters.regionGroups.length > 0 ? 'active' : ''
                        }`}
                        onClick={() => handleFilterOptionToggle('regionGroups')}>
                        Rental location
                        {filters.regionGroups.length > 0 && (
                            <a
                                href='#a'
                                className='btn-reset-sub'
                                onClick={() => (filters.regionGroups = [])}>
                                Reset
                            </a>
                        )}
                    </button>
                    {openStates.regionGroups && (
                        <div
                            id='regionGroups'
                            className='filter-tooltip'>
                            <button
                                type='button'
                                className='btn-tooltip-close'
                                onClick={() => handleFilterOptionToggle(null)}>
                                Close
                            </button>
                            <ul>
                                {filterOptions[1].regionGroups.map((group, index) => (
                                    <li key={index}>
                                        <input
                                            id={group}
                                            className='btn-sub-filter'
                                            type='checkbox'
                                            checked={filters.regionGroups.includes(group)}
                                            value={group}
                                            onChange={handleRegionGroupsFilterChange}
                                        />
                                        <label htmlFor={group}> {group}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='filter-group'>
                    <button
                        type='button'
                        className={`btn-main-filter ${openStates.price ? 'open' : ''} ${
                            filters.price !== null ? 'active' : ''
                        }`}
                        onClick={() => handleFilterOptionToggle('price')}>
                        가격
                        {filters.price !== null && (
                            <a
                                href='#a'
                                className='btn-reset-sub'
                                onClick={() => (filters.price = null)}>
                                Reset
                            </a>
                        )}
                    </button>
                    {openStates.price && (
                        <div
                            id='price'
                            className='filter-tooltip'>
                            <button
                                type='button'
                                className='btn-tooltip-close'
                                onClick={() => handleFilterOptionToggle(null)}>
                                Close
                            </button>
                            <ul>
                                {filterOptions.price.map((price, index) => (
                                    <li key={index}>
                                        <input
                                            id={price}
                                            className='btn-sub-filter'
                                            type='radio'
                                            checked={filters.price !== null}
                                            name='price'
                                            value={price}
                                            onChange={handlePriceFilterChange}
                                        />
                                        <label htmlFor={price}> {price}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='filter-group'>
                    <ul id='special'>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='popularity'
                                checked={filters.popularity}
                                type='checkbox'
                                onChange={handlePopularityFilterChange}
                            />
                            <label htmlFor='popularity'>Popularity</label>
                        </li>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='specialPrice'
                                checked={filters.specialPrice}
                                type='checkbox'
                                onChange={handleSpecialPriceFilterChange}
                            />
                            <label htmlFor='specialPrice'>Special Price</label>
                        </li>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='newCar'
                                checked={filters.newCar}
                                type='checkbox'
                                onChange={handleNewCarFilterChange}
                            />
                            <label htmlFor='newCar'>New Car</label>
                        </li>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='newCarLevel'
                                checked={filters.newCarLevel}
                                type='checkbox'
                                onChange={handleNewCarLevelFilterChange}
                            />
                            <label htmlFor='newCarLevel'>New Car Level</label>
                        </li>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='fastRental'
                                checked={filters.fastRental}
                                type='checkbox'
                                onChange={handleFastRentalFilterChange}
                            />
                            <label htmlFor='fastRental'>Fast Rental</label>
                        </li>
                        <li>
                            <input
                                className='btn-tag-filter'
                                id='premium'
                                checked={filters.premium}
                                type='checkbox'
                                onChange={handlePremiumFilterChange}
                            />
                            <label htmlFor='premium'>Premium</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`bg-dim ${
                    openStates.carModel || openStates.regionGroups || openStates.price ? 'open' : ''
                }`}></div>
        </>
    );
};

export default FilterSection;
