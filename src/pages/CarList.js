import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoCar from '../components/NoCar';
import FilterSection from '../components/FilterSection';
import TableSection from '../components/TableSection';

/**
 * CarList component which lists the car data.
 * The component utilizes various states and effects to handle and filter data.
 */
const CarList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cars, setCars] = useState([]);
    const [filters, setFilters] = useState({
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
    const [filteredCars, setFilteredCars] = useState([]);

    const fetchData = () => {
        setLoading(true);
        fetch('http://localhost:8080/db')
            .then((response) => response.json())
            .then((data) => {
                setCars(data.carClasses);
                setFilteredCars(data.carClasses);
            })
            .catch((error) => setError(true))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter the car data based on the current filters.
    useEffect(() => {
        let filteredList = [...cars];

        if (filters.carModel.length > 0) {
            filteredList = filteredList.filter((car) => filters.carModel.includes(car.carModel));
        }

        if (filters.regionGroups.length > 0) {
            filteredList = filteredList.filter((car) =>
                car.regionGroups.some((rg) => filters.regionGroups.includes(rg))
            );
        }

        if (filters.price !== null) {
            filteredList = filteredList.sort((a, b) =>
                filters.price === 'asc' ? a.price - b.price : b.price - a.price
            );
        }

        if (filters.popularity) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('Popularity'));
        }

        if (filters.specialPrice) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('Special Price'));
        }

        if (filters.newCar) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('New Car'));
        }

        if (filters.newCarLevel) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('New Car Level'));
        }

        if (filters.fastRental) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('Fast Rental'));
        }

        if (filters.premium) {
            filteredList = filteredList.filter((car) => car.carTypeTags.includes('Premium'));
        }

        setFilteredCars(filteredList);
    }, [filters, cars]);

    let tableSection;
    if (loading) {
        tableSection = <Loading />;
    } else if (error) {
        tableSection = <Error />;
    } else if (filteredCars.length === 0) {
        tableSection = <NoCar />;
    } else {
        tableSection = <TableSection cars={filteredCars} />;
    }

    return (
        <>
            <div className='card-table-wrap'>
                <FilterSection
                    filters={filters}
                    setFilters={setFilters}
                />
                {tableSection}
            </div>
        </>
    );
};

export default CarList;
